import List from "./List";
import SectionHeader from "./SectionHeader";
import ryanairLabsLogo from "../assets/ryanair-labs.png";

export default function Experience() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Experience</h2>
      <SectionHeader
        topLine="Ryanair Labs (Dec 2024 - Mar 2025)"
        bottomLine="QA Engineer"
        iconSrc={ryanairLabsLogo}
      />
      <p>During my internship here I have:</p>
      <List>
        <li>Developed and maintained automated tests for web applications</li>
        <li>Participated in code reviews</li>
        <li>
          Worked in an Agile environment, a combination of Scrum and Kanban
        </li>
      </List>
    </div>
  );
}
