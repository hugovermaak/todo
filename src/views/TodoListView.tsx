import { useState } from "react";
import { TodoItem, Input } from "@/components";
import { Todo } from "@/types";

import { ToggleCompleted } from "@/components";

const TodoListView = () => {
  const data: Todo[] = [
    {
      id: "1",
      label: "Milk",
      isCompleted: false,
      order: 0,
    },
    {
      id: "2",
      label: "Bread",
      isCompleted: false,
      order: 0,
    },
    {
      id: "3",
      label: "Bananas",
      isCompleted: false,
      order: 0,
    },
    {
      id: "4",
      label: "Toffees",
      isCompleted: false,
      order: 0,
    },
    {
      id: "5",
      label: "Mushrooms",
      isCompleted: true,
      order: 0,
    },
    {
      id: "6",
      label: "Pears",
      isCompleted: true,
      order: 0,
    },
  ];

  const [showCompleted, setShowCompleted] = useState(true);
  const [newTask, setNewTask] = useState("");

  const handleTaskInputChange = (value: string) => {
    setNewTask(value);
  };

  const handleOnEnter = () => {
    console.log("ON ENTER", newTask);
  };

  const handleOnComplete = (todo: Todo) => {
    console.log("ON COMPLETE", todo);
  };
  const handleOnDelete = (todo: Todo) => {
    console.log("ON DELETE", todo);
  };
  const handleSetReminder = (todo: Todo) => {
    console.log("ON SET REMINDER", todo);
  };

  return (
    <section className="flex-1">
      <div className="m-4 p-4 max-w-[720px] w-full mx-auto flex flex-col gap-2">
        <h3 className="text-2xl mb-4">Shopping</h3>
        <Input
          variant="task"
          placeholder="Enter new task ..."
          value={newTask}
          onChange={handleTaskInputChange}
          onEnter={handleOnEnter}
        />
        {data.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onComplete={() => handleOnComplete(todo)}
            onDelete={() => handleOnDelete(todo)}
            onSetReminder={() => handleSetReminder(todo)}
          />
        ))}
        <ToggleCompleted
          show={showCompleted}
          onToggle={() => setShowCompleted(!showCompleted)}
        />
        {showCompleted && (
          <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center border border-zinc-300/80">
            <input type="checkbox" />
            <span>Buy milk</span>
          </div>
        )}
      </div>
    </section>
  );
};
export default TodoListView;
