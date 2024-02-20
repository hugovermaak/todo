import { Todo } from "@/types";
export const filterByStatus = (
  todos: Todo[],
  status: "all" | "active" | "completed"
) => {
  return todos.filter((todo) => {
    if (status === "all") {
      return true;
    } else if (status === "active") {
      return !todo.isCompleted;
    } else if (status === "completed") {
      return todo.isCompleted;
    }
  });
};
