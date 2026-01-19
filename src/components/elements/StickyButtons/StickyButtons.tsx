'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './sticky-buttons.scss'
import { ArrowBigUp, Home, MessageCircleHeart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomeIcon() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 120)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // if (isHomePage) return null

    return (
        <div className="floating_btn">
            {!isHomePage && (
                <Link
                    aria-label="Home"
                    title="Home"
                    href="/"
                    className="pulse-button"
                >
                    <Home />
                </Link>
            )
            }
            {/* Add more buttons here later */}
            {/* <Link className="contact_icon" /> */}
            <Link href={"https://wa.me/+201025440707?text=Hello%20Khaled"} target='_blank' className='contact_icon'>
                <svg
                    // className="social-icon-svg"
                    fill='white'
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d='M12 0a12 12 0 0 0-10.6 17.6L0 24l6.6-1.3A12 12 0 1 0 12 0zm6.2 17.1c-.26.74-1.5 1.36-2.1 1.45-.57.1-1.3.14-4.1-1.02-3.4-1.4-5.6-4.8-5.76-5.05-.16-.26-1.38-1.83-1.38-3.5s.96-2.5 1.3-2.85c.34-.34.78-.43 1.04-.43h.75c.24 0 .56-.09.87.66.31.74 1.04 2.56 1.13 2.74.1.18.16.4.04.64-.12.25-.18.4-.36.61-.18.21-.38.47-.54.63-.18.18-.36.38-.16.74.2.36.9 1.48 1.94 2.4 1.33 1.18 2.45 1.55 2.8 1.73.35.18.56.15.77-.09.22-.25.9-1.04 1.14-1.4.24-.36.48-.3.8-.18.32.12 2.02 1 2.36 1.18.34.18.57.27.65.42.08.15.08.86-.18 1.6z' />
                </svg>
            </Link>


            <button
                aria-label="Scroll to top"
                onClick={scrollToTop}
                className={`scroll-top-btn ${visible ? 'show' : ''}`}
            >
                <ArrowBigUp />
            </button>


            <a href="#contact-id">
                <MessageCircleHeart size={40} color='#d4c5a399' />
            </a>

        </div>
    )
}
