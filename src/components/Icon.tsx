import { IconType } from "react-icons";
import Tooltip from "./Tooltip";

interface IconProps {
    Icon: IconType;
    tooltip?: string;
}

export default ({ Icon, tooltip }: Readonly<IconProps>) => {
    const icon = <Icon className="w-20 h-20 hover:drop-shadow-lg duration-100" />;

    return (
        <>
            {tooltip ? (
                <Tooltip content={tooltip}>
                    {icon}
                </Tooltip>
            ) : icon}
        </>
    );
}
