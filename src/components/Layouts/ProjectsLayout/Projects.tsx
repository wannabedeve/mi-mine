// 'use client';

// import { useRef } from 'react';
// import gsap from 'gsap';
// import './style.scss';

// type Project = {
//     title: string;
//     image: string;
//     excerpt: string;
//     content: string;
//     color: string;
// };

// const projects: Project[] = [
//     {
//         title: 'Building a Modern E-Commerce Platform',
//         image: 'https://dummyimage.com/1200x700/000/fff',
//         excerpt: 'How we designed and built a scalable e-commerce system.',
//         content: `
//       <p>This project focused on scalability, performance, and UX.</p>
//       <p>We implemented payments, admin dashboards, and inventory tracking.</p>
//       <p>The backend was built with Node.js and MongoDB.</p>
//     `,
//         color: '#EB5160',
//     },
//     {
//         title: 'Marketing Website for a SaaS Startup',
//         image: 'https://dummyimage.com/1200x700/222/fff',
//         excerpt: 'A conversion-focused marketing experience.',
//         content: `
//       <p>The goal was to increase signups and engagement.</p>
//       <p>Animations were subtle and performance-friendly.</p>
//       <p>SEO and accessibility were core priorities.</p>
//     `,
//         color: '#8F3985',
//     },
// ];

// export default function ProjectCards() {
//     const coverRef = useRef<HTMLDivElement>(null);
//     const modalRef = useRef<HTMLDivElement>(null);
//     const modalContentRef = useRef<HTMLDivElement>(null);

//     const getSharedCoverRect = () => {
//         const width = 360;
//         const height = 220;

//         return {
//             width,
//             height,
//             left: window.innerWidth / 2 - width / 2,
//             top: window.innerHeight / 2 - height / 2,
//         };
//     };

//     const openCard = (project: Project) => {
//         const rect = getSharedCoverRect();

//         document.body.style.overflow = 'hidden';

//         modalContentRef.current!.innerHTML = `
//       <img src="${project.image}" />
//       <article>
//         <h1>${project.title}</h1>
//         ${project.content}
//       </article>
//     `;

//         gsap.set(modalContentRef.current, { scrollTop: 0 });

//         gsap.set(coverRef.current, {
//             left: rect.left,
//             top: rect.top,
//             width: rect.width,
//             height: rect.height,
//             backgroundColor: project.color,
//             scaleX: 1,
//             scaleY: 1,
//             x: 0,
//             y: 0,
//         });

//         const scaleX = window.innerWidth / rect.width;
//         const scaleY = window.innerHeight / rect.height;

//         const x =
//             (window.innerWidth / 2 - rect.width / 2 - rect.left) / scaleX;
//         const y =
//             (window.innerHeight / 2 - rect.height / 2 - rect.top) / scaleY;

//         gsap.timeline()
//             .set(modalRef.current, { pointerEvents: 'auto' })
//             .to(coverRef.current, {
//                 scaleX,
//                 scaleY,
//                 x,
//                 y,
//                 duration: 0.7,
//                 ease: 'power3.inOut',
//             })
//             .to(
//                 modalRef.current,
//                 { opacity: 1, duration: 0.3 },
//                 '-=0.3'
//             )
//             .fromTo(
//                 modalContentRef.current,
//                 { y: 40, opacity: 0 },
//                 { y: 0, opacity: 1, duration: 0.4 },
//                 '-=0.2'
//             );
//     };

//     const closeCard = () => {
//         document.body.style.overflow = '';

//         gsap.timeline({
//             onComplete: () => {
//                 modalRef.current!.style.pointerEvents = 'none';
//                 modalContentRef.current!.innerHTML = '';
//                 gsap.set(coverRef.current, { width: 0, height: 0 });
//             },
//         })
//             .to(modalRef.current, {
//                 opacity: 0,
//                 duration: 0.25,
//             })
//             .to(
//                 coverRef.current,
//                 {
//                     scaleX: 1,
//                     scaleY: 1,
//                     x: 0,
//                     y: 0,
//                     duration: 0.6,
//                     ease: 'power3.inOut',
//                 },
//                 '<'
//             );
//     };

