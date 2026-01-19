// import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Skills - Khaled AlKharashy`,
  authors: [
    {
      name: "Khaled AlKharashy",
      url: "/skills",
    },
  ],
  openGraph: {
    type: "website",
    // locale: "en_US",
    url: "/skills",
    title: `Skills - Khaled AlKharashy`,
    description: "siteConfig.description",
    siteName: "siteConfig.name",
    images: ["siteConfig.ogImage"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Skills - AlKharashy`,
    description: "siteConfig.description",
    images: ["siteConfig.ogImage"],
    creator: "siteConfig.name",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex justify-center my-12">{children}</section>;
}
