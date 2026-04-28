import React from 'react';

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://harinimm.dev/#person",
        name: "Harini M M",
        url: "https://harinimm.dev",
        email: "hariniii1405@gmail.com",
        jobTitle: "SDE Candidate | IoT & ML Systems",
        description:
          "Pre-final year CS student building full-stack applications, IoT systems, and ML integrations. SIH 2025 Finalist and NASA Space Apps 2024 Nominee.",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "PSNA College of Engineering and Technology, Dindigul",
        },
        worksFor: {
          "@type": "Organization",
          name: "Student",
        },
        sameAs: [
          "https://linkedin.com/in/harini-mahesh-32155a2ba",
          "https://github.com/Harinimaheshbabu"
        ],
        knowsAbout: [
          "Full Stack Development",
          "IoT Systems",
          "Machine Learning",
          "Java",
          "JavaScript",
          "Arduino",
          "ESP32",
          "REST APIs",
          "MySQL",
          "MongoDB",
          "Problem Solving",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dindigul",
          addressCountry: "IN",
        },
        award: [
          "SIH 2025 Finalist — Smart India Hackathon",
          "NASA Space Apps Challenge 2024 Nominee",
          "3rd Prize — TechSpectrum 2024, SRM Trichy",
          "Secretary — PSNACET Automation Club",
          "MongoDB Certified — MongoDB University",
          "Java Certified — ACE Academy",
          "UiPath RPA Certified — UiPath Academy",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://harinimm.dev/#service",
        name: "Harini M M — SDE Candidate",
        provider: {
          "@id": "https://harinimm.dev/#person",
        },
        serviceType: [
          "Full Stack Web Development",
          "IoT Systems Engineering",
          "Machine Learning Integration",
          "Embedded Systems",
          "Water Quality Monitoring",
        ],
        areaServed: "Worldwide",
        description:
          "Building IoT and ML-powered solutions with a focus on real-world impact and production-grade software.",
      },
      {
        "@type": "WebSite",
        "@id": "https://harinimm.dev/#website",
        url: "https://harinimm.dev",
        name: "Harini M M Portfolio",
        author: {
          "@id": "https://harinimm.dev/#person",
        },
        description:
          "Portfolio of Harini M M — SDE Candidate building IoT systems, ML integrations, and full-stack applications.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
