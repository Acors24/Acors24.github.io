interface ListProps {
    children?: React.ReactNode;
}

export default function List({ children }: Readonly<ListProps>) {
    return (
        <ul className="list-disc list-outside pl-6">
            {children}
        </ul>
    );
}