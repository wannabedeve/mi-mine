// 'use client';
// import React, { useEffect, useRef, useState } from "react";
// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import {
//     motion,
//     useInView,
//     useMotionTemplate,
//     useScroll,
//     useTransform,
// } from "framer-motion";
// import { works } from "./Works";
// import { useRouter } from "next/navigation";
// // import { useNavigate } from "react-router-dom";
// import './style.css'

// type Titem = {
//     head: string;
//     title: string;
//     image: string;
//     description: string;
//     techStacks: string[];
//     live: string;
// };

// type TWorkCard = {
//     index: number;
//     setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
//     setHead: React.Dispatch<React.SetStateAction<string>>;

//     item: Titem;
// };

// const WorkCard = ({ index, setActiveIndex, setHead, item }: TWorkCard) => {
//     // const navigate = useNavigate();
//     const router = useRouter();

//     const handleClick = () => {
//         // You can use query params or local storage to pass data between routes
//         router.push(`/work/${item.title}`);
//     };
//     const ref = useRef(null);
//     const isInView = useInView(ref, {
//         margin: "-50% 0px -50% 0px",
//     });
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start 50%", "end end"],
//     });

//     const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
//     const scale = useMotionTemplate`${scaleValue}`;

//     useEffect(() => {
//         setActiveIndex(index);
//         setHead(item.head);
//     }, [isInView]);

//     return (
//         <motion.div
//             // onClick={() => navigate(`/work/${item.title}`, { state: { work: item } })}
//             onClick={handleClick}
//             style={{ scale: scale }}
//             ref={ref}
//             className="relative z-[8] w-full rounded-md bg-card-bg p-6 flex flex-col gap-3 cursor-pointer"
//         >
//             <div className="w-full rounded-md overflow-hidden z-[7] relative">
//                 <img src={item.image} alt="" className="w-full h-full object-cover " />
//             </div>
//             <div className="flex flex-col gap-3">
//                 <h2 className="text-2xl font-semibold tracking-wide">{item.title}</h2>
//                 <p className="text-xl">{item.description}</p>

//                 <div className="flex gap-2 flex-wrap">
//                     {/* <span className="chip text">React</span>
//           <span className="chip text">typescript</span>
//           <span className="chip text">redux</span> */}
//                     {item.techStacks.map((itm) => (
//                         <span key={itm} className="chip">
//                             {itm}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// const Work = () => {
//     const [activeIndex, setActiveIndex] = useState(1);
//     const [head, setHead] = useState(1);

//     // motion
//     return (
//         <section id="work" className="py-10 mt-[15%]" data-color="dark">
//             <div className="text1">

//                 <SectionTitle title="Work" progressBgClass="bg-primary"></SectionTitle>
//                 <SectionTitle title="Experience" progressBgClass="bg-primary"></SectionTitle>
//             </div>
//             <Container>

//                 <div className="flex md:flex-row flex-col relative">
//                     <div className="md:w-1/2  h-max sticky md:top-1/4 top-28 w-full py-3 md:py-0  mb-10 md:mb-0md:bg-transparent z-10 ">
//                         <h1 className="text-[2vw] leading-[15vw] opacity-40">
//                             <span className="inline-block">-</span>
//                             <span className="inline-block">{head}</span>
//                             <span className="inline-block">.</span>
//                         </h1>
//                     </div>
//                     <div className="flex flex-col gap-8 w-full relative z-[9] ">
//                         {works.map((itm, i) => {
//                             return (
//                                 <WorkCard
//                                     key={i}
//                                     index={i + 1}
//                                     setActiveIndex={setActiveIndex}
//                                     item={itm as any}
//                                     setHead={setHead as any}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default Work;




















import Image from 'next/image';
import React from 'react';
import { Timeline } from './timeline';
import Link from 'next/link';


