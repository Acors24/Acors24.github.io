interface NavProps {
  sections: { id: string; title: string }[];
}

export default function Nav({ sections }: Readonly<NavProps>) {
  return (
    <nav className="sticky w-full top-0 border-b border-b-primary bg-white/80 backdrop-blur z-10">
      {sections.map((section) => (
        <button
          key={section.id}
          className="h-full text-primary relative before:w-full before:h-0 before:bg-primary before:absolute before:top-0 before:left-0 before:-z-10 px-6 py-4 hover:text-white hover:before:h-full duration-100 before:duration-100"
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
