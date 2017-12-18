package ro.mve.immobilis;

import java.util.concurrent.atomic.AtomicInteger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import ro.mve.util.EmailSender;

@Component
public class ScrapJob {
	private static final Logger logger = LoggerFactory.getLogger(ScrapJob.class);

	private final ImmobilisScraperService scraper;
	private final AtomicInteger roboCounter = new AtomicInteger();

	private final EmailSender emailService;

	public ScrapJob(ImmobilisScraperService scraper, EmailSender emailService, Environment env) {
		this.emailService = emailService;
		this.scraper = scraper;
		logger.info("=== cron.every20min: {}", env.getProperty("app.micro20.cron.every20min"));
	}

	//@Scheduled(cron = "${micro20.cron.every20min}")
	public void run() {
		boolean robotDetection = scraper.checkRobotDetection();
		if (robotDetection && roboCounter.incrementAndGet() < 5) {
			this.emailService.sendMessage("Robo detected");
		} else {
			logger.info("=== Robo not detected");
		}
	}
}