//     return (
//         <section className="project-cards">
//             {projects.map((project, i) => (
//                 <div
//                     key={i}
//                     className="card"
//                     style={{ backgroundColor: project.color }}
//                     onClick={() => openCard(project)}
//                 >
//                     <div className="card-media">
//                         <img src={project.image} />
//                     </div>

//                     <div className="card-body">
//                         <h2>{project.title}</h2>
//                         <p>{project.excerpt}</p>
//                     </div>
//                 </div>
//             ))}

//             <div ref={coverRef} className="card-cover" />
//             <div ref={modalRef} className="card-modal">
//                 <button className="close" onClick={closeCard}>
//                     ✕
//                 </button>

//                 <div
//                     className="card-modal-scroll"
//                     onWheel={(e) => e.stopPropagation()}
//                 >
//                     <div
//                         ref={modalContentRef}
//                         className="card-modal-content"
//                     />
//                 </div>
//             </div>

//         </section>
//     );
// }




// 'use client';

// import { useRef } from 'react';
// import gsap from 'gsap';
// import './style.scss';

// type Project = {
//     title: string;
//     image: string;
//     excerpt: string;
//     content: string;
//     color: string;
// };

// const projects: Project[] = [
//     {
//         title: 'Building a Modern E-Commerce Platform',
//         image: 'https://dummyimage.com/1200x700/000/fff',
//         excerpt: 'How we designed and built a scalable e-commerce system.',
//         content: `
//       <p>This project focused on scalability, performance, and UX.</p>
//       <p>We implemented payments, admin dashboards, and inventory tracking.</p>
//       <p>The backend was built with Node.js and MongoDB.</p>
//     `,
//         color: '#EB5160',
//     },
//     {
//         title: 'Marketing Website for a SaaS Startup',
//         image: 'https://dummyimage.com/1200x700/222/fff',
//         excerpt: 'A conversion-focused marketing experience.',
//         content: `
//       <p>The goal was to increase signups and engagement.</p>
//       <p>Animations were subtle and performance-friendly.</p>
//       <p>SEO and accessibility were core priorities.</p>
//     `,
//         color: '#8F3985',
//     },
// ];

// export default function ProjectCards() {
//     const coverRef = useRef<HTMLDivElement>(null);
//     const modalRef = useRef<HTMLDivElement>(null);
//     const modalContentRef = useRef<HTMLDivElement>(null);

//     const getSharedCoverRect = () => {
//         const width = 360;
//         const height = 220;
//         return {
//             width,
//             height,
//             left: window.innerWidth / 2 - width / 2,
//             top: window.innerHeight / 2 - height / 2,
//         };
//     };

//     const openCard = (project: Project) => {
//         if (!coverRef.current || !modalRef.current || !modalContentRef.current) return;

//         const rect = getSharedCoverRect();
//         document.body.style.overflow = 'hidden';

//         modalContentRef.current.innerHTML = `
//       <img src="${project.image}" />
//       <article>
//         <h1>${project.title}</h1>
//         ${project.content}
//       </article>
//     `;

//         gsap.set(modalContentRef.current, { scrollTop: 0 });

//         gsap.set(coverRef.current, {
//             left: rect.left,
//             top: rect.top,
//             width: rect.width,
//             height: rect.height,
//             backgroundColor: project.color,
//             scaleX: 1,
//             scaleY: 1,
//             x: 0,
//             y: 0,
//             transformOrigin: 'center center',
//         });

//         const scaleX = window.innerWidth / rect.width;
//         const scaleY = window.innerHeight / rect.height;

//         const x = (window.innerWidth / 2 - rect.width / 2 - rect.left) / scaleX;
//         const y = (window.innerHeight / 2 - rect.height / 2 - rect.top) / scaleY;

//         gsap.timeline()
//             .set(modalRef.current, { pointerEvents: 'auto' })
//             .to(coverRef.current, {
//                 scaleX,
//                 scaleY,
//                 x,
//                 y,
//                 duration: 0.7,
//                 ease: 'power3.inOut',
//             })
//             .to(
//                 modalRef.current,
//                 { opacity: 1, duration: 0.3 },
//                 '-=0.3'
//             )
//             .fromTo(
//                 modalContentRef.current,
//                 { y: 40, opacity: 0 },
//                 { y: 0, opacity: 1, duration: 0.4 },
//                 '-=0.2'
//             );
//     };

