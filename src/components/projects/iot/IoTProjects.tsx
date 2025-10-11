// data/projects.ts

import { Project } from "../types";

export const iotProjects: Project[] = [
    {
        id: "track",
        title: "IoT Tracking Locations",
        description: <>

            "Real-time multi-location tracking and event-driven alerts powered by IoT sensor data."
            <br />
            with monitor dashbard and locations history.
            <br />
            <br />

            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Real-time monitoring of multiple sensor locations on a live map.</li>
                <li>Consolidation of forwarded payloads from distributed sensors.</li>
                <li>GeoFencing calculations to determine proximity within defined meters.</li>
                <li>Conditional event handling: send automated emails and system alerts based on location triggers.</li>
                <li>Historical location tracking with timestamped records.</li>
                <li>Alert system based on current location status and event conditions.</li>
            </ul>
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>
                    <br />
                    IoT Enablement Platform, Frontend Visualization, Google Maps API, Backend Processing "  Nodejs / Python ",
                    Communication Protocols: MQTT, HTTP.
                    <br />
                    Alert System: SMTP for email notifications, Webhooks for real-time alerts.
                </li>
            </ul>
        </>,

        imageUrl: "/assets/projects/iot/11.jpg",
        link: ["/assets/projects/iot/location2.png"],
    },


    {
        id: "parking",
        title: "IoT Smart Parking System",
        description: <>

            This project implements a Smart Parking Solution using proximity sensors to monitor parking spots
            in real time. Each sensor detects whether a parking space is occupied or available and sends the
            status data to an IoT Enablement Platform.

            <br />
            The system dynamically updates the parking map, displaying the current availability of all spots,
            helping users quickly find free spaces and enabling efficient space management.
            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Real-time detection of parking spot availability using proximity sensors.</li>
                <li>Dynamic status updates " empty/occupied " on a live parking dashboard.</li>
                <li>Centralized monitoring through an IoT Enablement Platform.</li>
                <li>Scalable system architecture supporting multiple parking lots.</li>
                <li>Potential integration with mobile applications for user notifications " optional extension ".</li>
                <li>Search & Filteration " Search by: Price range, Brand, Category ".</li>
                <li>Shopping Carts " Calculate totals, add/store favorites, order status and details ".</li>
                <li>Review system " by Stars and comments, and calculate average sastification ".</li>
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>Proximity Sensor</li>
                <li>IoT Enablement Platform</li>
                <li>Frontend Visualization</li>
                <li>Backend Processing, Auth " Nodejs / Python "</li>
                <li>Data Transmission: MQTT / HTTP</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/iot/12.jpg",
        link: ["/assets/projects/iot/parking.png"],
    },


    {
        id: "light",
        title: "IoT Smart Lighting System",
        description: <>
            <br />
            Smart Lighting with ligh sensor that provide lighting system depends on current light status.
            <br />
            This project builds an intelligent lighting control system that uses a light sensor
            to automatically adjust lighting based on the current ambient light conditions.
            When the surrounding light falls below or rises above a defined threshold,
            the system responds by turning lights on or off accordingly.
            This automation helps in saving energy and improving efficiency, making it ideal for smart homes,
            offices, and public spaces.

            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>

            <br />

            <ul>
                <li>
                    Sensors: Light-dependent resistor (LDR) or digital light sensors " e.g., BH1750 ".</li>
                <li>Microcontroller/Device: e.g., Arduino, ESP32, Raspberry Pi.</li>
                <li>IoT Enablement Platform, Communication: MQTT / HTTP.</li>
                <li>Dashboard: Web interface for manual override and monitoring.</li>
            </ul>
            <br />

        </>,

        imageUrl: "/assets/projects/iot/13.jpg",
        link: ["/assets/projects/iot/lighting.png"],
    },


    {
        id: "bag",
        title: "IoT Smart Bag",
        description: <>

            This project introduces a Smart Bag solution that monitors both the location and status " open or closed " of a bag in real time. A light sensor detects changes in the bag’s state (opened/closed) and transmits the status along with location data through an IoT Enablement Platform. The system not only provides live tracking but also maintains a history of events with timestamps, enhancing security and traceability for personal belongings or sensitive cargo.
            <br />
            "Smart tracking and security for your bag, monitoring location and open/close status in real time."
            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>

                <li>Real-time location tracking of the bag using sensor payloads.</li>
                <li>Light sensor-based detection of bag open/close status.</li>
                <li>Immediate alerts when the bag is opened.</li>
                <li>Historical log of bag status changes with timestamps.</li>
                <li>Secure centralized monitoring through an IoT Enablement Platform.</li>
                <li>Potential expansion for anti-theft alarms or notifications.</li>
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>
                    <br />
                    Sensors: Light sensor, GPS module, IoT Enablement Platform.
                </li>
                <br />
                <li>
                    Microcontroller/Device, Communication Protocol: MQTT / HTTP, Backend Processing.
                </li>
                <br />
                <li>Alert System: Email notifications or mobile push notifications</li>
                <br />
                <li> Database: SQL for event history</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/iot/bag2.png",
        link: ["/assets/projects/iot/bag.png"],
    },


    {
        id: "accelerate",
        title: "Motion Simulation",
        description: <>

            "Real-time simulation and tracking of motion using acceleration sensors and IoT connectivity."
            <br />
            This project simulates and tracks the motion and positioning of physical objects using acceleration sensors. As the object moves, the acceleration data is transmitted to an IoT Enablement Platform, where it is processed and reflected as variable position statuses. The system provides real-time insights into the object's movement behavior, enabling precise motion monitoring for applications like logistics, robotics, or asset tracking.

            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Real-time motion detection and position simulation using acceleration sensors.</li>
                <li>Dynamic status updates reflecting current motion states.</li>
                <li>Centralized visualization on an IoT Enablement Platform.</li>
                <li>Foundation for more complex systems like velocity or displacement tracking.</li>
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>Sensors: Accelerometer, IoT Enablement Platform</li>
                <li>Communication: MQTT / HTTP</li>
                <li>Backend, Frontend Dashboard.</li>
                <li>Database: SQL, NoSQL</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/iot/22.jpg",
        link: ["/assets/projects/iot/accel.png"],
    },


    {
        id: "clang",
        title: "Console System | C Language",
        description: <>


            The Library System is a console-based application developed in standard C Language using an ANSI C compiler.
            It simulates a basic library management environment where different types of users—Guests, Users,
            and Admins—can interact with the system through a structured authentication mechanism.
            The application performs CRUD operations using file I/O,
            ensuring persistent data storage without the need for a database.
            A user-friendly console-based GUI is implemented using console cursor positioning and lightbar
            menus for a more interactive experience.

            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />

            <ul>
                <li>
                    - Role-Based Authentication
                    <br />
                    Guest: Limited access for browsing.
                    <br />
                    User: Can view and borrow books.
                    <br />
                    Admin: Full access including management functions.
                </li>
                <li>- Input Validation
                    <br />
                    Ensures secure and proper data input for all operations.</li>
                <li>- CRUD Operations
                    <br />
                    Create, Read, Update, Delete operations on users and books using file-based storage.
                </li>
                <li>
                    - File I/O Handling
                    <br />
                    All data "users, books, transactions" stored and managed via binary/text files.
                </li>
                <li>
                    - Console GUI Enhancements
                    <br />
                    Console coordinates for structured layout.
                    <br />
                    Lightbar menu navigation for better UX in terminal.
                </li>
                <li>
                    - Modular Codebase
                    <br />
                    Separated logic for authentication, file handling, menu rendering, and main control loop.
                </li>
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>
                    Language:	C "Standard C - ANSI"
                    <br />
                    Compiler	GCC / Turbo C / ANSI C Compiler
                    <br />
                    File Handling	Standard C File I/O "fopen, fread, fwrite, etc".
                    <br />
                    Console UI	Windows Console API / Cursor manipulation "gotoxy, etc".
                    <br />
                    Operating System	Windows / DOS / Linux "Terminal-based".
                </li>

            </ul>
        </>,

        imageUrl: "/assets/projects/iot/clang.png",
        link: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187970862841532416?compact=1"],
    },
    // add more
];
