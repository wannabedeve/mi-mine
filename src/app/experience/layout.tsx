// import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Experience - Khaled AlKharashy`,
  authors: [
    {
      name: "Khaled AlKharashy",
      url: "/experience",
    },
  ],
  openGraph: {
    type: "website",
    // locale: "en_US",
    url: "/experience",
    title: `Experience - Khaled AlKharashy`,
    description: "siteConfig.description",
    siteName: "siteConfig.name",
    images: ["siteConfig.ogImage"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Experience - AlKharashy`,
    description: "siteConfig.description",
    images: ["siteConfig.ogImage"],
    creator: "siteConfig.name",
  },
  alternates: {
    canonical: "/experience",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex justify-center my-12">{children}</section>;
}
