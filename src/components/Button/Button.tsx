import { useState, useEffect } from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary";
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({
  size = "md",
  onClick,
  disabled,
  children,
  color = "default",
}: ButtonProps) => {
  const [sizeClasses, setSizeClasses] = useState("");
  const [colorClasses, setColorClasses] = useState("");

  useEffect(() => {
    switch (size) {
      case "sm":
        setSizeClasses("px-2 py-1");
        return;
      case "md":
        setSizeClasses("px-4 py-2");
        return;
      case "lg":
        setSizeClasses("px-6 py-3");
        return;
      default:
        setSizeClasses("px-4 py-2");
        return;
    }
  }, [size]);

  useEffect(() => {
    if (color === "default") {
      setColorClasses("bg-zinc-200");
    } else {
      setColorClasses("bg-orange-600 text-white");
    }
  }, [color]);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md ${sizeClasses} ${colorClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
