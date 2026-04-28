import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll, Preloader, Noise } from "@/components/ClientWrappers";

import StructuredData from "@/components/StructuredData";
import SEOContext from "@/components/SEOContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export async function generateMetadata(): Promise<Metadata> {
  const title = "Harini M M | Full Stack Developer & SDE Candidate";
  const description =
    "Portfolio of Harini M M — CS & Business Systems student building full-stack applications, IoT systems, and ML integrations.";
  const url = "https://harinimm.dev"; // ✏️ CONTENT REPLACED

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | Harini M M`, // ✏️ CONTENT REPLACED
    },
    description,
    applicationName: "Harini M M Portfolio", // ✏️ CONTENT REPLACED
    category: "technology",
    keywords: [
      "Harini M M",
      "Full Stack Developer",
      "SDE Candidate",
      "Java",
      "JavaScript",
      "Computer Science",
      "Business Systems",
      "Madurai",
      "Portfolio",
      "IoT Systems",
      "Problem Solver",
    ],
    authors: [{ name: "Harini M M", url }], // ✏️ CONTENT REPLACED
    creator: "Harini M M", // ✏️ CONTENT REPLACED
    publisher: "Harini M M", // ✏️ CONTENT REPLACED
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      types: {
        "text/plain": `${url}/llms.txt`,
        "text/markdown": `${url}/llms.txt`,
      },
    },
    verification: {
      google: "jHkctzXqPaYapbRARvJD-feb542ZJoNsvBqf1HarIIo",
    },
    openGraph: {
      title,
      description:
        "CS & Business Systems student building full-stack applications, IoT systems, and ML integrations.", // ✏️ CONTENT REPLACED
      url,
      siteName: "Harini M M Portfolio", // ✏️ CONTENT REPLACED
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${url}/preview.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description:
        "CS & Business Systems student building full-stack applications, IoT systems, and ML integrations.", // ✏️ CONTENT REPLACED
      card: "summary_large_image",
      creator: "@Harinimaheshbabu", // ✏️ CONTENT REPLACED
      images: [`${url}/preview.png`],
    },
    icons: {
      icon: [
        { 
          url: "/favicon_io/favicon-16x16.png", 
          sizes: "16x16", 
          type: "image/png" 
        },
        { 
          url: "/favicon_io/favicon-32x32.png", 
          sizes: "32x32", 
          type: "image/png" 
        },
        { 
          url: "/favicon_io/favicon.ico", 
          sizes: "any" 
        },
      ],
      apple: [
        { 
          url: "/favicon_io/apple-touch-icon.png", 
          sizes: "180x180", 
          type: "image/png" 
        },
      ],
      other: [
        { 
          rel: "manifest", 
          url: "/favicon_io/site.webmanifest" 
        },
      ],
    },
    manifest: "/favicon_io/site.webmanifest",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      "google-site-verification": "jHkctzXqPaYapbRARvJD-feb542ZJoNsvBqf1HarIIo",
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Quintessential&display=swap" rel="stylesheet" />
      </head>

      <body
        className="antialiased bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden"
      >
        <StructuredData />
        <SEOContext />
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Noise />
      </body>
    </html>
  );
}
