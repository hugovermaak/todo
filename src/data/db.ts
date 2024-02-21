import Dexie, { Table } from "dexie";
import { Todo, TodoList } from "@/types";

class DexieSubClass extends Dexie {
  todoLists!: Table<TodoList>;
  todos!: Table<Todo>;

  constructor() {
    super("todos");
    this.version(2).stores({
      todoLists:
        "++id, label, order, icon, todoCount, dateCreated, dateUpdated",
      todos:
        "++id, listId, label, order, dateCreated, dateUpdated, reminderDate, isCompleted",
    });

    // Check to see if db already exists, if it does not
    // then create the default todo list
    this.on("ready", () => {
      this.todoLists.count((count: number) => {
        if (count < 1) {
          try {
            this.todoLists.add({
              label: "Personal",
              order: 0,
              icon: "home",
              todoCount: 0,
              dateCreated: new Date(),
              dateUpdated: new Date(),
            });
          } catch (e) {
            console.log("Some error occurred: ", e);
          }
        }
      });
    });
  }
}

// Create an instance of DexieSubClass
const db = new DexieSubClass();

export default db;
