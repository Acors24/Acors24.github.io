import Link from "./Link";
import List from "./List";
import ListItem from "./ListItem";
import Text from "./Text";
import TextSection from "./TextSection";

export default function Skills() {
  return (
    <TextSection title="Skills">
      <Text>I excel at:</Text>
      <List>
        <ListItem>C / C++</ListItem>
        <ListItem>Java & C#</ListItem>
        <ListItem>JavaScript / TypeScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Python</ListItem>
        <ListItem>PostgreSQL</ListItem>
      </List>
      <Text>I also have experience with:</Text>
      <List>
        <ListItem>Rust</ListItem>
        <ListItem>
          <Link href="https://www.figma.com/">Figma</Link>
        </ListItem>
      </List>
      <Text>My soft skills include:</Text>
      <List>
        <ListItem>Teamwork</ListItem>
        <ListItem>Effective communication</ListItem>
        <ListItem>Work ethic</ListItem>
        <ListItem>Adaptability</ListItem>
        <ListItem>Problem-solving</ListItem>
      </List>
    </TextSection>
  );
}
