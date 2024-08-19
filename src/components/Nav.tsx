interface NavProps {
    sections: { id: string; title: string }[];
}

export default function Nav({ sections }: Readonly<NavProps>) {
    return (
        <nav className="flex xl:justify-end fixed top-0 w-full h-12 border-b-2 border-b-primary bg-white bg-opacity-80 backdrop-blur z-10">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className="xl:flex-grow-0 flex-grow text-primary relative before:w-full before:h-0 before:bg-primary before:absolute before:top-0 before:left-0 before:-z-10 xl:px-20 px-6 hover:text-white hover:before:h-full duration-100 before:duration-100"
                    onClick={() => {
                        document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    {section.title}
                </button>
            ))}
        </nav>
    );
}
