import {
    SiCplusplus,
    SiJunit5,
    SiMui,
    SiOpengl,
    SiRadixui,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import ButtonLink from "./ButtonLink";
import Link from "./Link";
import { FaJava } from "react-icons/fa";
import IconRow from "./IconRow";
import Icon from "./Icon";
import Gallery from "./Gallery";
import GeometryDemo from "./GeometryDemo";
import Image from "./Image";
import { IconType } from "react-icons";
import Text from "./Text";
import TextSection from "./TextSection";

interface ProjectProps {
    title: string;
    subtitle?: string;
    description: string;
    technologies: string[];
    sourceCodeUrl: string;
    liveDemoUrl?: string;
    children?: React.ReactNode;
}

const techToIcon: {
    [key: string]: IconType;
} = {
    "C++": SiCplusplus,
    OpenGL: SiOpengl,
    Java: FaJava,
    "JUnit 5": SiJunit5,
    TypeScript: SiTypescript,
    React: SiReact,
    "Material-UI": SiMui,
    "Tailwind CSS": SiTailwindcss,
    "Radix UI": SiRadixui,
};

function Project({
    title,
    subtitle,
    description,
    technologies,
    sourceCodeUrl,
    liveDemoUrl,
    children,
}: Readonly<ProjectProps>) {
    return (
        <div className="my-20 flex xl:flex-row flex-col gap-4 items-center">
            <div className="flex-1">
                <TextSection title={title} subtitle={subtitle}>
                    <Text>{description}</Text>
                    <IconRow>
                        {technologies.map((technology) => (
                            <Icon
                                key={technology}
                                Icon={techToIcon[technology]}
                                tooltip={technology}
                            />
                        ))}
                    </IconRow>
                    <div className="flex gap-4 mt-10">
                        <ButtonLink href={sourceCodeUrl}>Source code</ButtonLink>
                        {liveDemoUrl && (
                            <ButtonLink href={liveDemoUrl}>Live demo</ButtonLink>
                        )}
                    </div>
                </TextSection>
            </div>
            <div className="xl:flex-1 flex w-full justify-center">{children}</div>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            <h1 className="text-5xl">Projects</h1>
            <p className="text-2xl">
                Here are some of the projects I have worked on in the past. You
                can find more of my work on{" "}
                <Link href="https://github.com/Acors24">my GitHub profile</Link>
                .
            </p>
            <Project
                title="Height map viewer"
                description="A simple height map viewer written in C++ using OpenGL. It allows the user to load height maps from multiple files in a specific format and display them as a 3D model or as a 2D texture."
                technologies={["C++", "OpenGL"]}
                sourceCodeUrl="https://github.com/Acors24/cpp-hgt-viewer"
            >
                <Gallery
                    images={[
                        {
                            src: "/viewer1.png",
                            alt: "2D height map of Poland",
                        },
                        {
                            src: "/viewer2.png",
                            alt: "3D height map of Polish mountains",
                        },
                        {
                            src: "/viewer3.png",
                            alt: "3D height map of Greenland",
                        },
                        {
                            src: "/viewer4.png",
                            alt: "3D height map of Earth at a certain latitude",
                        },
                    ]}
                />
            </Project>
            <Project
                title="Geometric task solver"
                subtitle="A team project"
                description="An enterprise-grade,    interactive command-line app written in Java that solves various 2D geometric tasks, such as calculating missing parameters of shapes, finding their areas, circumscribed circles, etc."
                technologies={["Java", "JUnit 5"]}
                sourceCodeUrl="https://github.com/Acors24/one-of-the-repos-ever"
            >
                <GeometryDemo />
            </Project>
            <Project
                title="Advent of Code leaderboard visualizer"
                description="A web app written in TypeScript using React that allows users to visualize the progress of their friends in the Advent of Code competition, after providing the leaderboard file. It displays a chart showing how each user's score changed over time."
                technologies={[
                    "TypeScript",
                    "React",
                    "Material-UI",
                    "Tailwind CSS",
                ]}
                sourceCodeUrl="https://github.com/Acors24/aoc-react-chart"
                liveDemoUrl="https://acors24.github.io/aoc-react-chart/"
            >
                <Image src="/chart1.png" alt="Sample chart" />
            </Project>
            <Project
                title="Portfolio website"
                description="A personal website written in TypeScript using React, Tailwind CSS and some Radix UI primitives. It showcases some of my skills, projects, and experience."
                technologies={["TypeScript", "React", "Radix UI", "Tailwind CSS"]}
                sourceCodeUrl="https://github.com/Acors24/Acors24.github.io"
            >
                <Image src="/portfolio.png" alt="Portfolio" />
            </Project>
        </div>
    );
}
