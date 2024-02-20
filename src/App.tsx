import {
  PlusCircleIcon,
  HomeIcon,
  ShoppingBagIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

import { Surface, TodoItem } from "@components/index";
import { Todo } from "./types";

function App() {
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
    <>
      <main className="flex gap-4 bg-zinc-200 h-full">
        <Surface className="m-4 max-w-80 shadow-lg">
          <div className="flex justify-between items-center hover:bg-zinc-100 py-3 px-2 rounded-lg">
            <div className="flex gap-4 items-center">
              <div>
                <HomeIcon className="w-5 h-5 text-zinc-900" />
              </div>
              <div>Home</div>
            </div>
            <div className="bg-zinc-100 rounded-lg border border-zinc-200 px-1 py-0.5 text-xs text-zinc-500">
              37
            </div>
          </div>
          <div className="flex justify-between items-center hover:bg-zinc-100 py-3 px-2 rounded-lg">
            <div className="flex gap-4 items-center">
              <div>
                <ShoppingBagIcon className="w-5 h-5" />
              </div>
              <div>Shopping</div>
            </div>
            <div className="bg-zinc-100 rounded-lg border border-zinc-200 px-1 py-0.5 min-w-6 text-xs text-zinc-500 text-center">
              1
            </div>
          </div>
          <div className="flex justify-between items-center hover:bg-zinc-100 py-3 px-2 rounded-lg">
            <div className="flex gap-4 items-center">
              <div>
                <PlusCircleIcon className="w-5 h-5 text-zinc-900" />
              </div>
              <div>Create new list</div>
            </div>
            <div className="px-2 py-0.5 text-zinc-500 text-center"></div>
          </div>
        </Surface>
        <section className="flex-1">
          <div className="m-4 p-4 max-w-[720px] w-full mx-auto flex flex-col gap-2">
            <h3 className="text-2xl mb-4">Shopping</h3>
            <input
              className="bg-black/5 p-4 rounded-lg shadow-inner"
              placeholder="Create new task"
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

            <div className="flex gap-4 items-center justify-center my-4">
              <div>
                <EyeSlashIcon className="w-5 h-5 text-zinc-900" />
              </div>
              <div>Hide completed items</div>
            </div>
            <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center border border-zinc-300/80 opacity-50">
              <input type="checkbox" />
              <span className="line-through">Buy milk</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
