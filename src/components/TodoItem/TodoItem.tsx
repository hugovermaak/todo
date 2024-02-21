import { useState } from "react";
import { Todo } from "@/types/Todo";
import db from "@/data/db";
import { Surface, IconButton, Checkbox, Input } from "@components/index";
import { CalendarDaysIcon, TrashIcon } from "@heroicons/react/16/solid";

type TodoItemProps = {
  todo: Todo;
  onComplete?: () => void;
  onDelete?: () => void;
  onUpdate?: () => void;
  onSetReminder?: () => void;
};

const TodoItem = ({
  todo,
  onComplete,
  onDelete,
  onSetReminder,
  onUpdate,
}: TodoItemProps) => {
  const [showActions, setShowActions] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

  const toggleEditMode = (todo: Todo) => {
    setEditMode(!editMode);
    if (editMode) {
      setTodoToEdit(todo);
    }
  };

  const handleSetLabel = (value: string) => {
    setTodoToEdit({
      ...todoToEdit!,
      label: value,
    });
  };

  const handleUpdateTodo = () => {
    db.todos.update(todoToEdit!.id!, { label: todoToEdit!.label }).then(() => {
      setEditMode(false);
      onUpdate!();
    });
  };

  const disabled = todo.isCompleted;
  return (
    <Surface
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className={`${
        disabled && "!bg-zinc-50/70"
      } flex gap-4 relative transition-shadow duration-300 hover:shadow-md items-center cursor-pointer`}
    >
      <div
        className="flex gap-4 w-full items-center"
        onClick={() => toggleEditMode(todo)}
      >
        <Checkbox
          id={String(todo.id)}
          onChange={onComplete!}
          checked={todo.isCompleted}
        />
        <div>
          {editMode && todoToEdit ? (
            <Input
              value={todoToEdit.label}
              onChange={handleSetLabel}
              onEnter={handleUpdateTodo}
            />
          ) : (
            <span
              className={`${todo.isCompleted ? "line-through opacity-30" : ""}`}
            >
              {todo.label}
            </span>
          )}
        </div>
      </div>
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
