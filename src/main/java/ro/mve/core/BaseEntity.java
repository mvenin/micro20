package ro.mve.core;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import lombok.Data;

@Data
public abstract class BaseEntity {

	@Id
	private String id = UUID.randomUUID().toString();
	
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDate creationDate = LocalDate.now();
	
	private Long version;
	
}
