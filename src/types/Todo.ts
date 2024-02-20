export type Todo = {
  id?: string;
  listId: string;
  label: string;
  order: number;
  dateCreated?: Date;
  dateUpdated?: Date;
  reminderDate?: Date;
  isCompleted: boolean;
};
