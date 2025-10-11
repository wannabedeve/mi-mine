import React from 'react'
import './style.scss'; // Ensure you have the CSS file for styles

const Social = () => {
    return (
        <div className=''>


            <div className='cv-container'>
                <span className='pulse-button'>pulse</span>
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