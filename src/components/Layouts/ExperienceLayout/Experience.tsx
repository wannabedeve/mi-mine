'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './experience.scss'
import { sectionsData } from '@/data/data';
import Header from '@/components/ui/Header/Header';

gsap.registerPlugin(ScrollTrigger);



export default function ExperienceLayout() {
    // const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    // const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const titleRefs = useRef<(HTMLElement | null)[]>([]);



    useEffect(() => {
        const mm = gsap.matchMedia();

        sectionRefs.current.forEach((section, i) => {
            const title = titleRefs.current[i];
            // const progressFill = title.querySelector<HTMLDivElement>('.progress-fill');
            // const progressFill = title!.querySelector<HTMLDivElement>('.progress-fill');

            const q = gsap.utils.selector(title); // Scoped selector for this title

            const progressFill = q('.progress-fill')[0] as HTMLElement;


            if (!progressFill) return;


            if (!section || !title) return;
            const cards = section.querySelectorAll('.excard');


            sectionRefs.current.forEach((section, i) => {
                const title = titleRefs.current[i];
                if (!section || !title) return;

                const q = gsap.utils.selector(title); // Scoped selector for this title
                const progressFill = q('.progress-fill')[0] as HTMLElement;
                const connector = q('.connector-line')[0] as HTMLElement;

                if (!progressFill || !connector) return;

                // Calculate section-specific start/end
                const start = () => section.getBoundingClientRect().top + window.scrollY - 100;
                const end = () => section.getBoundingClientRect().top + window.scrollY + section.offsetHeight - title.offsetHeight - 50;

                // Animate progress fill
                gsap.to(progressFill, {
                    width: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start,
                        end,
                        scrub: true,
                    },
                });

                // Animate connector
                gsap.fromTo(
                    connector,
                    { scaleY: 0, transformOrigin: 'top' },
                    {
                        scaleY: 1,
                        scrollTrigger: {
                            trigger: section,
                            start,
                            end,
                            scrub: true,
                        },
                    }
                );

                // Heading color
                gsap.to(title, {
                    color: '#fff',
                    scrollTrigger: {
                        trigger: section,
                        start,
                        end,
                        scrub: true,

                    },
                });
            });




            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { opacity: 0.5, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 50%",
                            toggleActions: "play none none reverse",
                            scrub: true,
                        },
                        scrub: true,

                    }
                );
            });



            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => activateTitle(title),
                onEnterBack: () => activateTitle(title),
                onLeave: () => deactivateTitle(title),
                onLeaveBack: () => deactivateTitle(title),
                scrub: true,
            });

            // const start = () => section.getBoundingClientRect().top + window.scrollY - 100;
            // const end = () => section.getBoundingClientRect().top + window.scrollY + section.offsetHeight - title.offsetHeight - 50;


            const connector = title.querySelector('.connector-line') as HTMLElement;


            gsap.to(connector, {
                scaleY: 1,
                transformOrigin: 'top',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top+=140',
                    end: () => section.scrollHeight - title.offsetHeight - 260,
                    scrub: true,
                },
            });



            // Desktop: fully stick the title






            mm.add('(min-width: 769px)', () => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top+=130',
                    end: () => `+=${section.scrollHeight - 50}`,
                    pin: title,
                    pinSpacing: false,
                    anticipatePin: 1,
                    scrub: true,
                });
            });

            // Mobile: fully stick the title at top
            mm.add('(max-width: 768px)', () => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${section.scrollHeight - 70}`,
                    pin: title,
                    // pinSpacing: true,

                    pinSpacing: false,
                    anticipatePin: 1,
                    scrub: true,
                });
            });
        });


        function activateTitle(el: HTMLElement) {
            gsap.to(el, {
                background: 'linear-gradient(135deg, #0b0f19, #d4c5a399)',
                color: '#fff',
                duration: 0.9,
                ease: 'power2.out',
                scrub: true,
            });
        }

        function deactivateTitle(el: HTMLElement) {
            gsap.to(el, {
                background: 'linear-gradient(135deg, #1f1f1b, #2a2a25)',
                color: '#fff',
                duration: 1.2,
                ease: 'power2.out',
                scrub: true,
            });
        }

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <div className='block'>
                <Header
                    textPage='Experience'
                    textHead='Delivering Production-Ready Platforms for Real Business Use.'
                />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />
            <br />
            <main className='exmain'>

                {sectionsData.map((section, i) => (
                    <section
                        key={i}
                        // ref={(el) => (sectionRefs.current[i] = el)}
                        ref={(el) => (sectionRefs.current[i] = el) as any}
                        className="section-container"
                    >
                        <div
                            className="section-heading"
                            // ref={(el) => (titleRefs.current[i] = el)}
                            ref={(el) => (titleRefs.current[i] = el) as any}

                        >
                            <h2 className='text-3xl'>
                                {section.title}
                            </h2>
                            {/* <span>{i + 1}</span> */}
                            <p></p>
                            <h3>{section.subTitle}</h3>
                            <span className="connector-line" />
                            <div className="progress-bar">
                                <div className="progress-fill" />
                            </div>

                        </div>
                        {section.content?.map((cont, index) => (
                            <div
                                key={index}
                                className="excard"
                            >

                                <p>
                                    {cont}
                                </p>
                                {/* 
                                <p className="text-source">
                                    Text generated from{' '}
                                    <a href={section.source} target="_blank" rel="noopener noreferrer">
                                        source
                                    </a>
                                    .
                                </p> */}
                            </div>
                        ))}

                    </section>
                ))}
                <p>
                </p>
            </main>
        </>


        // <section className="exmain">
        //     {sectionsData.map((section, i) => (

        //         <div
        //             key={i}
        //             className="excontainer"
        //             ref={(el) => (sectionRefs.current[i] = el) as any}

        //         >
        //             <aside className="exsidebar"
        //                 // ref={sidebarRef}
        //                 ref={(el) => (titleRefs.current[i] = el) as any}

        //             >
        //                 <h2>{section.title}</h2>
        //                 <p>
        //                     {section.source}
        //                 </p>
        //             </aside>

        //             <div className="right-list">
        //                 {section.content.map((cont, ie) => (

        //                     <div
        //                         key={ie}
        //                         className="service-card">
        //                         {cont}
        //                     </div>
        //                 ))}

        //                 {/* <div className="service-card">
        //                     <strong>WooCommerce</strong>
        //                     <p>Lorem ipsum dolor sit amet...</p>
        //                 </div>

        //                 <div className="service-card">
        //                     <strong>PHP and Laravel</strong>
        //                     <p>Lorem ipsum dolor sit amet...</p>
        //                 </div>

        //                 <div className="service-card">
        //                     <strong>Custom Projects</strong>
        //                     <p>Lorem ipsum dolor sit amet...</p>
        //                 </div> */}
        //             </div>
        //         </div>
        //     ))}
        // </section>
    );
}
