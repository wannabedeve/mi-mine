import ProjectCards from "@/components/Layouts/ProjectsLayout/Projects";
import { Metadata } from "next";


export const metadata: Metadata = {
    metadataBase: new URL("https://khaled-web.vercel.app/"), // <- add your production domain
    title: "Projects - Khaled's Pofile",
    description: "Full-Stack Developer, Business Platforms, Internal Systems, Digitalization, Web Developer, Frontend, Backend, Databases, UI/UX",
    icons: {
        icon: "/k.png",
        shortcut: "/k.png",
        apple: "/k.png",
    },
    openGraph: {
        title: "Home - Khaled's Pofile",
        description: "Full-Stack Developer, Business Platforms, Internal Systems, Digitalization, Web Developer, Frontend, Backend, Databases, UI/UX",
        images: ["/k.png"], // relative paths will use metadataBase
    },
    twitter: {
        card: "summary_large_image",
        title: "Home - Khaled's Pofile",
        description: "Full-Stack Developer, Business Platforms, Internal Systems, Digitalization, Web Developer, Frontend, Backend, Databases, UI/UX",
        images: ["/k.png"], // same here
    },
};


export default function Projects() {
    return (
        <>


            <ProjectCards />


        </>
    )
}