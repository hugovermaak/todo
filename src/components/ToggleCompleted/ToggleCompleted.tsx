import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

type ToggleProps = {
  show: boolean;
  onToggle: () => void;
};

const ToggleCompleted = ({ show, onToggle }: ToggleProps) => {
  return (
    <div
      onClick={() => onToggle()}
      className="flex gap-4 items-center justify-center my-4"
    >
      <div>
        {show ? (
          <EyeSlashIcon className="w-5 h-5 text-zinc-900" />
        ) : (
          <EyeIcon className="w-5 h-5 text-zinc-900" />
        )}
      </div>
      <div>
        {show ? (
          <span className="text-zinc-900">Hide completed</span>
        ) : (
          <span className="text-zinc-900">Show completed</span>
        )}
      </div>
    </div>
  );
};

export default ToggleCompleted;
