package ro.mve.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailSender {

	@Autowired(required=false)
	public JavaMailSender emailSender;
	
//	@Value("${app.micro20.techMailTo}")
	private String sendTo;
	

	public EmailSender(Environment env) {
		this.sendTo = env.getProperty("techMailTo");
	}



	public void sendMessage(String... messages) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(sendTo);
		message.setSubject("Immobilis");
		String msg = messages.length==0 ? "You got mail" : messages[0];
		message.setText(msg);
		
		emailSender.send(message);

	}

}
