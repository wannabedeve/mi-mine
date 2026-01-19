import Link from "next/link";
import { Card } from "../ui/card";
import { Icons } from "../icon";
import './style.css';

export default function CVButtons() {
    return (
        // <Link id="about-card" aria-label="About" title="About" href="/about">
        <Card className="card-text relative flex justify-center items-center h-[10%] flex-col text-primary dark:text-secondary text-3xl tracking-wide">
            <div className="reflectt md:text-[1.2rem] text-[1rem]">Download Resume (PDF)</div>
            {/* <br /> */}
            {/* <div className="text-white texthh text-[1rem]">AS Full Stack Web Developer</div> */}
            {/* <br /> */}
            <Link href="/khaled-alkharashi-fullstack-resume.pdf"
                className="b-link font-custom"
                target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Web Developer CV
            </Link>
            {/* <Link href="skills" className="b-link font-custom">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Skills
            </Link> */}
            {/* <br />
            <div className="text-white texthh text-[1rem]">OR</div>

            <br />
            <div className="text-white texthh text-[1rem]">AS IT System Administrator</div>
            <br /> */}
            <Link href="/khaled-alkharashi-systemadmin-resume.pdf" className="b-link font-custom" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                IT System Admin CV
            </Link>
        </Card>
        // </Link>
    );
}
