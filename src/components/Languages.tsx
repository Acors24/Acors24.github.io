import List from "./List";
import ListItem from "./ListItem";
import TextSection from "./TextSection";

export default function Languages() {
    return (
        <TextSection title="Languages">
            <List>
                <ListItem>Polish - native</ListItem>
                <ListItem>English - C1</ListItem>
            </List>
        </TextSection>
    );
}