'use client';

import { useEffect, type PropsWithChildren } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LenisWrapperProps extends PropsWithChildren {
    duration?: number;
}

export default function ScrollWrapper({ children, duration = 1.2 }: LenisWrapperProps) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const lenis = new Lenis({
            duration,                // scroll duration (slower with higher numbers)
            // easing: (t) => t,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth tail
            smoothWheel: true,       // enable wheel smoothness
            wheelMultiplier: 0.8,    // reduce wheel speed
            touchMultiplier: 0.8,    // reduce touch speed
        });



        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        return () => lenis.destroy();
    }, [duration]);

    return <>{children}</>;
}
