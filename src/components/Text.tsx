interface TextProps {
    children: React.ReactNode;
};

export default function Text({ children }: Readonly<TextProps>) {
    return (
        <div className="my-2">
            {children}
        </div>
    );
}