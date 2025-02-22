import Link from "./Link";
import List from "./List";
import SectionHeader from "./SectionHeader";
import uwrLogo from "../assets/uwr.png";

export default function Education() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Education</h2>
      <SectionHeader
        topLine="University of Wrocław (Oct 2021 - Feb 2025)"
        bottomLine="Bachelor of Engineering in Computer Science"
        iconSrc={uwrLogo}
      />
      <p>During these years I have helped organize various events, such as:</p>
      <List>
        <li>
          <Link href="https://mistrzostwa.solve.edu.pl/contest/root-map-ed2023-final">
            Polish High School Championship in Team Programming 2023
          </Link>
        </li>
        <li>
          <Link href="https://oi.edu.pl/">
            Stage II of IT Olympics 2024 in Wrocław
          </Link>
        </li>
        <li>
          <Link href="https://oij.edu.pl/">
            Stage II of Junior IT Olympics 2024 in Wrocław
          </Link>
        </li>
        <li>
          <Link href="https://math.naboj.org/pl/pl/">
            Náboj 2024 at University of Economics in Wrocław
          </Link>
        </li>
        <li>
          <Link href="https://mistrzostwa.solve.edu.pl/">
            Polish High School Championship in Team Programming 2024
          </Link>
        </li>
        <li>
          <Link href="https://cerc24.ii.uni.wroc.pl/">CERC 2024</Link>
        </li>
      </List>
      <p>
        I have also contributed to the development of the faculty's system used
        by students and employees -{" "}
        <Link href="https://zapisy.ii.uni.wroc.pl/">zapisy.ii.uni.wroc.pl</Link>{" "}
        (<Link href="https://github.com/iiuni/projektzapisy">GitHub repo</Link>)
      </p>
    </div>
  );
}
