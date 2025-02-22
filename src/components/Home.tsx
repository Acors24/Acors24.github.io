import { ChevronDownIcon } from "@radix-ui/react-icons";
import Contact from "./Contact";
import Image from "./Image";

export default function Home(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`${props.className ?? ""} md:grid grid-cols-2 items-center`}
    >
      <div>
        <h1 className="text-6xl mt-20">
          Hi, I'm <span className="text-primary">Oskar</span>,
        </h1>
        <h2 className="text-3xl mt-6">
          a <span className="text-primary">computer science</span> graduate, and
          an aspiring software and web developer from{" "}
          <span className="text-primary">Poland</span>.
        </h2>
        <Contact className="my-6" />
        <div className="text-xl mt-4 flex gap-4 items-center">
          <ChevronDownIcon width={20} height={20} className="animate-bounce" />
          <span className="text-center">See more about me below</span>
          <ChevronDownIcon width={20} height={20} className="animate-bounce" />
        </div>
      </div>
      <Image
        src="/sphere.png"
        className="md:static md:opacity-100 md:translate-x-0 md:translate-y-0 opacity-20 fixed -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
