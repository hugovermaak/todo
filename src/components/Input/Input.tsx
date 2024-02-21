import {
  useEffect,
  useState,
  KeyboardEvent,
  ChangeEvent,
  MouseEvent,
} from "react";

type InputProps = {
  className?: string;
  placeholder?: string;
  variant?: "regular" | "task";
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
};

const Input = ({
  className,
  placeholder,
  variant = "regular",
  type = "text",
  value,
  onChange,
  onEnter,
}: InputProps) => {
  const [styleClasses, setStyleClasses] = useState("");

  useEffect(() => {
    variant === "regular"
      ? setStyleClasses("p-2 bg-zinc-100 border border-zinc-200 rounded-md")
      : setStyleClasses("bg-black/5 p-4 rounded-lg shadow-inner");
  }, [variant]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <input
      className={`${styleClasses} ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    />
  );
};

export default Input;
