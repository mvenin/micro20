package ro.mve.core;

import java.util.UUID;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
public class AppUser {

	private String id = UUID.randomUUID().toString();
	private String name;
	private char[] password;
 
}