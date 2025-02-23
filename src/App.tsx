import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

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
    <div className="text-slate-700 selection:bg-slate-700 selection:text-white max-w-[1200px] bg-white z-0 mx-auto shadow-xl relative">
      <Nav sections={sections.map(({ id, title }) => ({ id, title }))} />
      <div className="md:px-12 px-4">
        {sections.map(({ id, Component }) => (
          <Component
            key={id}
            id={id}
            className="md:px-8 py-16 border-t-2 first:border-none scroll-mt-16"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
