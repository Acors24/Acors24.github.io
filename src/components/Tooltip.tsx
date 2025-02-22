import * as RadixTooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
  children?: React.ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: Readonly<TooltipProps>) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div className="flex">{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="rounded bg-white px-4 py-2 text-md drop-shadow-md">
            {content}
            <RadixTooltip.Arrow className="fill-white" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
