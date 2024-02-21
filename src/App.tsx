import { PlusCircleIcon } from "@heroicons/react/24/solid";

import { Surface, Icon } from "@/components";
import { CreateList, ListTodos } from "@/features";
import db from "@/data/db";
import { useLiveQuery } from "dexie-react-hooks";
import { TodoList } from "@/types";
import { useEffect, useState } from "react";
import { IndexableType } from "dexie";

const App = () => {
  const [showAddNewList, setShowAddNewList] = useState(false);
  const [activeList, setActiveList] = useState<TodoList>();

  useEffect(() => {
    // Check if there is an active list in local storage
    // if there is, set it as the active list
    // this is nice because the storage is persistent
    // and will load automatically into the last viewed list
    if (localStorage.getItem("activeList")) {
      setActiveList(
        JSON.parse(localStorage.getItem("activeList") ?? "") as TodoList
      );
    }
  }, []);

  // The live query will automatically update the lists
  const lists = useLiveQuery(() =>
    db.todoLists.toArray().then((res) => {
      // If there is an active list in local storage use it
      if (localStorage.getItem("activeList")) {
        setActiveList(
          JSON.parse(localStorage.getItem("activeList") ?? "") as TodoList
        );
        // If there is no active list in local storage set it to the first list
        // in the database
      } else {
        setActiveList(res[0]);
      }
      return res;
    })
  ) as TodoList[];

  const handleOnCreated = async (id: IndexableType) => {
    const newlyCreated = await db.todoLists.where("id").equals(id).toArray();
    setActiveList(newlyCreated[0]);
    setShowAddNewList(false);
  };

  // Set the selectes list as the active list
  const switchList = async (id: IndexableType) => {
    const list = await db.todoLists.where("id").equals(id).toArray();
    localStorage.setItem("activeList", JSON.stringify(list[0]));
    setActiveList(list[0]);
  };

  const handleOnClose = () => {
    setShowAddNewList(false);
  };

  return (
    <main className="flex gap-4 bg-zinc-200 h-full">
      <Surface className="m-4 max-w-80 shadow-lg">
        {!lists && <p>Loading ...</p>}
        {lists && !lists.length && (
          <p>You don't have any lists yet. Create your first.</p>
        )}
        <div className="flex flex-col gap-2 mb-2">
          {lists?.map((list) => (
            <div
              onClick={() => list && list.id && switchList(list.id)}
              key={String(list?.id)}
              className={`${
                activeList?.id === list.id
                  ? "bg-orange-200 hover:bg-orange-300 text-orange-600"
                  : "hover:bg-zinc-200"
              } flex justify-between items-center py-3 px-2 rounded-lg transition-colors duration-300 cursor-pointer`}
            >
              <div className="flex gap-4 items-center">
                <div>
                  <Icon
                    name={list.icon!}
                    className={`${
                      activeList?.id === list.id
                        ? "text-orange-600"
                        : " text-zinc-900"
                    } w-5 h-5`}
                  />
                </div>
                <div>{list?.label}</div>
              </div>
              <div className="bg-zinc-100 rounded-lg border border-zinc-200 px-1 py-0.5 text-xs text-zinc-500">
                {list.todoCount}
              </div>
            </div>
          ))}
        </div>
        <button
          disabled={showAddNewList}
          onClick={() => setShowAddNewList(true)}
          className="flex justify-between w-full items-center hover:bg-orange-100 py-3 px-2 rounded-lg"
        >
          <div className="flex gap-4 items-center">
            <div>
              <PlusCircleIcon className="w-5 h-5 text-zinc-900" />
            </div>
            <div>Create new list</div>
          </div>
          <div className="px-2 py-0.5 text-zinc-500 text-center"></div>
        </button>
        {showAddNewList && (
          <div className="mt-4">
            <CreateList onClose={handleOnClose} onCreated={handleOnCreated} />
          </div>
        )}
      </Surface>
      <section className="flex-1">
        {activeList ? <ListTodos list={activeList} /> : <p>Empty</p>}
      </section>
    </main>
  );
};
export default App;
