interface SectionProps {
    id: string;
    children?: React.ReactNode;
}

export default function Section({ id, children }: Readonly<SectionProps>) {
    return (
        <div id={id} className="flex justify-center xl:px-20 px-4 pt-20">
            {children}
        </div>
    );
}