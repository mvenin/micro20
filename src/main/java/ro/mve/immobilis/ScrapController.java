package ro.mve.immobilis;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ro.mve.util.EmailSender;

@RestController
@RequestMapping("/api/scrap")
@ControllerAdvice
public class ScrapController {

	@Autowired
	private EmailSender emailService;

	@Autowired
	private ImmobilisScraperService scrapService;

	@GetMapping
	@ResponseBody
	public ResponseEntity<String> testGetPage(@RequestParam String uri) {
		Optional<String> page = scrapService.testGetPageContent( uri );
		String pageContent = page.orElse(null);
		emailService.sendMessage(pageContent);

		return ResponseEntity.ok(pageContent);

	}

}
