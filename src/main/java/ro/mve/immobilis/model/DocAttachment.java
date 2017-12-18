package ro.mve.immobilis.model;

import java.nio.file.Path;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ro.mve.core.BaseEntity;

@Data
@ToString
@NoArgsConstructor
@Document
public class DocAttachment extends BaseEntity {
	
	@DBRef
	HtmlDoc htmlDoc;
	
	DBObject metaData = new BasicDBObject();
	Object gridFSDBFileId;

	String filePath;
	String mimeType;
	Long lobSize;
}
