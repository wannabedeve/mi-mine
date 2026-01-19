// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import './navscroll.css'
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// type Section = {
//     title: string;
//     index: string;
//     href: string;
// };

// export default function ProgressNav() {
//     const progressNavRef = useRef<HTMLDivElement | null>(null);
//     const circleRef = useRef<SVGCircleElement | null>(null);

//     const [open, setOpen] = useState(false);
//     const [percentage, setPercentage] = useState(0);
//     const [currentSection, setCurrentSection] = useState('Home');
//     const [activeIndex, setActiveIndex] = useState(0);


//     const pathname = usePathname();

//     const ROUTES = [
//         { path: '/', label: 'Home' },
//         { path: '/about', label: 'About' },
//         { path: '/skills', label: 'Skills' },
//         { path: '/experience', label: 'Experience' },
//         { path: '/projects', label: 'Projects' },
//         { path: '/blog', label: 'Blog' },
//     ];

//     const currentPath =
//         ROUTES.find(r =>
//             pathname === `${r.path}` ||
//             pathname.startsWith(`${r.path}/`)
//         )?.label ?? 'Home';



//     const SECTIONS: Section[] = [
//         { title: 'Home', index: '01', href: `/` },
//         { title: 'About', index: '02', href: `/about` },
//         { title: 'Skills', index: '03', href: `/skills` },
//         { title: 'Experience', index: '04', href: `/experience` },
//         { title: 'Projects', index: '05', href: `/projects` },
//         { title: 'Blog', index: '06', href: `/blog` },
//     ];



//     useEffect(() => {
//         setCurrentSection(currentPath);
//     }, [currentPath]);


//     const radius = 10;
//     const circumference = 2 * Math.PI * radius;

//     /* --------------------------------------------
//        Initial setup + animation
//     ---------------------------------------------*/
//     useEffect(() => {
//         if (!circleRef.current) return;

//         circleRef.current.style.strokeDasharray = `${circumference}`;
//         circleRef.current.style.strokeDashoffset = `${circumference}`;

//         gsap.from(progressNavRef.current, {
//             opacity: 0,
//             x: 50,
//             duration: 1,
//             ease: 'power3.out',
//             delay: 0.5,
//         });
//     }, [circumference]);


//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             const windowHeight = window.innerHeight;
//             const docHeight = document.documentElement.scrollHeight;

//             // scroll percentage
//             const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
//             const clamped = Math.min(100, Math.max(0, scrollPercent));
//             setPercentage(Math.round(clamped));

//             if (circleRef.current) {
//                 const offset = circumference - (clamped / 100) * circumference;
//                 circleRef.current.style.strokeDashoffset = `${offset}`;
//             }

//             // current section logic
//             const currentScrollPos = scrollTop + windowHeight / 2;
//             const sections = document.querySelectorAll<HTMLElement>('.nav-section');

//             let foundSection = currentPath; // <-- fallback to route name
//             sections.forEach((section, index) => {
//                 const top = section.offsetTop;
//                 const bottom = top + section.offsetHeight;

//                 if (currentScrollPos >= top && currentScrollPos < bottom) {
//                     foundSection = section.dataset.section || currentPath;
//                     setActiveIndex(index);
//                 }
//             });

//             setCurrentSection(foundSection);
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [circumference, currentPath]);

//     /* --------------------------------------------
//        Close dropdown on outside click
//     ---------------------------------------------*/
//     useEffect(() => {
//         const handleClickOutside = (e: MouseEvent) => {
//             if (
//                 progressNavRef.current &&
//                 !progressNavRef.current.contains(e.target as Node)
//             ) {
//                 setOpen(false);
//             }
//         };

//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);





//     return (
//         <>

//             {/* Progress Nav */}
//             <div
//                 ref={progressNavRef}
//                 className={`progress-nav ${open ? 'open' : ''} text-white`}
//                 onClick={() => setOpen((v) => !v)}
//             >
//                 <div className="progress-circle">
//                     <svg viewBox="0 0 24 24">
//                         <defs>
//                             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                                 <feGaussianBlur stdDeviation="2" result="coloredBlur" />
//                                 <feMerge>
//                                     <feMergeNode in="coloredBlur" />
//                                     <feMergeNode in="SourceGraphic" />
//                                 </feMerge>
//                             </filter>
//                         </defs>

//                         <circle
//                             className="circle-bg"
//                             cx="12"
//                             cy="12"
//                             r="8"
//                             filter="url(#glow)"
//                         />
//                         <circle
//                             ref={circleRef}
//                             className="circle-progress"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                         />
//                     </svg>
//                 </div>

