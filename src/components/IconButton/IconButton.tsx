type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};
const IconButton = ({ children, disabled = false, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="hover:bg-zinc-200 rounded-md p-2 transition-colors duration-300 ease-linear disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  );
};

export default IconButton;
