interface TextSectionProps {
    title: string;
    subtitle?: string;
    subsubtitle?: string;
    children: React.ReactNode;
}

export default function TextSection({ title, subtitle, subsubtitle, children }: Readonly<TextSectionProps>) {
    return (
        <div className="mr-10 mb-10">
            <h2 className="text-4xl">{title}</h2>
            {subtitle && <h3 className="text-2xl">{subtitle}</h3>}
            {subsubtitle && <h4 className="text-slate-500">{subsubtitle}</h4>}
            <div className="mt-4">
                {children}
            </div>
        </div>
    );
}