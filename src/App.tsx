import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Section from "./components/Section";

const sections = [
    {
        id: "home",
        title: "Home",
        Component: Home,
    },
    {
        id: "about-me",
        title: "About Me",
        Component: AboutMe,
    },
    {
        id: "projects",
        title: "Projects",
        Component: Projects,
    },
];

function App() {
    return (
        <div className="text-slate-700 text-xl flex flex-col items-center">
            <Nav sections={sections.map(({ id, title }) => ({ id, title }))} />
            <div className="max-w-[1600px]">
                {sections.map(({ id, Component }) => (
                    <Section key={id} id={id}>
                        <Component />
                    </Section>
                ))}
            </div>
        </div>
    );
}

export default App;
