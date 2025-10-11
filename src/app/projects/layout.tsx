// import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Projects - Khaled AlKharashy`,
  authors: [
    {
      name: "Khaled AlKharashy",
      url: "/projects",
    },
  ],
  openGraph: {
    type: "website",
    // locale: "en_US",
    url: "/projects",
    title: `Projects - Khaled AlKharashy`,
    description: "siteConfig.description",
    siteName: "siteConfig.name",
    images: ["siteConfig.ogImage"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects - AlKharashy`,
    description: "siteConfig.description",
    images: ["siteConfig.ogImage"],
    creator: "siteConfig.name",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex justify-center my-12">{children}</section>;
}
