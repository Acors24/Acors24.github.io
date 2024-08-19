import { ChevronDownIcon } from "@radix-ui/react-icons";
import Contact from "./Contact";
import Image from "./Image";    

export default function Home() {
    return (
        <div className="lg:flex">
            <div className="lg:flex-1">
                <h1 className="xl:text-7xl xl:mt-20 text-5xl mt-4">
                    Hi, I'm <span className="text-primary">Oskar</span>,
                </h1>
                <h2 className="xl:text-5xl xl:mt-6 text-3xl mt-4">
                    a <span className="text-primary">computer science</span>{" "}
                    student, and an aspiring software and web developer from{" "}
                    <span className="text-primary">Wrocław, Poland</span>.
                </h2>
                <h3 className="xl:text-3xl xl:mt-10 text-xl mt-4">
                    I am currently looking for an entry-level position,
                    preferably as a front-end or back-end developer, where I can
                    learn and grow as a software developer.
                </h3>
                <div className="mt-4">
                    <Contact />
                </div>
                <div className="xl:text-2xl text-xl mt-4 flex gap-4 items-center">
                    <ChevronDownIcon width={40} height={40} className="animate-bounce" />
                    <span className="text-center">
                        See more about me and my projects below
                    </span>
                    <ChevronDownIcon width={40} height={40} className="animate-bounce" />
                </div>
            </div>
            <div className="flex-1 lg:flex lg:relative fixed lg:top-auto top-1/2 lg:translate-y-0 -translate-y-1/2 lg:opacity-100 opacity-15 -z-50 items-center justify-center">
                <Image src="/sphere.png" alt="Home image" />
            </div>
        </div>
    );
}
