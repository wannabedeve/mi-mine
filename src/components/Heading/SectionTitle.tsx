'use client';
import { useRef } from "react";
import RevealText from "./RevealText";
import './style.css'

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
            className="text-wo mt-[5%] items-center text-[1.5rem] md:text-[2rem]  relative overflow-hidden tracking-tight "
            ref={ref}
        >
            <RevealText word={title} animationType="whileInView" />
        </div>
    );
};

export default SectionTitle;