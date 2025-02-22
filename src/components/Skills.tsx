import List from "./List";

export default function Skills() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl">Technologies</h3>
          <List>
            <li>JavaScript / TypeScript (React, Express)</li>
            <li>Java (Maven)</li>
            <li>C / C++</li>
            <li>Python</li>
            <li>SQL (PostgreSQL)</li>
          </List>
        </div>
        <div>
          <h3 className="text-2xl">Tools</h3>
          <List>
            <li>Git (GitHub, Bitbucket)</li>
            <li>Linux</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Jenkins</li>
            <li>Selenium</li>
            <li>TestRail</li>
          </List>
        </div>
      </div>
    </div>
  );
}
