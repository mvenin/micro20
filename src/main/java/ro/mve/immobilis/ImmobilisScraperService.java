package ro.mve.immobilis;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ImmobilisScraperService {

	 static String apiUriBaseFr = "https://www.immoweb.be/fr/recherche/appartement/a-vendre?";
	 static String apiUriBaseNl = "https://www.immoweb.be/nl/zoek/grond/te-koop?";
	 static String apiUriParams = "zips=1150,1200&minprice=270000&maxprice=350000&minroom=2&xorderby1=datemodification&page=1";

	@Autowired
	private WebClientProvider webClient;

	private final URI uriToScrap;

	public ImmobilisScraperService() {
		try {
			this.uriToScrap = new URI(apiUriBaseNl + apiUriParams);
		} catch (URISyntaxException e) {
			throw new RuntimeException(e);
		}
	}

	public boolean checkRobotDetection() {
		Document doc = webClient.fetchFromUri(uriToScrap);

		boolean robotDetected = false;

		Elements metaElm = doc.getElementsByTag("meta");
		if (metaElm != null && "robots".equals(metaElm.attr("NAME").toLowerCase())) {
			log.info(metaElm.outerHtml());
			robotDetected = true;
		} else {
			log.info(doc.select(".result-xl").stream().findFirst().orElse(metaElm.first()).outerHtml());
		}

		return robotDetected;

	}

	public Optional<String> testGetPageContent(String uri ) {
		uri = uri==null ? apiUriBaseFr.concat(apiUriParams) : uri;
		return webClient.testGetPageContent( uri );
	}

}