//                 <div className="section-title">
//                     <span className="current-section">
//                         {currentSection}
//                     </span>
//                     <svg
//                         className="dropdown-arrow"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                     >
//                         <path d="M6 9l6 6 6-6" />
//                     </svg>
//                 </div>

//                 <div className="percentage">{percentage ? percentage : '0'}%</div>

//                 <div className="dropdown-menu">


//                     {SECTIONS.map((s, i) => (
//                         <Link
//                             key={i}
//                             href={s.href}
//                             scroll={false}
//                             className={`dropdown-item ${pathname === s.href ? 'active' : ''}`}
//                             onClick={() => setOpen(false)}
//                         >
//                             {s.title}
//                         </Link>
//                     ))}

//                 </div>
//             </div>
//         </>
//     );
// }



'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './navscroll.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Section = {
    title: string;
    index: string;
    href: string;
};

export default function ProgressNav() {
    const progressNavRef = useRef<HTMLDivElement | null>(null);
    const circleRef = useRef<SVGCircleElement | null>(null);

    const [open, setOpen] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [currentSection, setCurrentSection] = useState('Home');
    const [activeIndex, setActiveIndex] = useState(0);

    const pathname = usePathname();

    const ROUTES = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' },
        { path: '/blog', label: 'Blog' },
    ];

    const currentPath =
        ROUTES.find(
            r => pathname === r.path || pathname.startsWith(`${r.path}/`)
        )?.label ?? 'Home';

    const SECTIONS: Section[] = [
        { title: 'Home', index: '01', href: '/' },
        { title: 'About', index: '02', href: '/about' },
        { title: 'Skills', index: '03', href: '/skills' },
        { title: 'Experience', index: '04', href: '/experience' },
        { title: 'Projects', index: '05', href: '/projects' },
        { title: 'Blog', index: '06', href: '/blog' },
    ];

    useEffect(() => {
        setCurrentSection(currentPath);
    }, [currentPath]);

    const radius = 10;
    const circumference = 2 * Math.PI * radius;

    /* --------------------------------------------
       Initial setup + animation
    ---------------------------------------------*/
    useEffect(() => {
        if (!circleRef.current) return;

        circleRef.current.style.strokeDasharray = `${circumference}`;
        circleRef.current.style.strokeDashoffset = `${circumference}`;

        gsap.from(progressNavRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5,
        });
    }, [circumference]);

    /* --------------------------------------------
       Scroll logic
    ---------------------------------------------*/
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const scrollPercent =
                (scrollTop / (docHeight - windowHeight)) * 100;

            const clamped = Math.min(100, Math.max(0, scrollPercent));
            setPercentage(Math.round(clamped));

            if (circleRef.current) {
                const offset =
                    circumference - (clamped / 100) * circumference;
                circleRef.current.style.strokeDashoffset = `${offset}`;
            }

            const currentScrollPos = scrollTop + windowHeight / 2;
            const sections =
                document.querySelectorAll<HTMLElement>('.nav-section');

            let foundSection = currentPath;

            sections.forEach((section, index) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (currentScrollPos >= top && currentScrollPos < bottom) {
                    foundSection =
                        section.dataset.section || currentPath;
                    setActiveIndex(index);
                }
            });

            setCurrentSection(foundSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, [circumference, currentPath]);

    /* --------------------------------------------
       Close dropdown on outside click
    ---------------------------------------------*/
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                progressNavRef.current &&
                !progressNavRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () =>
            document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div
            ref={progressNavRef}
            className={`progress-nav ${open ? 'open' : ''} text-white`}
        >
            {/* Progress Circle */}
            <div className="progress-circle">
                <svg viewBox="0 0 24 24">
                    <defs>
                        <filter
                            id="glow"
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                        >
                            <feGaussianBlur
                                stdDeviation="2"
                                result="coloredBlur"
                            />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <circle
                        className="circle-bg"
                        cx="12"
                        cy="12"
                        r="8"
                        filter="url(#glow)"
                    />
                    <circle
                        ref={circleRef}
                        className="circle-progress"
                        cx="12"
                        cy="12"
                        r="10"
                    />
                </svg>
            </div>

            {/* Header (ONLY this toggles dropdown) */}
            <div
                className="section-title"
                onClick={() => setOpen(v => !v)}
            >
                <span className="current-section">
                    {currentSection}
                </span>
                <svg
                    className="dropdown-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

            <div className="percentage">
                {percentage || 0}%
            </div>

            {/* Dropdown */}
            <div className="dropdown-menu">
                {SECTIONS.map((s, i) => (
                    <Link
                        key={i}
                        href={s.href}
                        scroll={false}
                        className={`dropdown-item ${pathname === s.href ? 'active' : ''
                            }`}
                        onClick={() => setOpen(false)}
                    >
                        {s.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
