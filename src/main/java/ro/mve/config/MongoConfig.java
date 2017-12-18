package ro.mve.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableMongoRepositories(basePackages = "ro.mve")
@EnableTransactionManagement
@Slf4j
public class MongoConfig extends AbstractMongoConfiguration {

	private final Environment env;

	public MongoConfig(Environment env ) {
		this.env = env;
	}

	@Override
	protected String getDatabaseName() {
		return env.getProperty("spring.data.mongodb.database", "micro20");
	}

	@Override
	public Mongo mongo() throws Exception {
		String uri = env.getProperty("spring.data.mongodb.uri");
		return new MongoClient(new MongoClientURI(uri));
	}
	
	@Bean
	public GridFsTemplate gridFsTemplate() throws Exception {
	    return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
	}


}