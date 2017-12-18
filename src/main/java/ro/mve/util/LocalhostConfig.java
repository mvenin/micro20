package ro.mve.util;

import java.net.Authenticator;
import java.net.InetAddress;
import java.net.PasswordAuthentication;
import java.net.UnknownHostException;
import java.util.logging.Level;


public class LocalhostConfig {
	
	static {
		java.util.logging.Logger.getLogger("com.gargoylesoftware").setLevel(Level.OFF); 
		System.setProperty("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.NoOpLog");
	}
	
	public static boolean setProxyOnLocalHost() {
		try {
			if ( !InetAddress.getLocalHost().getHostAddress().equals(System.getenv("local_ip"))) {
				return Boolean.FALSE;
			}
			
		} catch (UnknownHostException e) {
		}
		System.setProperty("http.nonProxyHosts", "localhost");
		System.setProperty("https.nonProxyHosts", "localhost");
		System.setProperty("http.proxySet", "true");
		System.setProperty("https.proxySet", "true");

		
		String proxyHost = System.getenv("proxyHost");
		String proxyPort = System.getenv("proxyPort");
		String proxyUser = System.getenv("proxyUser");
		String proxyPasswd = System.getenv("proxyPassword");
		
		System.setProperty("http.proxyHost", proxyHost);
		System.setProperty("http.proxyPort", proxyPort);
		System.setProperty("http.proxyUserName", proxyUser);
		System.setProperty("http.proxyPassword", proxyPasswd);

		System.setProperty("https.proxyHost", proxyHost);
		System.setProperty("https.proxyPort", proxyPort);
		System.setProperty("https.proxyUserName", proxyUser);
		System.setProperty("https.proxyPassword", proxyPasswd);

		Authenticator.setDefault(new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(proxyUser, proxyPasswd.toCharArray());
			}
		});
		return Boolean.TRUE;
	}
	
	public static boolean setFiddlerProxyOnLocalHost() {
		System.setProperty("http.proxyHost", "127.0.0.1");
	    System.setProperty("https.proxyHost", "127.0.0.1");
	    System.setProperty("http.proxyPort", "8888");
	    System.setProperty("https.proxyPort", "8888");
	    return Boolean.TRUE;
	}

}
