import IconName from "@/types/IconName";
import iconMap from "@/utils/iconMap";

type IconProps = {
  name: IconName | undefined;
  className?: string;
};

const Icon = ({ name = "home", className }: IconProps) => {
  const IconComponent = iconMap[name];

  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;
