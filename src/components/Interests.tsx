import Link from "./Link";
import Text from "./Text";
import TextSection from "./TextSection";

export default function Interests() {
    return (
        <TextSection title="Interests">
            <Text>
                In my spare time, I enjoy creating 3D graphics using{" "}
                <Link href="https://www.blender.org/">Blender</Link>, learning about
                new technologies, as well as playing video games.   
            </Text>
        </TextSection>
    );
}
