import { useState } from "react";
import { Todo } from "@/types/Todo";
import { Surface } from "@components/index";
import { CalendarDaysIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconButton from "../IconButton/IconButton";

type TodoItemProps = {
  todo: Todo;
  onComplete: () => void;
  onDelete: () => void;
  onSetReminder: () => void;
};

const TodoItem = ({
  todo,
  onComplete,
  onDelete,
  onSetReminder,
}: TodoItemProps) => {
  const [showActions, setShowActions] = useState(false);
  const disabled = todo.isCompleted;
  return (
    <Surface
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className={`${
        disabled && "!bg-zinc-50/70"
      } flex gap-4 relative transition-shadow duration-300 hover:shadow-md items-center cursor-pointer`}
    >
      <label htmlFor={todo.id} className="flex gap-4">
        <input id={todo.id} type="checkbox" onChange={onComplete} />
        <span
          className={`${todo.isCompleted ? "line-through opacity-30" : ""}`}
        >
          {todo.label}
        </span>
      </label>
      {showActions ? (
        <div className="absolute right-2 flex gap-1 bg-zinc-50 shadow-sm items-center p-1 rounded-lg border border-zinc-200">
          <IconButton onClick={onSetReminder} disabled={todo.isCompleted}>
            <CalendarDaysIcon className="w-4 h-4 text-zinc-600" />
          </IconButton>
          <IconButton onClick={onDelete}>
            <TrashIcon className="h-4 w-4 text-rose-500" />
          </IconButton>
        </div>
      ) : null}
    </Surface>
  );
};

export default TodoItem;
