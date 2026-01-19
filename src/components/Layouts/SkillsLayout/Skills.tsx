'use client'

import React from 'react'
import './skills.css'
import Header from '@/components/ui/Header/Header'
import { Layout, Layers, Server, Database, Cpu, Globe } from "lucide-react";




const icons = [Layout, Layers, Server, Database, Cpu, Globe];


export default function SkillsPage() {
    return (
        <>
            <Header
                textPage='Skills'
                textHead='Technical Capabilities Focused on Business Systems.'
            />
            <div className='sk-body'>
                {/* <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MÅNE | Architecture of Silence</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;600;800&display=swap" rel="stylesheet">
</head> */}



                {/* <!-- Mobile Progress Widget --> */}
                <div className="mobile-progress">
                    <svg viewBox="0 0 100 100">
                        <circle className="track-circle" cx="50" cy="50" r="40" />
                        <circle className="progress-circle" cx="50" cy="50" r="40" pathLength="1" />
                    </svg>
                </div>

                {/* <!-- Visuals Container --> */}
                <div className="sticky-visual">
                    <div className="desktop-progress"></div>

                    {icons.map((Icon, index) => (
                        <div key={index} className={`shape-container shape-${index + 1}`}>
                            <Icon className="system-icon" />
                        </div>
                    ))}

                    {/* <div className="shape-container shape-1">1</div>
                    <div className="shape-container shape-2">2</div>
                    <div className="shape-container shape-3">3</div>
                    <div className="shape-container shape-4">4</div>
                    <div className="shape-container shape-5">5</div>
                    <div className="shape-container shape-6">6</div> */}

                    {/* <div className="mobile-icons">
                        <Layout size={48} color="#d4c5a3" />
                        <Layers size={48} color="#d4c5a3" />
                        <Server size={48} color="#d4c5a3" />
                        <Database size={48} color="#d4c5a3" />
                        <Cpu size={48} color="#d4c5a3" />
                        <Cpu size={48} color="#d4c5a3" />
                    </div> */}

                </div>

                {/* <!-- Scroll Content --> */}
                <div className="content">
                    {/* header */}

                    <section className="scroll-section s1">
                        <p className="focus-text">
                            Business Systems Development
                        </p>
                        <p className="description">
                            Admin dashboards & internal platforms
                            <br />
                            CMS-driven websites (Payload, Strapi, custom)
                            <br />
                            Workflow automation & role-based systems

                        </p>
                    </section>

                    <section className="scroll-section s2">
                        <p className="focus-text">
                            Frontend Engineering
                        </p>
                        <p className="description">
                            React.js, Next.js, TypeScript
                            <br />
                            Server-Side Rendering (SSR) & Client-Side Rendering (CSR)
                            <br />
                            Component architecture & state management
                            <br />
                            Performance optimization & responsive UI

                        </p>
                    </section>

                    <section className="scroll-section s3">
                        <p className="focus-text">
                            Backend & APIs
                        </p>
                        <p className="description">
                            Node.js, Express, NestJS
                            <br />
                            REST API design & system integrations
                            <br />
                            Authentication & Authorization (JWT, OAuth, RBAC)
                            <br />
                            Error handling, logging, and validation
                        </p>
                    </section>

                    <section className="scroll-section s4">
                        <p className="focus-text">
                            Databases
                        </p>
                        <p className="description">
                            MongoDB, PostgreSQL, MySQL
                            <br />
                            Prisma, TypeORM, Mongoose
                            <br />
                            Schema design, indexing, query optimization
                        </p>
                    </section>

                    <section className="scroll-section s5">
                        <p className="focus-text">
                            Infrastructure Awareness
                        </p>
                        <p className="description">
                            Linux servers & deployment pipelines
                            <br />
                            Networking fundamentals
                            <br />
                            IoT system integration (MQTT, real-time data pipelines)
                        </p>
                    </section>

                    <section className="scroll-section s6">
                        <p className="focus-text">Sustainability is not a feature.

                        </p>
                        <p className="description">It is the default. We build for permanence. The most sustainable building is the one that never needs to be torn down.

                        </p>
                    </section>

                    {/* <div className="closing-section">
                        <div className="closer">
                            <strong>Start the conversation.</strong>
                            hello@manestudio.com<br />
                            Copenhagen / Tokyo / New York
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    )
}


// @media (max-width: 768px) {
//   .sticky-visual {
//     position: absolute; /* FIX */
//     inset: 0;
//     width: 100%;
//     z-index: -1;
//     opacity: 0.12;
//     border-left: none;
//   }

//   .content {
//     width: 100%;
//   }

//   /* header, */
//   .scroll-section,
//   .closing-section {
//     padding-left: 1.5rem;
//     padding-right: 1.5rem;
//   }

//   .desktop-progress {
//     display: none;
//   }
// }



// 'use client'

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import './skills.css'

// gsap.registerPlugin(ScrollTrigger)

// export default function SkillsLayout() {
//     const rootRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         if (!rootRef.current) return

//         const ctx = gsap.context(() => {
//             /* ===============================
//                SHAPE FADE (RIGHT VISUALS)
//             =============================== */
//             gsap.utils.toArray<HTMLElement>('.shape-container').forEach((shape, i) => {
//                 const section = document.querySelector(`.s${i + 1}`)

//                 if (!section) return

//                 gsap.fromTo(
//                     shape,
//                     { opacity: 0, y: 40, scale: 0.9 },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         scale: 1,
//                         scrollTrigger: {
//                             trigger: section,
//                             start: 'top center',
//                             end: 'bottom center',
//                             scrub: true,
//                         },
//                     }
//                 )
//             })

//             /* ===============================
//                TEXT FOCUS EFFECT
//             =============================== */
//             gsap.utils.toArray<HTMLElement>('.scroll-section').forEach(section => {
//                 const focus = section.querySelector('.focus-text')
//                 const desc = section.querySelector('.description')

//                 gsap.fromTo(
//                     [focus, desc],
//                     {
//                         opacity: 0,
//                         filter: 'blur(12px)',
//                         y: 40,
//                         scale: 0.8,
//                     },
//                     {
//                         opacity: 1,
//                         filter: 'blur(0px)',
//                         y: 0,
//                         scale: 1,
//                         scrollTrigger: {
//                             trigger: section,
//                             start: 'top 60%',
//                             end: 'bottom 40%',
//                             scrub: true,
//                         },
//                     }
//                 )
//             })

//             /* ===============================
//                DESKTOP PROGRESS LINE
//             =============================== */
//             gsap.fromTo(
//                 '.desktop-progress',
//                 { scaleY: 0 },
//                 {
//                     scaleY: 1,
//                     transformOrigin: 'top',
//                     scrollTrigger: {
//                         trigger: '.content',
//                         start: 'top top',
//                         end: 'bottom bottom',
//                         scrub: true,
//                     },
//                 }
//             )

//             /* ===============================
//                MOBILE CIRCULAR PROGRESS
//             =============================== */
//             gsap.fromTo(
//                 '.progress-circle',
//                 { strokeDashoffset: 1 },
//                 {
//                     strokeDashoffset: 0,
//                     scrollTrigger: {
//                         trigger: '.content',
//                         start: 'top top',
//                         end: 'bottom bottom',
//                         scrub: true,
//                     },
//                 }
//             )
//         }, rootRef)

//         return () => ctx.revert()
//     }, [])

//     return (
//         <div ref={rootRef} className="sk-body">
//             {/* Mobile Progress */}
//             <div className="mobile-progress">
//                 <svg viewBox="0 0 100 100">
//                     <circle className="track-circle" cx="50" cy="50" r="40" />
//                     <circle
//                         className="progress-circle"
//                         cx="50"
//                         cy="50"
//                         r="40"
//                         pathLength="1"
//                     />
//                 </svg>
//             </div>

//             {/* Sticky Visuals */}
//             <div className="sticky-visual">
//                 <div className="desktop-progress" />

//                 <div className="shape-container shape-1">
//                     <div className="circle-outline" />
//                 </div>

//                 <div className="shape-container shape-2">
//                     <div className="stone-block" />
//                 </div>

//                 <div className="shape-container shape-3">
//                     <div className="grid-lines">
//                         <div className="grid-box" />
//                         <div className="grid-box" />
//                         <div className="grid-box" />
//                         <div className="grid-box" />
//                     </div>
//                 </div>

//                 <div className="shape-container shape-4">
//                     <div className="balance">
//                         <div className="b-circle b-1" />
//                         <div className="b-circle b-2" />
//                     </div>
//                 </div>

//                 <div className="shape-container shape-5">
//                     <div className="light-orb" />
//                 </div>

//                 <div className="shape-container shape-6">
//                     <div className="end-line" />
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="content sk-content">
//                 <header className="sk-header">
//                     <div>
//                         <h1 className="sk-h1">MÅNE Studio</h1>
//                         <span className="title-large">
//                             Architecture
//                             <br />
//                             of Silence.
//                         </span>
//                     </div>
//                 </header>

//                 {[1, 2, 3, 4, 5, 6].map(i => (
//                     <section key={i} className={`scroll-section s${i}`}>
//                         <p className="focus-text">
//                             Section {i} headline text goes here.
//                         </p>
//                         <p className="description">
//                             Supporting description text that fades and focuses with scroll.
//                         </p>
//                     </section>
//                 ))}

//                 <div className="closing-section">
//                     <div className="closer">
//                         <strong>Start the conversation.</strong>
//                         hello@manestudio.com
//                         <br />
//                         Copenhagen / Tokyo / New York
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



// 'use client'

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import './skills.css'

// gsap.registerPlugin(ScrollTrigger)

// export default function SkillsPage() {
//     const rootRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         if (!rootRef.current) return

//         const ctx = gsap.context(() => {
//             /* ===============================
//                SHAPE TRANSITIONS
//             =============================== */
//             gsap.utils.toArray<HTMLElement>('.shape-container').forEach((shape, i) => {
//                 const section = document.querySelector(`.s${i + 1}`)
//                 if (!section) return

//                 ScrollTrigger.create({
//                     trigger: '.content',
//                     start: 'top top',
//                     end: 'bottom bottom',
//                     pin: '.sticky-visual',
//                     pinSpacing: false,
//                 })


//                 gsap.fromTo(
//                     shape,
//                     { opacity: 0, y: 40, scale: 0.9 },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         scale: 1,
//                         scrollTrigger: {
//                             trigger: section,
//                             start: 'top 60%',
//                             end: 'bottom 40%',
//                             scrub: true,
//                         },
//                     }
//                 )
//             })

//             /* ===============================
//                TEXT FOCUS EFFECT
//             =============================== */
//             gsap.utils.toArray<HTMLElement>('.scroll-section').forEach(section => {
//                 const focus = section.querySelector('.focus-text')
//                 const desc = section.querySelector('.description')

//                 gsap.fromTo(
//                     [focus, desc],
//                     {
//                         opacity: 0,
//                         filter: 'blur(12px)',
//                         y: 40,
//                         scale: 0.85,
//                     },
//                     {
//                         opacity: 1,
//                         filter: 'blur(0px)',
//                         y: 0,
//                         scale: 1,
//                         scrollTrigger: {
//                             trigger: section,
//                             start: 'top 65%',
//                             end: 'bottom 35%',
//                             scrub: true,
//                         },
//                     }
//                 )
//             })

//             /* ===============================
//                DESKTOP PROGRESS BAR
//             =============================== */
//             gsap.fromTo(
//                 '.desktop-progress',
//                 { scaleY: 0 },
//                 {
//                     scaleY: 1,
//                     transformOrigin: 'top',
//                     scrollTrigger: {
//                         trigger: '.content',
//                         start: 'top top',
//                         end: 'bottom bottom',
//                         scrub: true,
//                     },
//                 }
//             )

//             /* ===============================
//                MOBILE CIRCULAR PROGRESS
//             =============================== */
//             gsap.fromTo(
//                 '.progress-circle',
//                 { strokeDashoffset: 1 },
//                 {
//                     strokeDashoffset: 0,
//                     scrollTrigger: {
//                         trigger: '.content',
//                         start: 'top top',
//                         end: 'bottom bottom',
//                         scrub: true,
//                     },
//                 }
//             )
//         }, rootRef)

//         return () => ctx.revert()
//     }, [])

//     return (
//         <div ref={rootRef} className="sk-body">
//             {/* Mobile Progress */}
//             <div className="mobile-progress">
//                 <svg viewBox="0 0 100 100">
//                     <circle className="track-circle" cx="50" cy="50" r="40" />
//                     <circle className="progress-circle" cx="50" cy="50" r="40" pathLength="1" />
//                 </svg>
//             </div>

//             {/* Sticky Visuals */}
//             <div className="sticky-visual">
//                 <div className="desktop-progress" />

//                 <div className="shape-container shape-1">
//                     <div className="circle-outline" />
//                 </div>

//                 <div className="shape-container shape-2">
//                     <div className="stone-block" />
//                 </div>

//                 <div className="shape-container shape-3">
//                     <div className="grid-lines">
//                         <div className="grid-box" />
//                         <div className="grid-box" />
//                         <div className="grid-box" />
//                         <div className="grid-box" />
//                     </div>
//                 </div>

//                 <div className="shape-container shape-4">
//                     <div className="balance">
//                         <div className="b-circle b-1" />
//                         <div className="b-circle b-2" />
//                     </div>
//                 </div>

//                 <div className="shape-container shape-5">
//                     <div className="light-orb" />
//                 </div>

//                 <div className="shape-container shape-6">
//                     <div className="end-line" />
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="content sk-content">
//                 <header className="sk-header">
//                     <div>
//                         <h1 className="sk-h1">MÅNE Studio</h1>
//                         <span className="title-large">
//                             Architecture
//                             <br />
//                             of Silence.
//                         </span>
//                     </div>
//                 </header>

//                 <section className="scroll-section s1">
//                     <p className="focus-text">We don't just fill space. We shape the void.</p>
//                     <p className="description">
//                         True luxury is the absence of noise. Our design philosophy centers on negative space.
//                     </p>
//                 </section>

//                 <section className="scroll-section s2">
//                     <p className="focus-text">Honest materials that age, but never break.</p>
//                     <p className="description">
//                         Raw oak. Brushed steel. Travertine stone. Materials that develop a story.
//                     </p>
//                 </section>

//                 <section className="scroll-section s3">
//                     <p className="focus-text">Rigorous structure. Fluid living.</p>
//                     <p className="description">
//                         The grid is our foundation, but life remains organic.
//                     </p>
//                 </section>

//                 <section className="scroll-section s4">
//                     <p className="focus-text">Objects that don't scream for attention.</p>
//                     <p className="description">
//                         Quiet confidence, absolute purpose.
//                     </p>
//                 </section>

//                 <section className="scroll-section s5">
//                     <p className="focus-text">Light as the fourth dimension.</p>
//                     <p className="description">
//                         Light guides the eye and reveals time.
//                     </p>
//                 </section>

//                 <section className="scroll-section s6">
//                     <p className="focus-text">Sustainability is not a feature.</p>
//                     <p className="description">
//                         It is the default.
//                     </p>
//                 </section>

//                 <div className="closing-section">
//                     <div className="closer">
//                         <strong>Start the conversation.</strong>
//                         hello@manestudio.com
//                         <br />
//                         Copenhagen / Tokyo / New York
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
