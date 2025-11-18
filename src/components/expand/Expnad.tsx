// "use client";

// import React, { useState } from "react";
// // import { FaFolderOpen, FaTimes } from "react-icons/fa";
// import "./style.scss";

// interface CardProps {
//     id: number;
//     isActive: boolean;
//     isExpanded: boolean;
//     onExpand: (id: number) => void;
//     onCollapse: () => void;
// }

// const Card: React.FC<CardProps> = ({
//     id,
//     isActive,
//     isExpanded,
//     onExpand,
//     onCollapse,
// }) => {
//     return (
//         <div
//             className={`cardc 
//                 ${isExpanded
//                     ? "is-expanded"
//                     : "is-collapsed"
//                 } 
//                 `}
//         >
//             {/* ++ ${!isActive ? "is-inactive" : ""} */}
//             <div
//                 className="cardc__inner js-expander"
//                 onClick={() => onExpand(id)}
//             >
//                 <span>Cardc {id + 1}</span>
//                 {/* <FaFolderOpen /> */}
//                 up
//             </div>

//             {isExpanded && (
//                 <div className="cardc__expander">
//                     <button
//                         className="js-collapser"
//                         onClick={onCollapse}
//                     >down</button>
//                     <p>Expander content for Cardc {id + 1}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// const ExpandingCardGrid: React.FC = () => {
//     const [expandedCard, setExpandedCard] = useState<number | null>(null);

//     const handleExpand = (id: number) => {
//         if (expandedCard === id) {
//             // collapse if same card is clicked again
//             setExpandedCard(null);
//         } else {
//             setExpandedCard(id);
//         }
//     };

//     const handleCollapse = () => {
//         setExpandedCard(null);
//     };

//     const cards = Array.from({ length: 3 }, (_, i) => i);

//     return (
//         <div className="wrapper">
//             <div className="header">
//                 <h1 className="header__title">Expanding Card Grid</h1>
//                 <h2 className="header__subtitle">with Flexbox</h2>
//             </div>

//             <div className="cardcs">
//                 {cards.map((id) => (
//                     <Card
//                         key={id}
//                         id={id}
//                         isActive={expandedCard === null || expandedCard === id}
//                         isExpanded={expandedCard === id}
//                         onExpand={handleExpand}
//                         onCollapse={handleCollapse}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ExpandingCardGrid;





"use client";

import React, { useState } from "react";
import "./style.scss";
import { Check, X } from "lucide-react";
import AstroDivider from "../Divider";

