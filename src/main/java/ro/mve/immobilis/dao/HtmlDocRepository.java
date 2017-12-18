package ro.mve.immobilis.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

import ro.mve.immobilis.model.HtmlDoc;

@Transactional
public interface HtmlDocRepository extends MongoRepository<HtmlDoc, String> {
	//    
}
