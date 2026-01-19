'use client';
import './article.css'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ReadingHighlight({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.hl').forEach((el) => {
                gsap.fromTo(
                    el,
                    { backgroundSize: '0% 100%' },
                    {
                        backgroundSize: '100% 100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            end: 'top 45%',
                            scrub: true,
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="reading-container">
            {children}
        </div>
    );
}
