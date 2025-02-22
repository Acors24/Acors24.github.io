import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Languages from "./Languages";
import Skills from "./Skills";

export default function AboutMe(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={`${props.className ?? ""} space-y-8`}>
      <h1 className="text-5xl">About Me</h1>
      <Education />
      <Experience />
      <Skills />
      <Languages />
      <Interests />
    </div>
  );
}
