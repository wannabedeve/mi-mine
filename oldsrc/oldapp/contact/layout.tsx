// import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Contact - Khaled AlKharashy`,
  authors: [
    {
      name: "Khaled AlKharashy",
      url: "/contact",
    },
  ],
  openGraph: {
    type: "website",
    // locale: "en_US",
    url: "/contact",
    title: `Contact - Khaled AlKharashy`,
    description: "siteConfig.description",
    siteName: "siteConfig.name",
    images: ["siteConfig.ogImage"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact - AlKharashy`,
    description: "siteConfig.description",
    images: ["siteConfig.ogImage"],
    creator: "siteConfig.name",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex justify-center my-12">{children}</section>;
}
