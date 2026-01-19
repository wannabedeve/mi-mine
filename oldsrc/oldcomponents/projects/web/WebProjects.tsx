// data/projects.ts

import { Project } from "../types";

export const webProjects: Project[] = [
    {
        id: "proposal",
        title: "Proposal system | MERN Stack",
        description: <>
            that allows you to create and control forms to clients to collect submissions and set response to every selection,
            with all input types and immediate response in same page and generate PDF file with entire proposal,
            <br /> <br />
            Built with React, Node.js, Express, MongoDB, Tailwind CSS, and integrated with third-party APIs for PDF generation and email notifications.
            <br />
            <br />
            <h3 className="text-3xl">Features</h3>
            <br />
            Authentication " Login, Logout, Change Password, User Profile ". <br />  <br />
            Forms " Create, Control, Edit, Delete, Data Binding, Suspension ". <br />  <br />
            Submissions " Collect Responses, Dynamic Response, PDF Dynamic Proposal " <br />  <br />
            Emails " Send Emails, Dynamic Content, Confirmation ". <br /><br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>Frontend: React.js
                    <br />
                    "Typescript, TailwindCSS, Dnd-kit, axios, radix-ui, tanstack/react-query, react-cookie, react-hook-form, zod, react-router-dom, react-to-print".</li>
                <br />
                <li>Backend: Node.js
                    <br />
                    " Express.js, Typescript, cors, jsonwebtoken, mongoose, multer, nodemailer ".</li>
                <br />
                <li>Database " MongoDB ".</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/web/1.webp",
        link: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7320279267458580481?compact=1"],
    },


    {
        id: "ecommerce",
        title: "E-Commerce | MERN Stack",
        description: <>

            Full Functionalities E-Commerce website with Admin Dashboard, Sales Analytics, and Seamless Payment Integration.
            <br />
            with Feedback system to give stars rate and comment, and integration with analytics.
            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Authentication " OAuth by Google/Github, Login, Logout, Change Password ".</li> <br />
                <li>Autherization " Admin/Admin Dashboard, User/User Profile ".</li> <br />
                <li>Products view " Create, Edit, Delete, Homepage view depends on best seller, and single product page for full details ".</li> <br />
                <li>Admin Dashboard " Sales Analytics, Users Control, All Orders with its status ".</li> <br />
                <li>Payment Methods " Availability to checkout and monitor the order status if pending or deliverd or faild ".</li> <br />
                <li>Search & Filteration " Search by: Price range, Brand, Category ".</li> <br />
                <li>Shopping Carts " Calculate totals, add/store favorites, order status and details ".</li> <br />
                <li>Review system " by Stars and comments, and calculate average sastification ".</li> <br />
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>Frontend: React.js
                    <br />
                    " Axios, TailwindCSS, Redux/Toolkit for state management".</li>
                <br />
                <li>Backend: Node.js
                    <br />
                    " Express.js, jsonwebtoken, mongoose, multer ".</li>
                <br />
                <li>Database " MongoDB ".</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/web/ecom.jpg",
        link: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7193920374693052417?compact=1"],
    },


    {
        id: "blog",
        title: "Blogging System | MERN Stack",
        description: <>
            <br />
            Full Functionality Blogging System with Admin Dashboard,
            <br />
            that allows to create and control posts/articles by category with comment system.
            <br />
            <br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Authentication " Login, Logout, Change Password, User Profile ".</li>
                <li>Autherization " Admin/Admin Dashboard, User/User Profile ".</li>
                <li>Post view & Pagination " Create, Edit, Delete, Homepage view depends on newest posts, and single post page for full details ".</li>
                <li>Admin Dashboard "  Users Control, Posts Control, View control ".</li>
                <li>Comment/Emoji Reactions System " Comment and Reply Functionality, Emoji Reactions ".</li>
                <li>Email Verification " with JWT Technique and Refresh tokens ".</li>
                <li>Responsive Design " Responsive Design via different screens ".</li>
                <li>Cloudinary Third Party " Storing website media posts media / user profile media ".</li>
            </ul>
            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Authentication " OAuth by Google/Github, Login, Logout, Change Password ".</li> <br />
                <li>Autherization " Admin/Admin Dashboard, User/User Profile ".</li> <br />
                <li>Products view " Create, Edit, Delete, Homepage view depends on best seller, and single product page for full details ".</li> <br />
                <li>Admin Dashboard " Sales Analytics, Users Control, All Orders with its status ".</li> <br />
                <li>Payment Methods " Availability to checkout and monitor the order status if pending or deliverd or faild ".</li> <br />
                <li>Search & Filteration " Search by: Price range, Brand, Category ".</li> <br />
                <li>Shopping Carts " Calculate totals, add/store favorites, order status and details ".</li> <br />
                <li>Review system " by Stars and comments, and calculate average sastification ".</li> <br />
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />

            <br />
            <ul>
                <li>Frontend: React.js
                    <br />
                    "Redux for state management, TailwindCSS, axios, react-router-dom ".</li>
                <br />
                <li>Backend: Node.js
                    <br />
                    " Express.js, cors, jsonwebtoken, mongoose, cloudinary, nodemailer ".</li>
                <br />
                <li>Database " MongoDB ".</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/web/blog.png",
        link: [
            "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187781906229280769?compact=1",
            "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187783260096131072?compact=1",
            "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187785484025155584?compact=1",
            "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187786248000856064?compact=1"
        ],
    },


    {
        id: "library",
        title: "Library System | Java, Spring Boot",
        description: <>

            that allows you to manage library of books to clients to borrow, retrieval books.
            <br />
            with all control functionality of books and users.

            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />

            <ul>
                <li>Users Control " Create, Read, Edit, Delete Users ".</li>
                <li>Books Control " Create, Read, Edit, Delete Books ".</li>
                <li>Time-Frame, Fees " time/fees calculation for latency "</li>

            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />

            <ul>
                <li>Frontend:
                    <br />
                    "HTML5, CSS3, Javascript, Bootstrap".</li>
                <br />
                <li>Backend:
                    <br />
                    " Java, Spring-Boot, Maven ".</li>
                <br />
                <li>Database " MySQL ".</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/web/lib.jpg",
        link: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7320287393176035328?compact=1"],
    },


    {
        id: "conference",
        title: "Conference Audio/Video | NextJS, WebRTC",
        description: <>

            Full Functionalities Chat Conference website,
            <br />
            that allow to Chat, Record, Schedule meeting, and monitor connection latency.
            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>Authentication " OAuth by Google/Github, Login, Logout, Change Password ".</li>
                <li>Connection Analytics " both side can monitor connection status and latency ".</li>
                <li>Meeting Dashboard " Scheduled Coming Meetings, Meetings History".</li>
                <li>Recorded Meetings " Save, Play, Delete Records ".</li>
                <li>Seamless Reaction " During the call can make reactions to other ".</li>
                <li>Responsive " Support all media screens size ".</li>
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />

            <ul>
                <li>React.js, Next.js & Clerk Auth</li>
                <li>Socket.io</li>
                <li>MongoDB Atlas</li>
            </ul>
        </>,

        imageUrl: "/assets/projects/web/conf.jpg",
        link: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7193859513685311489?compact=1"],
    },


    {
        id: "design",
        title: "3D Design | React.js",
        description: <>

            Responsive 3D Design , personal portfolio website.

            <br /><br />
            <h3 className="text-3xl">Features</h3>
            <br />
            <ul>
                <li>3D Implementation " Acceleration, Rendering, 3D Models ".</li>
                <li>3D Anomation " Animate 3D Models ".</li>
                <li>Responsive " via all screens size ".</li>
            </ul>
            <br />
            <br />
            <h3 className="text-3xl">Technology Stack</h3>
            <br />
            <ul>
                <li>React.js - Next.js </li>
                <br />
                <li>Three.js, Framer Motion, MatrialUI, Styled Components </li>

            </ul>
        </>,

        imageUrl: "/assets/projects/web/dd3d.jpg",
        link: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7188155651024445441?compact=1"],
    },
];
