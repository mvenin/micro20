package ro.mve.todolist;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ro.mve.core.BaseEntity;

@Getter
@Setter
@NoArgsConstructor
public class TodoAction extends BaseEntity {
	public enum Priority {
		LOW, NORMAL, HIGH, CRITICAL
	}

	private String name;
	private LocalDate dueDate;
	private LocalDate complitionDate;
	private Boolean deleted;
	private Priority priority = Priority.NORMAL;

	public boolean isActive() {
		return !isCompleted() && !isDeleted();
	}

	public boolean isCompleted() {
		return this.complitionDate != null;
	}

	public boolean isDeleted() {
		return Boolean.TRUE.equals(deleted);
	}

	public boolean isOverDue() {
		return LocalDate.now().isBefore(dueDate);
	}

	@Override
	public String toString() {
		return "TodoAction [name=" + name + ", dueDate=" + dueDate + ", complitionDate=" + complitionDate + ", deleted="
				+ deleted + ", priority=" + priority + "]";
	}
	
	
}
