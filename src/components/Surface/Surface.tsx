type SurfaceProps = {
  children?: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Surface = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: SurfaceProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`bg-zinc-50 p-4 w-full rounded-lg border-zinc-300/80 ${className}`}
    >
      {children}
    </div>
  );
};

export default Surface;
