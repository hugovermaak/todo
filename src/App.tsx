import { TrashIcon, CalendarDaysIcon } from "@heroicons/react/16/solid";
import {
  PlusCircleIcon,
  HomeIcon,
  ShoppingBagIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

function App() {
  return (
    <>
      <main className="flex gap-4 bg-zinc-200 h-full">
        <aside className="bg-zinc-50 p-4 m-4 max-w-80 w-full rounded-lg shadow-xl border border-zinc-300/80">
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
        </aside>
        <section className="flex-1">
          <div className="m-4 p-4 max-w-[720px] w-full mx-auto flex flex-col gap-2">
            <h3 className="text-2xl mb-4">Shopping</h3>
            <input
              className="bg-black/5 p-4 rounded-lg shadow-inner"
              placeholder="Create new task"
            />
            <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center transition-shadow duration-300 hover:shadow-md border border-zinc-300/80">
              <input type="checkbox" />
              <span>Buy milk</span>
              <div className="absolute right-2 flex gap-3 bg-zinc-50 shadow-sm items-center px-3 py-3 rounded-lg border border-zinc-200">
                <span>
                  <CalendarDaysIcon className="w-4 h-4 text-zinc-600" />
                </span>
                <span>
                  <TrashIcon className="h-4 w-4 text-rose-500" />
                </span>
              </div>
            </div>
            <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center transition-shadow duration-300 hover:shadow-md border border-zinc-300/80">
              <input type="checkbox" />
              <span>Buy milk</span>
              <div className="absolute right-2 flex gap-3 bg-zinc-50 shadow-sm items-center px-3 py-3 rounded-lg border border-zinc-200">
                <span>
                  <CalendarDaysIcon className="w-4 h-4 text-zinc-600" />
                </span>
                <span>
                  <TrashIcon className="h-4 w-4 text-rose-500" />
                </span>
              </div>
            </div>
            <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center transition-shadow duration-300 hover:shadow-md border border-zinc-300/80">
              <input type="checkbox" />
              <span>Buy milk</span>
              <div className="absolute right-2 flex gap-3 bg-zinc-50 shadow-sm items-center px-3 py-3 rounded-lg border border-zinc-200">
                <span>
                  <CalendarDaysIcon className="w-4 h-4 text-zinc-600" />
                </span>
                <span>
                  <TrashIcon className="h-4 w-4 text-rose-500" />
                </span>
              </div>
            </div>
            <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center transition-shadow duration-300 hover:shadow-md border border-zinc-300/80">
              <input type="checkbox" />
              <span>Buy milk</span>
              <div className="absolute right-2 flex gap-3 bg-zinc-50 shadow-sm items-center px-3 py-3 rounded-lg border border-zinc-200">
                <span>
                  <CalendarDaysIcon className="w-4 h-4 text-zinc-600" />
                </span>
                <span>
                  <TrashIcon className="h-4 w-4 text-rose-500" />
                </span>
              </div>
            </div>
            <div>
              <div></div>
              <div>Hide completed items</div>
            </div>
            <div className="flex bg-zinc-50 p-4 rounded-lg gap-4 relative items-center border border-zinc-300/80 opacity-50">
              <input type="checkbox" />
              <span className="line-through">Buy milk</span>
              <div className="absolute right-2 flex gap-3 bg-zinc-50 shadow-sm items-center px-3 py-3 rounded-lg border border-zinc-200">
                <span>
                  <TrashIcon className="h-4 w-4 text-rose-500" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
