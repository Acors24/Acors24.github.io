import Link from "./Link";
import List from "./List";
import ListItem from "./ListItem";
import Text from "./Text";
import TextSection from "./TextSection";

export default function Education() {
    return (
        <TextSection title="Education" subtitle="University of Wrocław (2021 - expected 2025)" subsubtitle="Bachelor of Science in Computer Science">
            <Text>
                During these years I have vastly expanded my knowledge of
                computer science, and helped organize various events, such as:
            </Text>
            <List>
                <ListItem>
                    <Link href="https://mistrzostwa.solve.edu.pl/contest/root-map-ed2023-final">
                        Polish High School Championship in Team Programming
                        2023
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://oi.edu.pl/">
                        Stage II of IT Olympics 2024 in Wrocław
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://oij.edu.pl/">
                        Stage II of Junior IT Olympics 2024 in Wrocław
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://math.naboj.org/pl/pl/">
                        Náboj 2024 at University of Economics in Wrocław
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://mistrzostwa.solve.edu.pl/">
                        Polish High School Championship in Team Programming
                        2024
                    </Link>
                </ListItem>
            </List>
        </TextSection>
    );
}
