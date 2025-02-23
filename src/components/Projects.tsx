import {
  SiCplusplus,
  SiDocker,
  SiFlask,
  SiJunit5,
  SiMui,
  SiOpengl,
  SiPython,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiYoutube,
} from "react-icons/si";
import ButtonLink from "./ButtonLink";
import Link from "./Link";
import { FaJava } from "react-icons/fa";
import IconRow from "./IconRow";
import Icon from "./Icon";
import Gallery from "./Gallery";
import GeometryDemo from "./GeometryDemo";
import Image from "./Image";
import React from "react";
import SectionHeader from "./SectionHeader";

const techToIcon = {
  "C++": SiCplusplus,
  OpenGL: SiOpengl,
  Java: FaJava,
  "JUnit 5": SiJunit5,
  TypeScript: SiTypescript,
  React: SiReact,
  "Material-UI": SiMui,
  "Tailwind CSS": SiTailwindcss,
  "Radix UI": SiRadixui,
  "YouTube IFrame API": SiYoutube,
  Python: SiPython,
  Flask: SiFlask,
  Docker: SiDocker,
};

type Tech = keyof typeof techToIcon;

interface ProjectProps {
  title: string;
  subtitle?: string;
  description: string;
  technologies: Tech[];
  sourceCodeUrl?: string;
  liveDemoUrl?: string;
  children?: React.ReactNode;
}

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
    <div className="my-24 flex lg:flex-row lg:even:flex-row-reverse flex-col gap-8 items-center">
      <div className="flex-1 space-y-8">
        <SectionHeader topLine={title} bottomLine={subtitle} />
        <p>{description}</p>
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
          {sourceCodeUrl && (
            <ButtonLink href={sourceCodeUrl}>Source code</ButtonLink>
          )}
          {liveDemoUrl && <ButtonLink href={liveDemoUrl}>Live demo</ButtonLink>}
        </div>
      </div>
      <div className="lg:flex-1 flex w-full justify-center">{children}</div>
    </div>
  );
}

export default function Projects(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <h1 className="text-5xl">Projects</h1>
      <p className="text-xl mt-4 mb-10">
        Here are some of the projects I have worked on. You can find more of my
        work on <Link href="https://github.com/Acors24">my GitHub profile</Link>
        .
      </p>
      <Project
        title="SQL Murder Mystery"
        subtitle="Thesis; a team project"
        description="A full-stack web-based educational game about SQL; made mainly with Python, Flask, TypeScript and React."
        technologies={[
          "Python",
          "Flask",
          "Docker",
          "TypeScript",
          "React",
          "Tailwind CSS",
        ]}
        liveDemoUrl="https://sql-murder-mystery.duckdns.org/"
      >
        <Gallery
          images={[
            {
              src: "/sqlmm_index.png",
              caption: "Main page - Table of Contents",
            },
            {
              src: "/sqlmm_lesson.png",
              caption: "One of the lessons",
            },
            {
              src: "/sqlmm_task.png",
              caption: "One of the tasks",
            },
          ]}
        />
      </Project>
      <Project
        title="HOYO-MiXLE"
        description="A web-based game written in TypeScript using React, inspired by Wordle and its clones. The player has to guess a daily song from a specific video game based on 3 short samples."
        technologies={[
          "TypeScript",
          "React",
          "YouTube IFrame API",
          "Tailwind CSS",
        ]}
        liveDemoUrl="https://acors24.github.io/hoyo-mixle/"
      >
        <Gallery
          images={[
            {
              src: "/hoyo-mixle1.png",
              caption: "The game being played",
            },
            {
              src: "/hoyo-mixle2.png",
              caption: "The game won",
            },
          ]}
        />
      </Project>
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
              caption: "2D height map of Poland",
            },
            {
              src: "/viewer2.png",
              caption: "3D height map of Polish mountains",
            },
            {
              src: "/viewer3.png",
              caption: "3D height map of Greenland",
            },
            {
              src: "/viewer4.png",
              caption: "3D height map of Earth at a certain latitude",
            },
          ]}
        />
      </Project>
      <Project
        title="Geometric task solver"
        subtitle="A team project"
        description="An enterprise-grade, interactive command-line app written in Java that solves various 2D geometric tasks, such as calculating missing parameters of shapes, finding their areas, circumscribed circles, etc."
        technologies={["Java", "JUnit 5"]}
        sourceCodeUrl="https://github.com/Acors24/one-of-the-repos-ever"
      >
        <GeometryDemo />
      </Project>
      <Project
        title="Advent of Code leaderboard visualizer"
        description="A web app written in TypeScript using React that allows users to visualize the progress of their friends in the Advent of Code competition, after providing the leaderboard file. It displays a chart showing how each user's score changed over time."
        technologies={["TypeScript", "React", "Material-UI", "Tailwind CSS"]}
        sourceCodeUrl="https://github.com/Acors24/aoc-react-chart"
        liveDemoUrl="https://acors24.github.io/aoc-react-chart/"
      >
        <Image src="/chart1.png" />
      </Project>
      <Project
        title="Portfolio website"
        description="A personal website written in TypeScript using React, Tailwind CSS and some Radix UI primitives. It showcases some of my skills, projects, and experience."
        technologies={["TypeScript", "React", "Radix UI", "Tailwind CSS"]}
        sourceCodeUrl="https://github.com/Acors24/Acors24.github.io"
      >
        <Image src="/portfolio.png" />
      </Project>
    </div>
  );
}
