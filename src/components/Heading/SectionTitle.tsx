'use client';
import { useRef } from "react";
import RevealText from "./RevealText";
import './style.scss'

const SectionTitle = ({
    title,
}: {
    title: string;
    progressBgClass?: string;
}) => {
    const ref = useRef(null);

    // motion
    return (
        <div
            className="text-wo twelve mt-[5%] items-center text-[1.5rem] md:text-[2rem]  relative overflow-hidden tracking-tight"
            ref={ref}
        >
            <h1>
                <RevealText word={title} animationType="whileInView" />
            </h1>
        </div>
    );
};

export default SectionTitle;