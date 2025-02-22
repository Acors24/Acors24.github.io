import { IconType } from "react-icons";
import Tooltip from "./Tooltip";

interface IconProps {
  Icon: IconType;
  tooltip?: string;
}

export default function Icon({ Icon, tooltip }: Readonly<IconProps>) {
  const icon = (
    <Icon className="md:w-20 md:h-20 w-12 h-12 hover:drop-shadow-lg duration-100" />
  );

  return <>{tooltip ? <Tooltip content={tooltip}>{icon}</Tooltip> : icon}</>;
}