//     const closeCard = () => {
//         if (!coverRef.current || !modalRef.current || !modalContentRef.current) return;

//         document.body.style.overflow = '';

//         gsap.timeline({
//             onComplete: () => {
//                 modalRef.current!.style.pointerEvents = 'none';
//                 modalContentRef.current!.innerHTML = '';
//                 gsap.set(coverRef.current, { width: 0, height: 0 });
//             },
//         })
//             .to(modalRef.current, {
//                 opacity: 0,
//                 duration: 0.25,
//             })
//             .to(
//                 coverRef.current,
//                 {
//                     scaleX: 1,
//                     scaleY: 1,
//                     x: 0,
//                     y: 0,
//                     duration: 0.6,
//                     ease: 'power3.inOut',
//                 },
//                 '<'
//             );
//     };

//     return (
//         <section className="project-cards">
//             {projects.map((project, i) => (
//                 <div
//                     key={i}
//                     className="card"
//                     style={{ backgroundColor: project.color }}
//                     onClick={() => openCard(project)}
//                 >
//                     <div className="card-media">
//                         <img src={project.image} />
//                     </div>

//                     <div className="card-body">
//                         <h2>{project.title}</h2>
//                         <p>{project.excerpt}</p>
//                     </div>
//                 </div>
//             ))}

//             <div ref={coverRef} className="card-cover" />

//             <div ref={modalRef} className="card-modal">
//                 <button className="close" onClick={closeCard}>✕</button>

//                 <div className="card-modal-scroll" onWheel={(e) => e.stopPropagation()}>
//                     <div ref={modalContentRef} className="card-modal-content" />
//                 </div>
//             </div>
//         </section>
//     );
// }



'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import './projects.scss';
import { Project, projectsList } from '@/data/data';
import Image from 'next/image';
import Header from '@/components/ui/Header/Header';



