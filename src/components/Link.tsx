import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface LinkProps {
    href: string;
    children?: React.ReactNode;
}

export default function Link({ href, children }: Readonly<LinkProps>) {
    return (
        <a href={href} target="_blank" className="text-primary hover:text-white hover:bg-primary duration-100">
            {children}
            <ExternalLinkIcon className="w-6 h-6 ml-1 inline-block" />
        </a>
    );
}