export default function Work() {
    const data = [
        {
            title: 'Tax Consultancy',
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal exp-work md:text-sm">
                        <span className="text-slate-800 text-xl font-semibold">
                            Full Stack Developer
                        </span>
                        <br />
                        <br />
                        Jan 2024 - Present. Check it out{' '}
                        <Link href={'/projects'} target='_blank' className="text-slate-800 hover:underline font-extrabold no-underline">
                            Click here to visit
                        </Link>
                        <br />
                        United Arab Emirates - Dubai
                    </p>



                    <Image
                        src="/assets/projects/deve.jpg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-28 w-full rounded-lg object-cover  md:h-44 lg:h-60"
                    // shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]
                    />

                    <br />

                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Working on Services Digitalization by building apps and web based services.
                        <br />
                        Developed responsive, SEO-optimized web applications.
                        <br />
                        Built secure RESTful APIs and integrated MongoDB or MySQL for scalable database management.
                        <br />
                        Implemented authentication and role-based access control with JWT and OAuth.
                        <br />
                        Integrated third-party services "e.g., Stripe for payments, SendGrid for emails".
                        <br />
                        Deployed projects, managing environment variables and production readiness.
                    </p>


                    <br />
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Projects:
                        <br />
                        <br />
                        - Proposal System
                        <br />
                        <br />
                        - Websites Designs
                        <br />
                        <br />
                        - Full stack web applications
                    </p>
                </div>
            ),
        },
        {
            title: 'Egypt Telecom, Xceed',
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal exp-work md:text-sm">
                        <span className="text-slate-800 text-xl font-semibold">
                            Network Support Engineer
                        </span>
                        <br />
                        <br />
                        2022 - 2024. Check it out{' '}
                        <Link href={'/projects'} target='_blank' className="text-slate-800 hover:underline font-extrabold no-underline">
                            Click here to visit
                        </Link>
                        <br />
                        Egypt, Alexandria, Smart village
                    </p>
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Certified from Xceed Company - Information System Provider
                        with Egypt Telecom ( WE ) Internet Service Provider.
                    </p>

                    <Image
                        src="/assets/projects/voip3.jpg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />

                    <br />
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Network Administration:

                        <br />
                        - Data/Network Connection - Voice/Landlines,
                        <br />
                        - Indicate physical and logical faults and troubleshooting.
                        <br />
                        - Direct/support Technicians to solving depends on faults indication.
                        <br />
                        - Dealing with Network Devices and configuration, and Terminals Connections.
                        <br />
                        <br />
                        VOIP System:
                        <br />
                        Worked with SmartSoft Solutions to configure and implement
                        <br />
                        - Call Center System, Internal Private System (VPN).
                        <br />
                        - SIP Server/Protocol
                        <br />
                        - Configure and Implement VOIP Based on Linux OS [ End To End System ],
                        <br />
                        - Implement Terminals - IP Terminals - IP Phones.
                        <br />
                        - Internal Integrate with IP Phones/Terminals, Yeaster S/P-Series, Gateway.
                        <br />
                        - And with External System [ Gateway - Trunks - API Provider ],
                        <br />
                        - Handling inbound and outbound connection.
                        <br />
                        - Network/Telecom protocols: SIP Trunking, TCP/IP, DNS, DHCP, NAT, VLAN, QoS.
                        <br />
                        - Low Level Programming with ANSI C / Bash Scripting. - Linux Administration.
                        <br />
                        - VoIP Technologies: Asterisk, Traditional PBX, Unified Communications, FreePBX, Avaya, 3CX.


                    </p>
                </div>
            ),
        },
        {
            title: 'ITI, IoT',
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal exp-work md:text-sm">
                        <span className="text-slate-800 text-xl font-semibold">
                            IoT Apps Developer / Web Developer
                        </span>
                        <br />
                        <br />
                        2020 - 2022. Check it out{' '}
                        <Link href={'/projects'} target='_blank' className="text-slate-800 hover:underline font-extrabold no-underline">
                            Click here to visit
                        </Link>
                        <br />
                        Egypt, Mansoura Univirsity
                    </p>
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Build, Automate Internet Of Things Applications By Enablement Platforms,
                        and IoT Kits & Connection/Technologies.
                        <br />
                        and Full stack web development ( MERN stack ).
                    </p>

                    <Image
                        src="/assets/projects/iota.jpg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />

                    <br />
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        IoT Enablement Platforms:
                        <br />
                        Industial Google Cloud IoT Core:
                        <br />
                        - Pub/Sub Sessions, Storage Classes, Dataflow, Pipelines, BigQuery, Dataprep, Data Studio.
                        <br />
                        Thingsboard/Master Of Things/ThingWorx:
                        <br />
                        - MQTT Connection protocol, Telemetry data - Custom Events - Sensor implementation - Extenrnal services implementation.
                        <br />
                        - Familiarity with AWS IoT, Azure IoT hub.

                        <br />
                        <br />
                        IoT Kits, and Devices:
                        <br />
                        - LoRaWan, SigFox, Senseit, Sensors (Proximity, Temperature, Signal Strength, Acceleration),
                        <br />
                        <br />
                        Embedded Systems Implementation:
                        <br />
                        - [ Sensors / Arduino / Protues / PIC16F87XA Micro-Controller / C Ansi/MikroC ],
                        <br />
                        - Applications: [ Switching – LCD Screen – KeyPad – Segment – Sensors - Motors ].
                        <br />
                        <br />
                        Connection: ( power consumtion considration )
                        <br />
                        - NarrowBand IoT - Bluetooth low energy (BLE) - Zigbee - LoRaWAN.
                        <br />
                        <br />
                        Programming Languages:
                        <br />
                        - C Language standard compiler ANSI - MikroC for Embadded system.
                        <br />
                        -Python for backend ( event handling - load balancing ) - with mysql database.
                        <br />
                        - Javascrtipt for client interface (broswer UI / mobile interface).

                    </p>
                </div>
            ),
        },

        {
            title: 'Al-Araby Group',
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal exp-work md:text-sm">
                        <span className="text-slate-800 text-xl font-semibold">
                            Electronics Technician
                        </span>
                        <br />
                        <br />
                        2016 - 2020. Check it out{' '}
                        <Link href={'/projects'} target='_blank' className="text-slate-800 hover:underline font-extrabold no-underline">
                            Click here to visit
                        </Link>
                        <br />
                        Alexandria
                    </p>
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Worked with Al-Araby - Authorized Centers (DC Devices Maintainance).

                    </p>

                    <Image
                        src="/assets/projects/elec.jpg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />

                    <br />
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        - Dealing with Analog/Digital Circuits AC/DC, tracking/indicate faults and Maintenance.

                        <br />
                        <br />
                        - Measurement and Soldering Electronics Components Pinned / SMD.

                        <br />
                        <br />
                        - Switch mode power supply SMPS - LCD/LED Screens and CRT TV, Signal reciever, Protection.

                        <br />
                        <br />
                        - Sound devices Repairing PC and Laptop in Hardware and Software.


                    </p>
                </div>
            ),
        },


        {
            title: 'Education & Training',
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal exp-work md:text-sm">
                        <span className="text-slate-800 text-xl font-semibold">
                            Education & Training Specialist
                        </span>
                        <br />
                        <br />
                        2012 - 2016.
                        <br />
                        <br />
                        Egypt

                        <br />

                    </p>
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">
                        Government Schools & Training Institutions
                    </p>

                    <Image
                        src="/assets/projects/teatch.jpg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />

                    <br />
                    <p className="mb-8 text-sm font-normal exp-work md:text-[1rem]">

                        - Delivered lessons and managed classrooms as part of teaching assignments in government schools.
                        <br />
                        <br />

                        - Gained hands-on experience in education management, including student evaluation, curriculum support, and classroom administration.
                        <br />
                        <br />

                        - Conducted training sessions and workshops in both academic and practical contexts.
                        <br />
                        <br />

                        - Developed strong communication, leadership, and organizational skills while working with diverse groups of students and staff.
                        <br />
                        <br />
                        - Applied principles from sociology, education, and management to improve learning outcomes and teamwork.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full" id="prev-work">
            <Timeline data={data} />
        </div>
    );
}