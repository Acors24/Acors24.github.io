interface ListItemProps {
    children?: React.ReactNode;
}

export default function ListItem({ children }: Readonly<ListItemProps>) {
    return (
        <li className="p-1">{children}</li>
    );
}