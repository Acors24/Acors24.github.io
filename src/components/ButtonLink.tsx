interface ButtonLinkProps {
    href: string;
    children?: React.ReactNode;
}

export default function ButtonLink({ href, children }: Readonly<ButtonLinkProps>) {
    return (
        <a href={href} target="_blank" className="text-primary border-2 border-primary px-4 py-2 rounded-md relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:duration-100 before:bg-primary before:-z-10 hover:text-white hover:before:h-full duration-100 text-center">
            {children}
        </a>
    );
}