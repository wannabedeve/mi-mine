// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import './cursor.scss';

// export default function MagnifierCursor() {
//     const cursorRef = useRef<HTMLDivElement>(null);
//     const [active, setActive] = useState(false);

//     useEffect(() => {
//         const isDesktop =
//             window.matchMedia('(pointer: fine)').matches &&
//             window.matchMedia('(hover: hover)').matches;

//         if (!isDesktop) return;

//         const cursor = cursorRef.current;
//         if (!cursor) return;

//         document.body.classList.add('has-magnifier');

//         const move = (e: MouseEvent) => {
//             cursor.style.left = `${e.clientX}px`;
//             cursor.style.top = `${e.clientY}px`;
//         };

//         const activate = () => setActive(true);
//         const deactivate = () => setActive(false);

//         // Activate magnification only on hoverable elements
//         document.querySelectorAll<HTMLElement>('a, button, [data-magnify]')
//             .forEach(el => {
//                 el.addEventListener('mouseenter', activate);
//                 el.addEventListener('mouseleave', deactivate);
//             });

//         window.addEventListener('mousemove', move);

//         return () => {
//             window.removeEventListener('mousemove', move);
//             document.body.classList.remove('has-magnifier');

//             document.querySelectorAll<HTMLElement>('a, button, [data-magnify]')
//                 .forEach(el => {
//                     el.removeEventListener('mouseenter', activate);
//                     el.removeEventListener('mouseleave', deactivate);
//                 });
//         };
//     }, []);

//     return (
//         <div
//             ref={cursorRef}
//             className={`magnifier ${active ? 'active' : ''}`}
//         />
//     );
// }




'use client';

import { useEffect, useRef, useState } from 'react';
import './cursor.scss';

export default function MagnifierCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        document.body.classList.add('has-magnifier');

        // Move cursor with mouse
        const move = (e: MouseEvent) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        // Hover activation
        const activate = () => setActive(true);
        const deactivate = () => setActive(false);

        const hoverElements = document.querySelectorAll<HTMLElement>(
            'a, button, [data-magnify]'
        );
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', activate);
            el.addEventListener('mouseleave', deactivate);
        });

        window.addEventListener('mousemove', move);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', move);
            document.body.classList.remove('has-magnifier');

            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', activate);
                el.removeEventListener('mouseleave', deactivate);
            });
        };
    }, []);

    return <div ref={cursorRef} className={`magnifier ${active ? 'active' : ''}`} />;
}



