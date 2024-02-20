import { Outlet } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

import { Surface, Icon } from "@/components";
import { CreateList } from "@/features";

const DefaultLayout = () => {
  return (
    <main className="flex gap-4 bg-zinc-200 h-full">
      <Surface className="m-4 max-w-80 shadow-lg">
        <div className="flex justify-between items-center hover:bg-zinc-100 py-3 px-2 rounded-lg">
          <div className="flex gap-4 items-center">
            <div>
              <Icon name="home" className="w-5 h-5 text-zinc-900" />
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
              <Icon name="shoppingBag" className="w-5 h-5" />
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
        <CreateList />
      </Surface>
      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
};
export default DefaultLayout;
