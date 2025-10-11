// components/AstroDivider.tsx
"use client";
import React from "react";
import clsx from "clsx";

type DividerVariant = "default" | "purple" | "neonpurple";

interface AstroDividerProps {
    variant?: DividerVariant;
}

const colorMap = {
    default: {
        shadow: "shadow-[0_0_8px_#049372]",
        box: "shadow-[0_2px_4px_#4fb39c]",
        border: "border-dashed border-[#68beaa] text-[#049372]",
    },
    purple: {
        shadow: "shadow-[0_0_8px_#886fac]",
        box: "shadow-[0_2px_4px_#ab9ac4]",
        border: "border-dashed border-[#b7a8cd] text-[#886fac]",
    },
    neonpurple: {
        shadow: "shadow-[0_0_8px_#9d00ff]",
        box: "shadow-[0_2px_4px_#ba4cff]",
        border: "border-dashed border-[#c466ff] text-[#9d00ff]",
    },
};

const AstroDivider: React.FC<AstroDividerProps> = ({ variant = "default" }) => {
    const colors = colorMap[variant];

    return (
        <div className="relative my-16 mx-auto w-full max-w-[400px]">
            {/* Mask */}
            <div className="overflow-hidden h-5">
                <div
                    className={clsx(
                        "block w-full h-[25px] rounded-[125px/12px] -mt-[25px] mx-auto",
                        colors.shadow
                    )}
                ></div>
            </div>

            {/* Circle + Icon */}
            <span
                className={clsx(
                    "absolute bottom-full left-1/2 -mb-[25px] -ml-[25px] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center",
                    colors.box
                )}
            >
                <i
                    className={clsx(
                        "flex items-center justify-center w-[42px] h-[42px] rounded-full border text-lg not-italic",
                        colors.border
                    )}
                >
                    &#10038;
                </i>
            </span>
        </div>
    );
};

export default AstroDivider;
