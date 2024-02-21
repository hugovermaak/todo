import { useState } from "react";
import { Icon, Input, IconSelector, Button } from "@/components";
import IconName from "@/types/IconName";
import { TodoList } from "@/types";
import availableIcons from "@/utils/availableIcons";
import db from "@/data/db";
import { IndexableType } from "dexie";

type CreateListProps = {
  onClose: () => void;
  onCreated: (id: IndexableType) => void;
};

const CreateList = ({ onClose, onCreated }: CreateListProps) => {
  const [newList, setNewList] = useState({
    label: "",
    todoCount: 0,
    dateCreated: new Date(),
    dateUpdated: new Date(),
    icon: availableIcons[Math.floor(Math.random() * availableIcons.length)],
    order: 0,
  } as TodoList);

  // Update the label of the new list
  const handleSetName = (value: string) => {
    setNewList({
      ...newList,
      label: value,
    });
  };

  // Update the icon of the new list
  const handleSetIcon = (value: IconName) => {
    setNewList({
      ...newList,
      icon: value,
    });
  };

  // Create a new list
  const handleCreate = async () => {
    try {
      const id = await db.todoLists.add({
        ...newList,
      });
      onCreated(id);
    } catch (e) {
      console.log("Some error occurred: ", e);
    }
  };

  // Cancel the creation of a new list
  const handleCancel = () => {
    onClose();
  };

  return (
    <section className="flex flex-col gap-2 border border-zinc-200 p-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon name={newList.icon} className="w-5 h-5" />
        <Input
          onChange={handleSetName}
          value={newList.label}
          className="flex-1"
        />
      </div>
      <IconSelector onSelect={handleSetIcon} />
      <div className="flex gap-2">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
      </div>
    </section>
  );
};
export default CreateList;
