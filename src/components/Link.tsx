import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface LinkProps {
  href: string;
  children?: React.ReactNode;
}

export default function Link({ href, children }: Readonly<LinkProps>) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-primary hover:text-primary-light hover:underline duration-200"
      rel="noreferrer"
    >
      {children}
      <ExternalLinkIcon className="w-4 h-4 ml-1 inline-block" />
    </a>
  );
}
