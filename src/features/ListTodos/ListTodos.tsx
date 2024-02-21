import { useEffect, useState } from "react";
import { TodoItem, Input, Icon } from "@/components";
import { Todo, TodoList } from "@/types";
import db from "@/data/db";
import { ToggleCompleted } from "@/components";

type ListProps = {
  list: TodoList | undefined;
};

const ListTodos = ({ list }: ListProps) => {
  const [todos, setTodos] = useState<Todo[]>();
  const [completed, setCompleted] = useState<Todo[]>();
  const [showCompleted, setShowCompleted] = useState(false);
  const [newTask, setNewTask] = useState("");

  // Fetch todos on mount and when ever the list changes
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  // Fetch todos based on the list id
  const fetchTodos = () => {
    if (list && list.id) {
      db.todos
        .where("listId")
        .equals(list?.id)
        .toArray()
        .then((res) => {
          const done = res.filter((item) => item.isCompleted);
          const active = res.filter((item) => !item.isCompleted);
          setTodos(active);
          setCompleted(done);
          db.todoLists.update(list.id!, { todoCount: active.length });
        });
    }
  };

  const handleTaskInputChange = (value: string) => {
    setNewTask(value);
  };

  // When hitting enter, save the new task to the database
  const handleOnEnter = async () => {
    try {
      await db.todos.add({
        listId: list?.id,
        label: newTask,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        order: 0,
        isCompleted: false,
      });
      setNewTask("");
      fetchTodos();
    } catch (e) {
      console.log("FAILED");
    }
  };

  // When a todo is completed, update the database and fetch new todos
  const handleOnComplete = (todo: Todo) => {
    db.todos
      .update(todo.id!, { isCompleted: !todo.isCompleted })
      .then(() => fetchTodos());
  };

  // When a todo is deleted, delete from the database and fetch new todos
  const handleOnDelete = (todo: Todo) => {
    if (todo.id) {
      db.todos.delete(todo.id).then(() => fetchTodos());
    }
  };

  // Sorry I could not get to this in time
  const handleSetReminder = (todo: Todo) => {
    console.log("ON SET REMINDER", todo);
  };

  return (
    <section className="flex-1">
      <div className="m-4 p-4 max-w-[720px] w-full mx-auto flex flex-col gap-2">
        <h3 className="text-2xl mb-4 flex items-center gap-2">
          <Icon name={list?.icon || "home"} className="w-10 h-10" />{" "}
          {list?.label}
        </h3>
        <Input
          variant="task"
          placeholder="Enter new task ..."
          value={newTask}
          onChange={handleTaskInputChange}
          onEnter={handleOnEnter}
        />
        <div
          className="overflow-auto flex flex-col gap-2"
          style={{ height: "calc(100vh - 200px)" }}
        >
          {todos?.map((todo) => (
            <TodoItem
              todo={todo}
              key={String(todo?.id)}
              onComplete={() => handleOnComplete(todo)}
              onDelete={() => handleOnDelete(todo)}
              onSetReminder={() => handleSetReminder(todo)}
              onUpdate={() => fetchTodos()}
            />
          ))}

          <ToggleCompleted
            show={showCompleted}
            onToggle={() => setShowCompleted(!showCompleted)}
          />
          {showCompleted ? (
            <div className="flex flex-col gap-2">
              {completed?.map((todo) => (
                <TodoItem
                  todo={todo}
                  key={String(todo.id)}
                  onComplete={() => handleOnComplete(todo)}
                  onDelete={() => handleOnDelete(todo)}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default ListTodos;
