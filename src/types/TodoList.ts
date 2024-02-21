import { IndexableType } from "dexie";
import { IconName } from ".";

export type TodoList = {
  id?: IndexableType;
  label: string;
  order?: number;
  icon?: IconName;
  todoCount: number;
  dateCreated?: Date;
  dateUpdated?: Date;
};