interface CardProps {
    id: number;
    title: string;
    content: React.ReactNode;
    isActive: boolean;
    isExpanded: boolean;
    onExpand: (id: number) => void;
    onCollapse: () => void;
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    content,
    isActive,
    isExpanded,
    onExpand,
    onCollapse,
}) => {
    return (
        <div
            className={`cardc ${isExpanded ? "is-expanded" : "is-collapsed"
                } `}
        >
            {/* ${!isActive ? "is-inactive" : ""} */}
            <div
                className="cardc__inner js-expander"
                onClick={() => onExpand(id)}
            >
                <span>{title}</span>
            </div>

            {isExpanded && (
                <div className="cardc__expander">

                    <div className="cardc__content">{content}</div>
                    <button
                        className="js-collapser cursor-pointer m-auto p-2 mt-8 bg-green-500 text-white rounded-full"
                        onClick={onCollapse}
                    >
                        <X size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

const ExpandingCardGrid: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const handleExpand = (id: number) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const handleCollapse = () => {
        setExpandedCard(null);
    };

    // 👇 Define your cards with different content here
    const cards = [
        {
            id: 0,
            title: "Web Development",
            content: (
                <div className="text-center">
                    {/* ⚡  */}
                    {/* <span className="text-green-600 text-2xl font-bold">✔</span> */}


                    +4 Years  With a solid foundation in modern web technologies and practical experience across both frontend and backend frameworks, I’m capable of delivering responsive, scalable, and maintainable web applications from scratch or within existing codebases.
                    <br />
                    <AstroDivider variant="default" />

                    {/* <br /> */}
                    <Check className="text-green-600 inline" /> {" "} Basic Web Technologies
                    <br />
                    HTML5, CSS3, JavaScript (ES6+), TypeScript, Ajax, JSON, XML
                    <br />
                    <br />

                    <Check className="text-green-600 inline" /> {" "} .NET Core (C#) – APIs, MVC, MSSQL, EntityFramework, Azure, IIS
                    <br />
                    <br />

                    <Check className="text-green-600 inline" /> {" "} Javascript - Typescript Development
                    <br />
                    In Frontend: React.js, Next.js, Angular.js ( SSR, CSR ) ( Redux, Ngrx )
                    <br />
                    In Backend: Node.js ( Nest.js / Express.js ) for REST APIs
                    <br />
                    <br />


                    <Check className="text-green-600 inline" /> {" "}
                    Design Patterns & Principles
                    <br />
                    SOLID principles, DRY
                    <br />
                    MVC, Singleton, Factory, Repository patterns, Dependency Injection
                    <br />
                    <br />


                    <Check className="text-yellow-400 inline" /> {" "} Basics of other technologies
                    <br />
                    JAVA SE, JAVA EE, Servlet, JSP, JDBC, EJB, Maven, Hibernate, Spring, Spring Boot, Tomcat
                    <br />
                    PHP: Laravel, CodeIgniter, WordPress
                    <br />
                    Python: For general purpose, Django For web
                    <br />
                    <br />




                    <Check className="text-green-600 inline" /> {" "} Design & Styling
                    <br />
                    TailwindCSS, SCSS, Bootstrap, JQuery
                    <br />
                    Responsive design, accessibility, performance optimization, SEO
                    <br />
                    <br />
                    {/* 
                    <br />
                    REST API design & integration
                    <br />
                    Authentication & Authorization (JWT, RBAC, OAuth)
                    <br />
                    <br /> */}

                    <Check className="text-green-600 inline" /> {" "}
                    Databases: Design & Data Management
                    <br />
                    MSSQL, MySQL, Postgressql, MongoDB
                    <br />
                    ERD, DDL, DML, DCL, Data modeling, basic indexing, CRUD operations
                    <br />
                    <br />


                    <Check className="text-green-600 inline" /> {" "} Dev Tools & Practices
                    <br />
                    Git & GitHub (version control, collaboration)
                    <br />
                    Linux Administration, Virtualization (basics)
                    <br />
                    Apache web server, Nginx, SSH, FTP
                    <br />
                    Docker (basics, containerized apps)
                    <br />
                    CI/CD workflows (basic experience)
                    <br />
                    Agile methodologies ( Scrum , Kanban )
                    <br />
                    Testing (Jest, xUnit)
                    <br />
                    Postman, Visual Studio, VS Code and other IDEs
                    <br />
                    Problem-Solving & Debugging
                    <br />
                    Analytical thinking, systematic debugging, performance tuning
                    <br />
                    API Documentation ( Swagger, OpenAPI )
                    <br />
                    {/* 
                    <div className="space-y-12 p-8">
                        <AstroDivider variant="default" />
                        <AstroDivider variant="purple" />
                        <AstroDivider variant="neonpurple" />
                    </div> */}

                </div>
            ),
        },
        {
            id: 1,
            title: "IoT & Embedded",
            content: (


                <div className="text-center">
                    {/* ⚡  */}
                    {/* <span className="text-green-600 text-2xl font-bold">✔</span> */}

                    +2 Years of Combining my knowledge in embedded systems with full-stack development, I create end-to-end IoT solutions that interact seamlessly between devices and cloud interfaces.

                    <br />
                    <AstroDivider variant="default" />


                    <Check className="text-green-600 inline" /> {" "}
                    Proficient in C/EmeddedC (MikroC) Microcontrollers for low-level programming of microcontrollers
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    (PIC16F87XA, Arduino, ESP32, sensors and actuators Integration with I2C, SPI, UART protocols)
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Hands-on experience with development bread boards & Proteus
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Cloud & Web Connectivity: IoT data pipelines to web apps (Node.js, .NET Core)
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Hardware–Software Integration: Connecting IoT devices with APIs and web dashboards
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Wireless Communication Technologies: Knowledge of Wi-Fi, Bluetooth/BLE, and LoRa, LoRaWan for device connectivity.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    IoT Enablement Platforms: Google Cloud Core industrial IoT, AWS IoT, and other cloud platforms for device management, data storage, and analytics.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    IoT Security: Awareness of encryption, asymmetric cryptography (Keys Pair), device authentication, and safe data transmission practices.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Project Experience: Developed several IoT prototypes as part of the Egyptian Ministry of Communications & Information Technology scholarship (ITI) program, combining software, hardware, and networking.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Scripting: Bash, low-level coding for device management
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Automation & Monitoring: Real-time systems with device data visualization
                    <br />
                    <br />

                    {/* 
                    <div className="space-y-12 p-8">
                        <AstroDivider variant="default" />
                        <AstroDivider variant="purple" />
                        <AstroDivider variant="neonpurple" />
                    </div> */}

                </div>
            ),
        },
        {
            id: 2,
            title: "Network & VoiP",
            content: (


                <div className="text-center">
                    {/* ⚡  */}
                    {/* <span className="text-green-600 text-2xl font-bold">✔</span> */}

                    +2 Years With hands-on experience in both traditional networking and VoIP systems, I can support and troubleshoot connectivity issues across physical networks and infrastructure and real-time communication platforms, ensuring reliable and efficient system performance.

                    <br />
                    <AstroDivider variant="default" />


                    <Check className="text-green-600 inline" /> {" "}
                    Network Technical Support Engineer (ISP-level) logical/physical, VOIP/Unified Communications System implementation
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Protocols & Concepts: LAN/WAN, TCP/IP, DHCP, DNS, NAT, Routing and Switching, VLANs, VPNs, VoIP
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    VoIP Support: SIP configuration, softphone setup, basic Asterisk/Traditional PBX, Landlines knowledge, QoS troubleshooting
                    <br />

                </div>
            ),
        },
        {
            id: 3,
            title: "Electronics",
            content: (


                <div className="text-center">
                    {/* ⚡  */}
                    {/* <span className="text-green-600 text-2xl font-bold">✔</span> */}

                    +4 Years of hands-on background in electronics enables me to diagnose, repair, and build real-world systems, bridging the gap between hardware reliability and software control.
                    <br />
                    Strong foundation in electronics principles and practical experience with circuit design, microcontrollers, and embedded systems, enabling me to develop and troubleshoot hardware components and integrate them with software solutions.

                    <br />
                    <AstroDivider variant="default" />


                    <Check className="text-green-600 inline" /> {" "}
                    Soldering & PCB Troubleshooting: Proficient in soldering components, diagnosing PCB issues, and performing repairs on electronic devices.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Component-Level Repair & Diagnostics: Skilled in identifying and replacing faulty components on PCBs, ensuring devices are restored to full functionality.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Analog/Digital Circuits and Components: Understanding of basic electronic components (resistors, capacitors, diodes, transistors) and their roles in circuit design.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Power Supply & Circuit Testing: Experience in testing and repairing power supply circuits, ensuring stable voltage and current for electronic devices.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Basic Schematic Reading: Ability to read and interpret electronic schematics, aiding in troubleshooting and repair processes.
                    <br />

                </div>
            ),
        },

        {
            id: 4,
            title: "Soft & Education",
            content: (


                <div className="text-center">
                    {/* ⚡  */}
                    {/* <span className="text-green-600 text-2xl font-bold">✔</span> */}


                    “Full-Stack Developer with a Background in Education & Psychology | Passionate about Building Human-Centered Learning Technologies”
                    <br />
                    <AstroDivider variant="default" />


                    <Check className="text-green-600 inline" /> {" "}
                    B.A. in Sociology – Developed strong analytical and research skills, with a focus on human behavior, systems, and organizational dynamics.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Postgraduate Diploma in Education – Gained knowledge in management, teaching strategies, and communication, enhancing leadership and adaptability.                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Theoretical & Strategic Thinking – Applying insights from sociology, management, and education to problem-solving and team collaboration.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Communication & Mentorship – Ability to explain complex concepts clearly and support knowledge-sharing within teams.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Adaptability: Comfortable transitioning between different technologies, from embedded systems to web platforms and networking support.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Continuous Learning: Actively expanding my skill set in microservices, DevOps, and cloud computing through self-study and projects.
                    <br />
                    <br />
                    <Check className="text-green-600 inline" /> {" "}
                    Cross-domain Thinking: Ability to integrate software, hardware, and network knowledge to create complete, real-world systems.

                    <br />

                </div>
            ),
        },
    ];

    return (
        <div className="wrapper">
            <div className="header">
                <h1 className="header__title font-mono">
                    Software Development, VoiP, Electronics, and IoT expertise to deliver complete and scalable solutions.
                </h1>
                <br />
                <h2 className="header__subtitle">
                    Here are the technologies I work with:
                </h2>
                <br />

            </div>

            <div className="cardcs">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        isActive={expandedCard === null || expandedCard === card.id}
                        isExpanded={expandedCard === card.id}
                        onExpand={handleExpand}
                        onCollapse={handleCollapse}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExpandingCardGrid;

