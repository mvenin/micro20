package ro.mve.config;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.client.token.AccessTokenProvider;
import org.springframework.security.oauth2.client.token.AccessTokenProviderChain;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeAccessTokenProvider;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.filter.CompositeFilter;

@Configuration
@EnableOAuth2Client
@EnableWebSecurity
@SpringBootConfiguration
@EnableAutoConfiguration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private OAuth2ClientContext oauth2ClientContext;
	
	@Bean
	public FilterRegistrationBean oauth2ClientFilterRegistration(OAuth2ClientContextFilter filter) {
		FilterRegistrationBean registration = new FilterRegistrationBean();
		registration.setFilter(filter);
		registration.setOrder(-100);
		return registration;
	}
	
	@RestController
	private static class OAuthController {

	    @RequestMapping(value = {"/logout", "/api/logout"}, method = RequestMethod.GET)
	    @ResponseStatus(HttpStatus.OK)
	    public void logout(HttpServletRequest request, HttpServletResponse response,
				Authentication authentication) throws IOException {
	        new SecurityContextLogoutHandler().logout(request, response, authentication);
	        new DefaultRedirectStrategy().sendRedirect(request, response, "/");
	    }
	    
	    @RequestMapping({ "/user", "/me" })
		public Map<String, String> user(Principal principal) {
			Map<String, String> map = new LinkedHashMap<>();
			map.put("name", principal.getName());
			return map;
		}
		
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
		.and().addFilterBefore(ssoFilter(), BasicAuthenticationFilter.class).exceptionHandling()
		.authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint( "/#/home"))
		.and().authorizeRequests().antMatchers("/",  "/login**", "/webjars/**", "/resources/**", "/*.js").permitAll()
		.and().logout().logoutUrl("/logout")
		.clearAuthentication(true).invalidateHttpSession(false).logoutSuccessUrl("/")
		.and().antMatcher("/api/todos/**").authorizeRequests().antMatchers(HttpMethod.DELETE).hasAnyAuthority("ADMIN")
		.and().antMatcher("/**").authorizeRequests().anyRequest().authenticated()
		;
		// @formatter:on
	}
	
	private Filter ssoFilter() {
		CompositeFilter filter = new CompositeFilter();
		List<Filter> filters = new ArrayList<>();
		filters.add(ssoFilter(fitbit(), "/login/fitbit"));
		filters.add(ssoFilter(github(), "/login/github"));
		filters.add(ssoFilter(facebook(), "/login/fb"));
		filter.setFilters(filters);
		return filter;
	}
	
	private Filter ssoFilter(ClientResources client, String path) {
		OAuth2ClientAuthenticationProcessingFilter oAuth2ClientAuthenticationFilter = new OAuth2ClientAuthenticationProcessingFilter(
				path);
		OAuth2RestTemplate oAuth2RestTemplate = new OAuth2RestTemplate(client.getClient(), oauth2ClientContext);
		AccessTokenProviderChain accessTokenProvider = new AccessTokenProviderChain(Arrays.<AccessTokenProvider> asList(
			new AuthorizationCodeAccessTokenProvider()));
		oAuth2RestTemplate.setAccessTokenProvider(accessTokenProvider);
		
		oAuth2ClientAuthenticationFilter.setRestTemplate(oAuth2RestTemplate);

		UserInfoTokenServices tokenServices = new UserInfoTokenServices(client.getResource().getUserInfoUri(),
				client.getClient().getClientId());
		tokenServices.setRestTemplate(oAuth2RestTemplate);
		
		oAuth2ClientAuthenticationFilter.setTokenServices(tokenServices);
		
		oAuth2ClientAuthenticationFilter.setAuthenticationSuccessHandler(new SimpleUrlAuthenticationSuccessHandler() {
			@Override
			public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
					Authentication authentication) throws IOException, ServletException {
				super.onAuthenticationSuccess(request, response, authentication);
				
                Authentication fakeAuthentication = new Authentication() {
                    @Override
                    public Collection<? extends GrantedAuthority> getAuthorities() {
                        Collection<GrantedAuthority> authorities = new LinkedList<GrantedAuthority>();
                        
                        if (authentication.getName() != null) {
                            authorities.add(new SimpleGrantedAuthority("ADMIN"));
                        }
                        
                        return authorities;
                    }

                    // delegate the rest of the methods:
                    public Object getCredentials() {
                        return authentication.getCredentials();
                    }

                    public Object getDetails() {
                        return authentication.getDetails();
                    }

                    public Object getPrincipal() {
                        return authentication.getPrincipal();
                    }

                    public boolean isAuthenticated() {
                        return authentication.isAuthenticated();
                    }

                    public void setAuthenticated(boolean b) throws IllegalArgumentException {
                        authentication.setAuthenticated(b);
                    }

                    public String getName() {
                        return authentication.getName();
                    }
                };
                SecurityContextHolder.getContext().setAuthentication(fakeAuthentication);
			}
		});

		return oAuth2ClientAuthenticationFilter;
	}
	
	@Bean
	@ConfigurationProperties("facebook")
	public ClientResources facebook() {
		return new ClientResources();
	}

	@Bean
	@ConfigurationProperties("fitbit")
	public ClientResources fitbit() {
		return new ClientResources();
	}

	@Bean
	@ConfigurationProperties("github")
	public ClientResources github() {
		return new ClientResources();
	}
	
	private static class ClientResources {

		@NestedConfigurationProperty
		private AuthorizationCodeResourceDetails client = new AuthorizationCodeResourceDetails();

		@NestedConfigurationProperty
		private ResourceServerProperties resource = new ResourceServerProperties();

		public AuthorizationCodeResourceDetails getClient() {
			return client;
		}

		public ResourceServerProperties getResource() {
			return resource;
		}
	}

}