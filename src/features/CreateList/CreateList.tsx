import { useState } from "react";
import { Icon, Input, IconSelector, Button } from "@/components";
import IconName from "@/types/IconName";
import availableIcons from "@/utils/availableIcons";

const CreateList = () => {
  const [newListName, setNewListName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconName>(
    availableIcons[Math.floor(Math.random() * availableIcons.length)]
  );

  const handleSetName = (value: string) => {
    setNewListName(value);
  };
  const handleSetIcon = (value: IconName) => {
    setSelectedIcon(value);
  };

  const handleCreate = () => {
    console.log(newListName, selectedIcon);
  };

  const handleCancel = () => {
    console.log("cancel");
  };

  return (
    <section className="flex flex-col gap-2 border border-zinc-200 p-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon name={selectedIcon} className="w-5 h-5" />
        <Input
          onChange={handleSetName}
          value={newListName}
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
