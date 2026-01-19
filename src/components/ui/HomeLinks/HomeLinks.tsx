// 'use client'

// import React from 'react'
// import {
//     Home,
//     Info,
//     Link,
//     Mail,
// } from 'lucide-react'

// import './style.scss'

// type NavItem = {
//     label: string
//     Icon: React.ElementType
// }

// const NAV_ITEMS: NavItem[] = [
//     { label: 'Home', Icon: Home },
//     { label: 'About', Icon: Info },
//     { label: 'Services', Icon: Link },
//     { label: 'Contact', Icon: Mail },
// ]

// export default function Test() {
//     return (
//         <>
//             <nav>
//                 {NAV_ITEMS.map(({ label, Icon }) => (
//                     <button key={label} type="button" title={label}>
//                         {/* Text */}
//                         <span>{label}</span>

//                         {/* Lucide Icon */}
//                         <span aria-hidden="true">
//                             <Icon size={22} strokeWidth={1.5} />
//                         </span>

//                         {/* Circular rotating text */}
//                         <svg viewBox="0 0 300 300" aria-hidden="true">
//                             <g>
//                                 <text fill="currentColor">
//                                     <textPath href="#circlePath">{label}</textPath>
//                                 </text>
//                                 <text fill="currentColor">
//                                     <textPath href="#circlePath" startOffset="50%">
//                                         {label}
//                                     </textPath>
//                                 </text>
//                             </g>
//                         </svg>
//                     </button>
//                 ))}
//             </nav>

//             {/* SVG defs (once globally) */}
//             <svg
//                 width="0"
//                 height="0"
//                 viewBox="0 0 300 300"
//                 aria-hidden="true"
//                 focusable="false"
//             >
//                 <defs>
//                     <path
//                         id="circlePath"
//                         d="M 150,150
//                m -50,0
//                a 50,50 0 1,1 100,0
//                a 50,50 0 1,1 -100,0"
//                     />
//                 </defs>
//             </svg>
//         </>
//     )
// }




'use client'


import './home-links.scss'


export default function HomeLinks({ link }: { link: string }) {
    return (
        <>
            {/* <div className='btn-nav'> */}
            <a href={link} className='btn-nav'>
                <button type="button" title={`${link}`} className='home-links-button'>
                    {/* Text */}
                    <span>
                        {/* <Pointer size={25} strokeWidth={1.5} /> */}
                        ↗
                    </span>

                    {/* Lucide Icon */}
                    <span aria-hidden="true">
                        {/* <Pointer size={25} strokeWidth={1.5} /> */}
                        ↗
                    </span>

                    {/* Circular rotating text */}
                    <svg viewBox="0 0 300 300" aria-hidden="true">
                        <g>
                            <text fill="currentColor" className='text-white text-[1.8rem]'>
                                <textPath href="#circlePath">Click</textPath>
                            </text>
                            <text fill="currentColor" className='text-white text-[1.3rem]'>
                                <textPath href="#circlePath" startOffset="50%">
                                    To Visit
                                </textPath>
                            </text>
                        </g>
                    </svg>
                </button>
            </a>
            {/* </div> */}

            {/* SVG defs (once globally) */}
            <svg
                width="0"
                height="0"
                viewBox="0 0 300 300"
                aria-hidden="true"
                focusable="false"
            >
                <defs>
                    <path
                        id="circlePath"
                        d="M 150,150
               m -50,0
               a 50,50 0 1,1 100,0
               a 50,50 0 1,1 -100,0"
                    />
                </defs>
            </svg>
        </>
    )
}
