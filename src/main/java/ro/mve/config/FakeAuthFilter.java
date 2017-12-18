package ro.mve.config;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.Principal;
import java.util.Collection;
import java.util.Enumeration;
import java.util.LinkedList;
import java.util.Locale;
import java.util.Map;

import javax.servlet.AsyncContext;
import javax.servlet.DispatcherType;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpUpgradeHandler;
import javax.servlet.http.Part;

import org.springframework.context.annotation.Profile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class FakeAuthFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // do nothing
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        final HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        
        if (!"localhost".equals(request.getServerName())) {
            filterChain.doFilter(request, response);
        } else {
            final String fakeUsername =  request.getHeader("x-fake-authentication");
            if (fakeUsername == null) {
                filterChain.doFilter(request, response);
            } else {
                System.out.println("---------- got fake userid: " + fakeUsername);
//                HttpServletRequest newFakeRequest = newFakeRequest(request, fakeUsername);
                
                final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
                
                Authentication fakeAuthentication = new Authentication() {
                    @Override
                    public Collection<? extends GrantedAuthority> getAuthorities() {
                        Collection<GrantedAuthority> authorities = new LinkedList<GrantedAuthority>();
                        
                        if ("admin".equalsIgnoreCase(fakeUsername)) {
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

                filterChain.doFilter(request, response);
            }
        }
    }

    @Override
    public void destroy() {
        // do nothing
    }
    
    private HttpServletRequest newFakeRequest(final HttpServletRequest request, String fakeUsername) {
    	HttpServletRequest fakeRequest = new HttpServletRequest() {
            public Principal getUserPrincipal() {
                return new com.sun.security.auth.UserPrincipal(fakeUsername);
            }

            // Delegate all the other methods:
            public String getAuthType() {
                return request.getAuthType();
            }

            public Cookie[] getCookies() {
                return request.getCookies();
            }

            public long getDateHeader(String s) {
                return request.getDateHeader(s);
            }

            public String getHeader(String s) {
                return request.getHeader(s);
            }

            public Enumeration<String> getHeaders(String s) {
                return request.getHeaders(s);
            }

            public Enumeration<String> getHeaderNames() {
                return request.getHeaderNames();
            }

            public int getIntHeader(String s) {
                return request.getIntHeader(s);
            }

            public String getMethod() {
                return request.getMethod();
            }

            public String getPathInfo() {
                return request.getPathInfo();
            }

            public String getPathTranslated() {
                return request.getPathTranslated();
            }

            public String getContextPath() {
                return request.getContextPath();
            }

            public String getQueryString() {
                return request.getQueryString();
            }

            public String getRemoteUser() {
                return request.getRemoteUser();
            }

            public boolean isUserInRole(String s) {
                return request.isUserInRole(s);
            }

            public String getRequestedSessionId() {
                return request.getRequestedSessionId();
            }

            public String getRequestURI() {
                return request.getRequestURI();
            }

            public StringBuffer getRequestURL() {
                return request.getRequestURL();
            }

            public String getServletPath() {
                return request.getServletPath();
            }

            public HttpSession getSession(boolean b) {
                return request.getSession(b);
            }

            public HttpSession getSession() {
                return request.getSession();
            }

            public String changeSessionId() {
                return request.changeSessionId();
            }

            public boolean isRequestedSessionIdValid() {
                return request.isRequestedSessionIdValid();
            }

            public boolean isRequestedSessionIdFromCookie() {
                return request.isRequestedSessionIdFromCookie();
            }

            public boolean isRequestedSessionIdFromURL() {
                return request.isRequestedSessionIdFromURL();
            }

            public boolean isRequestedSessionIdFromUrl() {
                return request.isRequestedSessionIdFromUrl();
            }

            public boolean authenticate(HttpServletResponse httpServletResponse) throws IOException, ServletException {
                return request.authenticate(httpServletResponse);
            }

            public void login(String s, String s1) throws ServletException {
                request.login(s, s1);
            }

            public void logout() throws ServletException {
                request.logout();
            }

            public Collection<Part> getParts() throws IOException, ServletException {
                return request.getParts();
            }

            public Part getPart(String s) throws IOException, ServletException {
                return request.getPart(s);
            }

            public <T extends HttpUpgradeHandler> T upgrade(Class<T> aClass) throws IOException, ServletException {
                return request.upgrade(aClass);
            }

            public Object getAttribute(String s) {
                return request.getAttribute(s);
            }

            public Enumeration<String> getAttributeNames() {
                return request.getAttributeNames();
            }

            public String getCharacterEncoding() {
                return request.getCharacterEncoding();
            }

            public void setCharacterEncoding(String s) throws UnsupportedEncodingException {
                request.setCharacterEncoding(s);
            }

            public int getContentLength() {
                return request.getContentLength();
            }

            public long getContentLengthLong() {
                return request.getContentLengthLong();
            }

            public String getContentType() {
                return request.getContentType();
            }

            public ServletInputStream getInputStream() throws IOException {
                return request.getInputStream();
            }

            public String getParameter(String s) {
                return request.getParameter(s);
            }

            public Enumeration<String> getParameterNames() {
                return request.getParameterNames();
            }

            public String[] getParameterValues(String s) {
                return request.getParameterValues(s);
            }

            public Map<String, String[]> getParameterMap() {
                return request.getParameterMap();
            }

            public String getProtocol() {
                return request.getProtocol();
            }

            public String getScheme() {
                return request.getScheme();
            }

            public String getServerName() {
                return request.getServerName();
            }

            public int getServerPort() {
                return request.getServerPort();
            }

            public BufferedReader getReader() throws IOException {
                return request.getReader();
            }

            public String getRemoteAddr() {
                return request.getRemoteAddr();
            }

            public String getRemoteHost() {
                return request.getRemoteHost();
            }

            public void setAttribute(String s, Object o) {
                request.setAttribute(s, o);
            }

            public void removeAttribute(String s) {
                request.removeAttribute(s);
            }

            public Locale getLocale() {
                return request.getLocale();
            }

            public Enumeration<Locale> getLocales() {
                return request.getLocales();
            }

            public boolean isSecure() {
                return request.isSecure();
            }

            public RequestDispatcher getRequestDispatcher(String s) {
                return request.getRequestDispatcher(s);
            }

            public String getRealPath(String s) {
                return request.getRealPath(s);
            }

            public int getRemotePort() {
                return request.getRemotePort();
            }

            public String getLocalName() {
                return request.getLocalName();
            }

            public String getLocalAddr() {
                return request.getLocalAddr();
            }

            public int getLocalPort() {
                return request.getLocalPort();
            }

            public ServletContext getServletContext() {
                return request.getServletContext();
            }

            public AsyncContext startAsync() throws IllegalStateException {
                return request.startAsync();
            }

            public AsyncContext startAsync(ServletRequest servletRequest, ServletResponse servletResponse) throws IllegalStateException {
                return request.startAsync(servletRequest, servletResponse);
            }

            public boolean isAsyncStarted() {
                return request.isAsyncStarted();
            }

            public boolean isAsyncSupported() {
                return request.isAsyncSupported();
            }

            public AsyncContext getAsyncContext() {
                return request.getAsyncContext();
            }

            public DispatcherType getDispatcherType() {
                return request.getDispatcherType();
            }
        };
        return fakeRequest;
    }
}
