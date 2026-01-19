import Link from "next/link";
import { Card } from "../ui/card";
import { Icons } from "../icon";
import './style.css';

export default function Buttons() {
    return (
        // <Link id="about-card" aria-label="About" title="About" href="/about">
        <Card className="card-text relative flex justify-center items-center flex-row text-primary dark:text-secondary text-3xl tracking-wide">
            <Link href="experience" className="b-link font-custom" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Experience
            </Link>
            <Link href="skills" className="b-link font-custom" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Skills
            </Link>
            <Link href="projects" className="b-link font-custom" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Projects
            </Link>
        </Card>
        // </Link>
    );
}
