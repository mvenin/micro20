package ro.mve.web;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class InfoController {

	public enum ServerMetric {
		DATE, IP
	}

	@ResponseBody
	@GetMapping(path="/server/{metric}")
	public ResponseEntity<?> getData(@PathVariable String metric) throws UnknownHostException {
		Object data; 
		String pMetric = metric != null ? metric.toUpperCase() : "";
		if (ServerMetric.IP.name().equals(pMetric))
			data = InetAddress.getLocalHost().getHostAddress();
		else 
			data = new Date();	

		return ResponseEntity.ok(data);
	}
}
