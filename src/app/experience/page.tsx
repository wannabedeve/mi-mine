import ExperienceLayout from "@/components/Layouts/ExperienceLayout/Experience";
import { Metadata } from "next";


export const metadata: Metadata = {
    metadataBase: new URL("https://khaled-web.vercel.app/"), // <- add your production domain
    title: "Experience - Khaled's Profile",
    description: "Full-Stack Developer, Business Platforms, Internal Systems, Digitalization, Web Developer, Frontend, Backend, Databases, UI/UX",
    icons: {
        icon: "/k.png",
        shortcut: "/k.png",
        apple: "/k.png",
    },
    openGraph: {
        title: "Home - Khaled's Profile",
        description: "Full-Stack Developer, Business Platforms, Internal Systems, Digitalization, Web Developer, Frontend, Backend, Databases, UI/UX",
        images: ["/k.png"], // relative paths will use metadataBase
    },
    twitter: {
        card: "summary_large_image",
        title: "Home - Khaled's Profile",
        description: "Full-Stack Developer, Business Platforms, Internal Systems, Digitalization, Web Developer, Frontend, Backend, Databases, UI/UX",
        images: ["/k.png"], // same here
    },
};



export default function Experience() {
    return (
        <>

            <ExperienceLayout />

        </>
    )
}