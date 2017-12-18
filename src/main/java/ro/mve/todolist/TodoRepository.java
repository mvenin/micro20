package ro.mve.todolist;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface TodoRepository extends MongoRepository<TodoAction, String> {
    // 
}