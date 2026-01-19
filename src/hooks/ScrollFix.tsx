// 'use client'

// import { usePathname } from 'next/navigation'
// import { useLayoutEffect } from 'react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export default function ScrollManager() {
//     const pathname = usePathname()

//     useLayoutEffect(() => {
//         window.scrollTo(0, 0)
//         ScrollTrigger.refresh()
//     }, [pathname])

//     return null
// }



'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollManager() {
    const pathname = usePathname()

    useLayoutEffect(() => {
        const hash = window.location.hash

        if (hash) {
            const el = document.querySelector(hash)

            if (el) {
                // Delay ensures layout & images are ready
                requestAnimationFrame(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    ScrollTrigger.refresh()
                })
                return
            }
        }

        // Default behavior
        window.scrollTo(0, 0)
        ScrollTrigger.refresh()
    }, [pathname])

    return null
}
