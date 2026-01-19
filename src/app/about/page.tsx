import AboutLayout from "@/components/Layouts/AboutLayout/About";
import { Metadata } from "next";


export const metadata: Metadata = {
    metadataBase: new URL("https://khaled-web.vercel.app/"), // <- add your production domain
    title: "About - Khaled's Profile",
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


export default function About() {
    return (
        <><div className="z-50"><AboutLayout /></div></>
    )
}