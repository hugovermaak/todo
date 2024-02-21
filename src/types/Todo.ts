import { IndexableType } from "dexie";

export type Todo = {
  id?: IndexableType;
  listId: IndexableType | undefined;
  label: string;
  order: number;
  dateCreated?: Date;
  dateUpdated?: Date;
  reminderDate?: Date;
  isCompleted: boolean;
};
