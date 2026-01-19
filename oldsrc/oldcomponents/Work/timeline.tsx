'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans" ref={containerRef}>
            <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
                {data.map((item, index) => (
                    <React.Fragment key={`${item.title}-${index}`}>
                        <div className="flex justify-start pt-10 md:gap-10 md:pt-40 font-mono">
                            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                                <div className="absolute flex h-10 w-10 items-center justify-center rounded-full">
                                    <div className="h-4 w-4 rounded-full border-4 border-slate-100 bg-cyan-700 p-2" />
                                </div>
                                <h3 className="hidden text-xl font-bold text-slate-800 md:block md:pl-20 md:text-3xl">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="relative w-full pl-10 pr-4">
                                <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-800 md:hidden">
                                    {item.title}
                                </h3>
                                {/* force a unique key inside to silence any nested key issues */}
                                <div key={`${item.title}-content`}>{item.content}</div>
                                <br /><br />
                                <hr />
                            </div>
                        </div>
                    </React.Fragment>
                ))}

                <div
                    style={{ height: '100%' }}
                    className="absolute top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                     from-transparent via-neutral-300 to-transparent 
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] 
                     md:left-5"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] rounded-full 
                       bg-gradient-to-t from-slate-800 via-white to-transparent"
                    />
                </div>
            </div>
        </div>
    );
};
