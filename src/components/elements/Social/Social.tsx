'use client';

import { Download } from 'lucide-react';
import './social.scss';

type Social = {
    name: string;
    className: string;
    path: string;
    link: string;
};

const socials: Social[] = [
    {
        name: 'LinkedIn',
        className: 'linkedin',
        link: 'https://www.linkedin.com/in/khaled-al-kharashi-10653b247/',
        path: 'M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.1 20.5H3.6V9h3.5v11.5zM5.35 7.5a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zM20.5 20.5h-3.5v-5.8c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.22 1.5-2.22 3.05v5.9H9.35V9h3.36v1.57h.05c.47-.88 1.62-1.82 3.34-1.82 3.57 0 4.23 2.35 4.23 5.4v6.35z',
    },
    {
        name: 'GitHub',
        className: 'github',
        link: 'https://github.com/KhaledAhmedA',
        path: 'M12 0a12 12 0 0 0-3.8 23.4c.6.1.82-.25.82-.56v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .31.22.67.83.56A12 12 0 0 0 12 0z',
    },
    {
        name: 'Gmail',
        className: 'gmail',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=khaled.ahmed.alkharashi@gmail.com&su=could%20tell%20name%20please&body=Please%20Feel%20Free%20to%20write%20your%20thoughts%20...',
        path: 'M2 4h20v16H2V4zm10 7.2L3.6 6.2v10.3h4V9.7l4.4 3.1 4.4-3.1v6.8h4V6.2L12 11.2z',
    },
    {
        name: 'WhatsApp',
        className: 'whatsapp',
        link: 'https://wa.me/+201025440707?text=Hello%20Khaled',
        path: 'M12 0a12 12 0 0 0-10.6 17.6L0 24l6.6-1.3A12 12 0 1 0 12 0zm6.2 17.1c-.26.74-1.5 1.36-2.1 1.45-.57.1-1.3.14-4.1-1.02-3.4-1.4-5.6-4.8-5.76-5.05-.16-.26-1.38-1.83-1.38-3.5s.96-2.5 1.3-2.85c.34-.34.78-.43 1.04-.43h.75c.24 0 .56-.09.87.66.31.74 1.04 2.56 1.13 2.74.1.18.16.4.04.64-.12.25-.18.4-.36.61-.18.21-.38.47-.54.63-.18.18-.36.38-.16.74.2.36.9 1.48 1.94 2.4 1.33 1.18 2.45 1.55 2.8 1.73.35.18.56.15.77-.09.22-.25.9-1.04 1.14-1.4.24-.36.48-.3.8-.18.32.12 2.02 1 2.36 1.18.34.18.57.27.65.42.08.15.08.86-.18 1.6z',
    },
];

export default function Social() {
    return (
        <>
            <div className='cv-buttons'
            // className='flex flex-row items-center justify-center text-center'
            >
                {/* <div className="shiny-button"> */}

                <a href="/resumes/خالد_الخراشى_مطور_ويب.pdf"
                    download="خالد_الخراشى_مطور_ويب.pdf"
                    className="shiny-button"
                    target="_blank">
                    سى فى عربى <Download size={18} />
                </a>
                {/* </div> */}
                {/* <div className="shiny-button"> */}

                <a href="/resumes/khaled_alkharashi_web_developer.pdf"
                    download="khaled_alkharashi_web_developer.pdf"
                    className="shiny-button"
                    target="_blank">
                    English CV <Download size={18} />
                </a>
                {/* </div> */}
            </div>
            <div className="social-icons-root">
                <br />

                <ul className="wrapper">
                    {socials.map(({ name, className, link, path }) => (
                        <li key={name} className={`icon ${className}`}>
                            <span className="tooltip">{name}</span>
                            <a href={`${link}`} target='_blank'>
                                <svg
                                    className="social-icon-svg"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d={path} />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
