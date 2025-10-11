"use client";

import { useEffect, useRef, useState } from "react";
import "./style.scss";
import MyWebWork from "../projects/web/MyWebWorks";
import MyIoTWork from "../projects/iot/MyIoTWorks";
import MyNetworkWork from "../projects/network/MyNetworkWorks";

const tabs = [
    { id: "tab-es6", label: "Web", content: <MyWebWork /> },
    { id: "tab-flexbox", label: "IoT", content: <MyIoTWork /> },
    { id: "tab-react", label: "Emb & Network", content: <MyNetworkWork /> },
    // { id: "tab-angular", label: "Angular", content: "something about angular" },
    // { id: "tab-other", label: "Other", content: "something about other" },
];

export default function StickyTabs() {
    const [currentId, setCurrentId] = useState<string | null>(null);
    const [sliderStyle, setSliderStyle] = useState<{ width: string; left: string }>({
        width: "0px",
        left: "0px",
    });
    const tabContainerHeight = 70;
    const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const heroTabs = document.querySelector(".et-hero-tabs") as HTMLElement;
        const container = document.querySelector(".et-hero-tabs-container") as HTMLElement;

        if (heroTabs && container) {
            const offset = heroTabs.offsetTop + heroTabs.offsetHeight - tabContainerHeight;
            if (scrollY > offset) {
                container.classList.add("et-hero-tabs-container--top");
            } else {
                container.classList.remove("et-hero-tabs-container--top");
            }
        }

        // find current section
        for (const tab of tabs) {
            const section = document.getElementById(tab.id);
            if (section) {
                const offsetTop = section.offsetTop - tabContainerHeight;
                const offsetBottom = offsetTop + section.offsetHeight;
                if (scrollY >= offsetTop && scrollY < offsetBottom) {
                    if (currentId !== tab.id) {
                        setCurrentId(tab.id);
                        const tabElement = tabsRef.current.find(
                            (el) => el?.getAttribute("href") === `#${tab.id}`
                        );
                        if (tabElement) {
                            setSliderStyle({
                                width: `${tabElement.offsetWidth}px`,
                                left: `${tabElement.offsetLeft}px`,
                            });
                        }
                    }
                }
            }
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - tabContainerHeight + 1,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll(); // run initially
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [currentId]);

    return (
        <>
            {/* Hero Section */}
            <section className="et-hero-tabs">
                {/* <h1>STICKY SLIDER NAV</h1>
                <h3>Sliding content with sticky tab nav</h3> */}
                <div className="et-hero-tabs-container">
                    {tabs.map((tab, i) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            className="et-hero-tab"
                            ref={(el) => (tabsRef.current[i] = el)}
                            onClick={(e) => handleClick(e, tab.id)}
                        >
                            {tab.label}
                        </a>
                    ))}
                    <span
                        className="et-hero-tab-slider"
                        style={{
                            width: sliderStyle.width,
                            left: sliderStyle.left,
                            transition: "all 0.3s ease",
                        }}
                    ></span>
                </div>
            </section>

            {/* Main Sections */}
            <main className="mt-[10%]">
                {/* et-main mt-[70%] md:mt-0 lg:mt-0 */}
                {tabs.map((tab) => (
                    <section key={tab.id} className="mb-[20%]" id={tab.id}>
                        {/* et-slide */}
                        {/* <h1>{tab.label}</h1> */}
                        <h3>{tab.content}</h3>
                        <br /><br />
                        <hr />
                    </section>
                ))}
            </main>
        </>
    );
}
