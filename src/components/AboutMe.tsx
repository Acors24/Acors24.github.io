import Education from "./Education";
import Interests from "./Interests";
import Languages from "./Languages";
import Skills from "./Skills";

export default function AboutMe() {
    return (
        <div className="flex-1 lg:flex lg:gap-20">
            <div className="lg:flex flex-1 flex-col">
                <Education />
                <Languages />
                <Interests />
            </div>
            <div className="lg:flex flex-col">
                <Skills />
            </div>
        </div>
    );
}