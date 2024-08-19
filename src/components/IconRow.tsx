interface IconRowProps {
    children?: React.ReactNode;
}

export default function IconRow({ children }: Readonly<IconRowProps>) {
    return (
        <div className="flex flex-wrap gap-8 my-8">
            {children}
        </div>
    );
}