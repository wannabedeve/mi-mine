import { cn } from "../Work/utils";
import { motion, Variants } from "framer-motion";

type TRevealText = {
    word: string;
    className?: string;
    animDelay?: number;
    animationType?: "whileInView" | "whileHover" | "animate";
};

export default function RevealText({
    word,
    className,
    animDelay = 0,
    // whileInView = false,
    animationType = "animate",
}: TRevealText) {
    const letters = word.split("");

    // const revealAnim: Variants = {
    //     hidden: { opacity: 0, y: "80%" },
    //     show: (delay: number) => ({
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             type: "linear",
    //             stiffness: 150,
    //             delay: delay,
    //             // duration: 0.5,
    //         },
    //     }),
    // };


    const revealAnim: Variants = {
        hidden: { opacity: 0, y: "80%" },
        show: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                ease: "linear",
                duration: 0.3,
                delay,
            },
        }),
    };


    switch (animationType) {
        case "whileInView":
            return (
                <>
                    {letters.map((letter, index) => (
                        <motion.span
                            variants={revealAnim}
                            initial={"hidden"}
                            whileInView={"show"}
                            custom={(index + animDelay) / 8}
                            key={index}
                            className={cn("inline-block ", className)}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </>
            );
        case "whileHover":
            return (
                <>
                    {letters.map((letter, index) => (
                        <motion.span
                            variants={revealAnim}
                            initial={"hidden"}
                            whileHover={"show"}
                            custom={(index + animDelay) / 8}
                            key={index}
                            className={cn("inline-block ", className)}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </>
            );
        default:
            return (
                <>
                    {letters.map((letter, index) => (
                        <motion.span
                            variants={revealAnim}
                            initial={"hidden"}
                            animate={"show"}
                            custom={(index + animDelay) / 8}
                            key={index}
                            className={cn("inline-block ", className)}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </>
            );
    }
}