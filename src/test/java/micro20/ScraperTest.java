package micro20;

import org.jsoup.Connection;
import org.jsoup.Jsoup;

import ro.mve.immobilis.ImmobilisScraperService;

public class ScraperTest {

	public static void main(String[] args) {
		// ImmobilisScraper scrap = new ImmobilisScraper();
		// scrap.checkRobotDetection();

		try {
			Connection c = Jsoup.connect("https://postman-echo.com/get?foo1=bar1&foo2=bar2");
			c.ignoreContentType(true);
			System.out.println(c.get().text());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		try {
			Connection c = Jsoup.connect("https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending");
			c.ignoreContentType(true);
			System.out.println();
			System.out.println(c.get().getElementsByTag("section").html());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		try {
			Connection c = Jsoup.connect("https://www.whatismybrowser.com/w/XGKDBEZ");
			c.ignoreContentType(true);
			System.out.println();
			System.out.println(c.get().html());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}
	

}