export default function ProjectCards() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const coverRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const modalScrollRef = useRef<HTMLDivElement>(null);

    const getSharedCoverRect = () => {
        const width = 360;
        const height = 220;
        return {
            width,
            height,
            left: window.innerWidth / 2 - width / 2,
            top: window.innerHeight / 2 - height / 2,
        };
    };

    const openCard = (project: Project) => {
        setSelectedProject(project);
        const rect = getSharedCoverRect();
        document.body.style.overflow = 'hidden';

        if (!coverRef.current || !modalRef.current) return;

        gsap.set(modalScrollRef.current, { scrollTop: 0 });

        gsap.set(coverRef.current, {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            backgroundColor: project.color,
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            transformOrigin: 'center center',
        });

        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;

        const x = (window.innerWidth / 2 - rect.width / 2 - rect.left) / scaleX;
        const y = (window.innerHeight / 2 - rect.height / 2 - rect.top) / scaleY;

        gsap.timeline()
            .set(modalRef.current, { pointerEvents: 'auto' })
            .to(coverRef.current, {
                scaleX,
                scaleY,
                x,
                y,
                duration: 0.7,
                ease: 'power3.inOut',
            })
            .to(modalRef.current, { opacity: 1, duration: 0.3 }, '-=0.3');
    };

    const closeCard = () => {
        document.body.style.overflow = '';
        if (!coverRef.current || !modalRef.current) return;

        gsap.timeline({
            onComplete: () => {
                modalRef.current!.style.pointerEvents = 'none';
                setSelectedProject(null);
                gsap.set(coverRef.current, { width: 0, height: 0 });
            },
        })
            .to(modalRef.current, { opacity: 0, duration: 0.25 })
            .to(
                coverRef.current,
                { scaleX: 1, scaleY: 1, x: 0, y: 0, duration: 0.6, ease: 'power3.inOut' },
                '<'
            );
    };

    return (
        <>
            <Header
                textPage='Projects'
                textHead='Projects That Digitize and Automate Business Workflows.'
            />

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
            <section className="project-cards">
                {projectsList.map((project, i) => (
                    <div
                        key={i}
                        className="card"
                        // style={{ backgroundColor: project.color }}
                        // style={{
                        //     backgroundColor: project.color
                        //         ? `${project.color}66` // hex with alpha (~80%)
                        //         : 'rgba(0,0,0,0.85)',
                        // }}
                        // ff → 100%

                        // cc → 80%

                        // 99 → 60%

                        // 66 → 40%
                        style={{ '--card-color': project.color } as React.CSSProperties}

                        onClick={() => openCard(project)}
                    >
                        <div className="card-media">
                            <img src={project.image} />
                        </div>

                        <div className="card-body">
                            <h2>{project.title}</h2>
                            <p>{project.category}</p>
                        </div>
                    </div>
                ))}

                <div ref={coverRef} className="card-cover" />

                <div ref={modalRef} className="card-modal">
                    <button className="close" onClick={closeCard}>✕</button>

                    <div ref={modalScrollRef} className="card-modal-scroll" onWheel={(e) => e.stopPropagation()}>
                        <div className="card-modal-content">
                            {selectedProject && (
                                <div>
                                    {/* <img src={selectedProject.image} />
                                <article>
                                    <h1>{selectedProject.title}</h1>
                                    {selectedProject.outcome.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </article> */}


                                    <div className="blog-container">

                                        <div className="blog-header">
                                            <div
                                                className="blog-cover"
                                                style={{ backgroundImage: `url(${selectedProject.image})` }}
                                            >

                                                <div className="blog-author">
                                                    <h3>{selectedProject.category}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-body">
                                            <div className="blog-title">
                                                <h1><a href="#">{selectedProject.title}</a></h1>
                                            </div>
                                            <div className="blog-tags">
                                                <ul>
                                                    {selectedProject.technologies.map((tech, index) => (

                                                        <li key={index}>
                                                            <a href="#">{tech}</a>
                                                        </li>

                                                    ))}
                                                </ul>
                                            </div>
                                            <br />
                                            <div className="blog-summary">
                                                <div>
                                                    <h3 className='sec-title'>Problem:</h3>
                                                    {selectedProject.problem}
                                                </div>
                                                <br />
                                                <div>
                                                    <h3 className='sec-title'>Solution:</h3>
                                                    {selectedProject.solution}
                                                </div>
                                                <br />
                                                <h3 className='sec-title'>Outcome:</h3>
                                                <ul>
                                                    {selectedProject.outcome.map((outs, ind) => (
                                                        <li key={ind}>{outs}</li>
                                                    ))}
                                                </ul>
                                                <br />
                                                {/* <h3 className='sec-title'>Resources:</h3>
                                            {selectedProject.videos ? (
                                                <>
                                                    {selectedProject.videos?.map((vid, indx) => (

                                                        <iframe
                                                            key={indx}
                                                            src={vid}
                                                            // className="absolute top-0 left-0 w-full h-full"
                                                            frameBorder="0"
                                                            allowFullScreen
                                                            title="Embedded post"
                                                        ></iframe>
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    {
                                                        selectedProject.imgs?.map((img, id) => (
                                                            <Image
                                                                key={id}
                                                                src={img}
                                                                alt="projects images"
                                                            />
                                                        ))
                                                    }
                                                </>
                                            )} */}


                                                <h3 className='sec-title'>Resources:</h3>

                                                <div className="media-grid">
                                                    {selectedProject.videos?.map((vid, i) => (
                                                        <div className="media-item" key={i}>
                                                            <iframe
                                                                src={vid}
                                                                frameBorder="0"
                                                                allowFullScreen
                                                                title={`video-${i}`}
                                                            />
                                                        </div>
                                                    ))}

                                                    {selectedProject.imgs?.map((img, i) => (
                                                        <div className="media-item" key={i}>
                                                            <Image
                                                                src={img}
                                                                alt="project image"
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <br /><br />
                                                {/* <iframe
                        src={selectedProject?.link[0] || ""}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded post"
                    ></iframe> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
