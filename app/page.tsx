import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TravellingText from "@/components/TravellingText";
import Hackathons from "@/components/Hackathons";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import GithubHeatmap from "@/components/GithubHeatmap";
import Contact from "@/components/Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harini M M | Full Stack Developer & SDE Candidate",
  description:
    "Explore the portfolio of Harini M M — CS & Business Systems student building full-stack applications, IoT systems, and ML integrations.",

  keywords: [
    "Harini M M portfolio",
    "Full Stack Developer Madurai",
    "SDE Candidate",
    "CS & Business Systems student",
    "Java developer",
    "Arduino ESP32 projects",
    "Bee Hive Monitoring IoT",
    "Smart Agriculture System",
    "Eduflex learning platform",
    "Harini M M PSNACET",
  ],

  openGraph: {
    title: "Harini M M | Full Stack Developer & SDE Candidate",
    description:
      "CS & Business Systems student building full-stack applications, IoT systems, and ML integrations.",
    url: "https://harinimm.dev",
    images: [
      {
        url: "https://harinimm.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Harini M M Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Harini M M | Full Stack Developer & SDE Candidate",
    description:
      "CS & Business Systems student building full-stack applications, IoT systems, and ML integrations.",
    images: ["https://harinimm.dev/preview.png"],
  },

  alternates: {
    canonical: "https://harinimm.dev",
  },
};

export default function Home() {
  return (
    <main className="relative bg-background">
      <TravellingText />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Hackathons />
      <Projects
        limit={4}
      />
      <Experience />
      <TechStack />
      <GithubHeatmap />
      <Contact />
    </main>
  );
}
