package ro.mve.todolist;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ro.mve.core.ApiError;

@RestController
@RequestMapping("/api/todos")
@ControllerAdvice
public class ToDoController {
	private static final Logger logger = LoggerFactory.getLogger(ToDoController.class);

	private final TodoRepository mt;

	public ToDoController(TodoRepository mt) {
		this.mt = mt;
	}

	@GetMapping
	@ResponseBody
	public ResponseEntity<?> getAllTodos() {
		List<TodoAction> allTodos = mt.findAll();
		return ResponseEntity.ok(allTodos);
	}

	@PostMapping
	@ResponseBody
	public ResponseEntity<?> createTodo(@RequestBody TodoAction todo) {
		if (todo.getName() == null || todo.getDueDate() == null) {
			throw new RuntimeException("Null fields for " + todo.toString());
		}
		mt.insert(todo);
		return ResponseEntity.ok(todo);
	}

	@DeleteMapping("/{id}")
	@ResponseBody
	public ResponseEntity<?> deleteTodo(@PathVariable("id") String id) {
		TodoAction todoAction = mt.findOne(id);
		if (todoAction != null)
			mt.delete(todoAction);
		else
			logger.debug("No Todo found for id=" + id);

		return ResponseEntity.noContent().build();
	}

	@ExceptionHandler(Exception.class)
	public ApiError myError(Exception ex) {
		ApiError err = new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getClass().getName(), ex.getMessage());
		logger.debug(err.toString());
		return err;
	}
}
