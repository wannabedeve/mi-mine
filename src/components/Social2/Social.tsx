import React from 'react'
import './style.scss'; // Ensure you have the CSS file for styles

const Social = () => {
    return (
        <div className=''>

            <br /><br /><br />
            <div className='cv-container'>
                {/* <span className='pulse-button'>pulse</span> */}


                <a className="pulse-button relative" href="/khaled-alkharashi-full-stack-web-developer-resume.pdf"
                    download="khaled-alkharashi-full-stack-web-developer-resume.pdf"
                    target="_blank">





                    {/* cv */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="30" height="30" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        className="absolute left-[32%] top-[28%]"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>



                </a>



            </div>

            <ul className="list w-screen h-[8rem]">
                <li className="list__item">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=khaled.ahmed.alkharashi@gmail.com&su=could%20tell%20name%20please&body=Please%20Feel%20Free%20to%20write%20your%20thoughts%20..."
                        target="_blank"
                        className="list__link">
                        <img src="/social/1.png" alt="gmail" />
                    </a>
                </li>
                <li className="list__item">
                    <a
                        href="https://wa.me/+201025440707?text=Hello%20Khaled"
                        target="_blank"
                        className="list__link">
                        <img src="/social/23.png" alt="whatsapp" />
                    </a>
                </li>
                <li className="list__item">
                    <a
                        href="https://www.linkedin.com/in/khaled-al-kharashi-10653b247/"
                        target="_blank"
                        className="list__link">
                        <img src="/social/linkk.png" alt="linkedin" />
                    </a>
                </li>
                <li className="list__item">
                    <a
                        href="https://github.com/KhaledAhmedA"
                        target="_blank" className="list__link">
                        <img src="/social/gitt.webp" alt="github" />
                    </a>
                </li>
            </ul>


        </div>
    )
}

export default Social