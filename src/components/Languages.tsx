import List from "./List";

export default function Languages() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Languages</h2>
      <List>
        <li>Polish - native</li>
        <li>English - fluent (C1)</li>
      </List>
    </div>
  );
}
