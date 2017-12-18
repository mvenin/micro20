package ro.mve.immobilis.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ro.mve.core.BaseEntity;

@Data
@ToString
@NoArgsConstructor
@Document
public class HtmlDoc extends BaseEntity {
	
	private String uri;
	
	private String parentId;
	private String parentUri;
	
	private String webSiteSrc;
	private String parser;
	
	private LocalDate processedDate;
	
	private List<DocAttachment> listOfDocAtt= new ArrayList<>();

	public void addDocAtt(DocAttachment docatt) {
		Objects.requireNonNull(docatt);
		docatt.setHtmlDoc(this);
		this.listOfDocAtt.add(docatt);
	}
	
}