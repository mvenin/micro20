package micro20;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;

import ro.mve.Micro20Application;
import ro.mve.immobilis.dao.DocAttRepository;
import ro.mve.immobilis.dao.HtmlDocRepository;
import ro.mve.immobilis.model.DocAttachment;
import ro.mve.immobilis.model.HtmlDoc;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT, classes = Micro20Application.class)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-dev.yml")
@ActiveProfiles("xxx")
@Ignore
public class Micro20ApplicationTests {

	@Autowired
	GridFsTemplate gridFsTemplate;
	
	@Autowired
	HtmlDocRepository docRepo;
	
	@Autowired
	DocAttRepository docattRepo;

	@Test
	public void contextLoads() throws IOException {
		DBObject metaData = new BasicDBObject();
		metaData.put("name", "test-file");

		String id1 = "5a303cc12cc8f84c50d90844";
		GridFSDBFile gridFsdbFile = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id1)));
		
		HtmlDoc doc= new HtmlDoc();
		doc.setUri("http://localhost/4");
		HtmlDoc docSaved = docRepo.save(doc);
		
		DocAttachment docatt = new DocAttachment();
		docatt.setHtmlDoc(doc);
		docatt.setMetaData(metaData);
		Path filePath = Paths.get("c:/dev/4.txt");
		docatt.setFilePath(filePath.toString());
		
		ByteArrayInputStream contentStream = new ByteArrayInputStream("some data".getBytes());
		
		Object docattId = gridFsTemplate.store(contentStream, filePath.toString(), "plain/text", docatt.getMetaData()).getId();
		docatt.setGridFSDBFileId(docattId);
		DocAttachment docattSave = docattRepo.save(docatt);
		
		docSaved.addDocAtt(docattSave);
		docRepo.save(docSaved);
	}


}













