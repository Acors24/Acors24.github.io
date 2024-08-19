import List from "./List";
import ListItem from "./ListItem";
import Text from "./Text";
import TextSection from "./TextSection";

export default function Skills() {
    return (
        <TextSection title="Skills">
            <Text>
                I excel at:
            </Text>
            <List>
                <ListItem>C++</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>JavaScript / TypeScript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>PostgreSQL</ListItem>
            </List>
            <Text>
                I also have experience with:
            </Text>
            <List>
                <ListItem>C</ListItem>
                <ListItem>C#</ListItem>
                <ListItem>Rust</ListItem>
            </List>
            <Text>
                My soft skills include:
            </Text>
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
