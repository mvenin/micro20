package ro.mve.immobilis;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URI;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import com.gargoylesoftware.htmlunit.IncorrectnessListener;
import com.gargoylesoftware.htmlunit.ProxyConfig;
import com.gargoylesoftware.htmlunit.SilentCssErrorHandler;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.WebResponse;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

import lombok.extern.slf4j.Slf4j;
import ro.mve.util.TimeLimiter;

@Slf4j
@Component
public class WebClientProvider {
	
	private static final String IMMOB_COOKIE_PATH = "/immobilis/cookie.txt";
	private final Environment env;
	private int errCounter;

	public WebClientProvider(Environment env) {
		this.env = env;
	}
	
	public Optional<String> testGetPageContent(String uri) {
		try {
			String page = getPage(URI.create(uri));
			return Optional.of(page);	
		} catch (Exception e) {
			if(errCounter++ < 5 )
				return Optional.of(e.getLocalizedMessage());	
		}
		return Optional.empty();
	}

	public String getPage(URI uri) throws SimException {
		return htmlUnit(uri);
	}
	
	public Document fetchFromUri(final URI uri) {
		return Jsoup.parse(getPage(uri));
	}

	private boolean isProxyEnabled() {
		Boolean enabled = env.getProperty("micro20.proxyEnabled", Boolean.class);
		return enabled != null && enabled;
	}

	private ProxyConfig getProxyConfig() {
		String proxyHost = env.getProperty("micro20.proxyHost");
		int proxyPort = env.getProperty("micro20.proxyPort", Integer.class);
		return new ProxyConfig(proxyHost, proxyPort);
	}

	private CredentialsProvider getCredentialsProvider() {
		String proxyUserName = env.getProperty("micro20.proxyUsername");
		String proxyPassword = env.getProperty("micro20.proxyPassword");
		
		ProxyConfig pc = getProxyConfig();
		CredentialsProvider credsProvider = new BasicCredentialsProvider();
		credsProvider.setCredentials(new AuthScope(pc.getProxyHost(), pc.getProxyPort()),
				new UsernamePasswordCredentials(proxyUserName, proxyPassword));
		return credsProvider;
	}
	
	private List<String> cookies(URI uri) {
		List<String> headers= new ArrayList<>();
		headers.add("CKTYPEBIENVISITE=; Expires=Sun, 04-Feb-2058 14:07:13 GMT; Path=/");
		headers.add("IW_CLIENT_SOURCE=; Expires=Sun, 04-Feb-2058 14:07:13 GMT; Path=/");
		headers.add("IWEBCHECK=N; Expires=Sun, 04-Feb-2058 14:07:13 GMT; Path=/");
		headers.add("CKVISITDATELAST=201712061507; Expires=Sun, 04-Feb-2058 14:07:13 GMT; Path=/");
		return headers;
	}
	
	private Map<String,String> headers(URI uri) {
 		String userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36";
 		
		Map<String,String> headers= new HashMap<>();
		headers.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		headers.put("Upgrade-Insecure-Requests", "1");
		headers.put("Connection", "keep-alive");
		headers.put("Host", "www.immoweb.be");
		headers.put("Referer", uri.toString());
		headers.put("User-Agent", userAgent);
		headers.put("Accept-Language", "fr,en-US;q=0.7,en;q=0.3");
		headers.put("Accept-Encoding", "deflate");
		headers.put("IWEBCHECK", "N");
		headers.put("CKVISITCOUNT", "1");
		
		headers.put("P3P", "NOI DSP PSAa PSDa OUR BUS UNI");
		headers.put("X-CDN", "Incapsula");
		headers.put("X-Iinfo", "12-13565264-13561832 PNNN RT(1512569227798 21) q(0 0 0 -1) r(52 52) U5");
		return headers;
	}
	
	private String readCookieFromFile() {
		try {
			InputStream cookieAsStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(IMMOB_COOKIE_PATH);
			if (cookieAsStream != null) {
				String cookieContent = new BufferedReader(new InputStreamReader(cookieAsStream)).lines()
						.collect(Collectors.joining(System.lineSeparator()));
				return cookieContent;
			}
		} catch (Exception e) {
			log.error(e.getMessage(), e);
		}
		return "";
	}
	
	private String htmlUnit(URI uri) throws SimException {
		try (WebClient client = new WebClient()) {
			client.setIncorrectnessListener(new IncorrectnessListener() {
		        @Override
		        public void notify(String arg0, Object arg1) {
		        }
		    });
			client.setCssErrorHandler(new SilentCssErrorHandler() );
//			client.setJavaScriptErrorListener(new JavaScriptErrorListener() {
//			client.setHTMLParserListener(new HTMLParserListener() {
			
			client.getOptions().setCssEnabled(true);
			client.getOptions().setRedirectEnabled(true);
			client.getOptions().setJavaScriptEnabled(true);

			client.getOptions().setThrowExceptionOnFailingStatusCode(false);
			client.getOptions().setThrowExceptionOnScriptError(false);
			client.getOptions().setPrintContentOnFailingStatusCode(false);
			client.setCssErrorHandler(new SilentCssErrorHandler());

			client.getOptions().setDownloadImages(false);
			client.getOptions().setGeolocationEnabled(false);
			client.getOptions().setDoNotTrackEnabled(true);
			client.getOptions().setScreenHeight(1080);
			client.getOptions().setScreenWidth(1200);
			
			for (Entry<String, String> e : headers(uri).entrySet()) {
				  client.addRequestHeader(e.getKey(), e.getValue());
			}
			
			for (String cookie : cookies(uri) ) {
				try {
					client.addCookie(cookie, uri.toURL(), "");
				} catch (MalformedURLException e1) {
				}
			}

			if (isProxyEnabled()) {
				client.getOptions().setProxyConfig(getProxyConfig());
				client.setCredentialsProvider(getCredentialsProvider());
			}

			try {
				HtmlPage page = client.getPage(uri.toString());
				WebResponse response = page.getWebResponse();
				return response.getContentAsString(Charset.forName("UTF-8")).trim();

			} catch (IOException e) {
				throw new SimException(SimExceptionInfo.SIM_NET_001);
			}
		}
	}
	
	private String jsoup(URI uri) throws SimException {
		Connection connection = newJsoupConnection(uri);
		try {
			Document doc = TimeLimiter.withMillisLimit(() -> {
				return connection.get();
			}, 1000 * 1);

			return doc.html();

		} catch (Exception e) {
			throw new SimException(SimExceptionInfo.SIM_NET_001);
		}
		
	}
	
	private Connection newJsoupConnection(URI uri) {
		Connection connection;
		try {
			connection = Jsoup.connect(uri.toString());
		} catch (Exception e) {
			log.error("Malformed uri: " + uri);
			throw new SimException(SimExceptionInfo.SIM_NET_001);
		}
		
 		
		Map<String, String> headers = headers(uri);
		connection.headers(headers);
		connection.userAgent(headers.get("User-Agent"));
		connection.referrer(uri.toString());
		connection.cookie("Cookie", readCookieFromFile());
		
		return connection;
	}
	

}
