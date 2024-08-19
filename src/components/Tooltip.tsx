import * as Tooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
    children?: React.ReactNode;
    content: string;
}

export default ({ children, content }: Readonly<TooltipProps>) => {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div className="flex">
                        {children}
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="rounded bg-white px-4 py-2 text-md drop-shadow-md">
                        {content}
                        <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};
