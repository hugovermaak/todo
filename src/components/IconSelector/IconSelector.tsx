import { Icon } from "@components/index";
import IconName from "@/types/IconName";
import availableIcons from "@/utils/availableIcons";
import { useState } from "react";

type IconSelectorProps = {
  onSelect: (icon: IconName) => void;
};

const IconSelector = ({ onSelect }: IconSelectorProps) => {
  const [selected, setSelected] = useState<IconName | undefined>();

  return (
    <>
      <span className="text-xs uppercase">Select an icon for your list</span>
      <div className="grid grid-cols-7 gap-1 border border-zinc-200 place-items-center rounded-md p-2">
        {availableIcons.map((icon) => (
          <div
            onClick={() => {
              onSelect(icon);
              setSelected(icon);
            }}
            className={`hover:bg-zinc-200 rounded-full p-2 ${
              icon === selected && "bg-rose-500"
            }`}
            key={icon}
          >
            <Icon key={icon} name={icon} className="w-5 h-5" />
          </div>
        ))}
      </div>
    </>
  );
};
export default IconSelector;
