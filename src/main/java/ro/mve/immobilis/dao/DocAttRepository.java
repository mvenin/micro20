package ro.mve.immobilis.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

import ro.mve.immobilis.model.DocAttachment;

@Transactional
public interface DocAttRepository extends MongoRepository<DocAttachment, String> {
	//    
}