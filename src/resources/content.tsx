import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad",
  lastName: "Sulthan",
  name: `Muhammad Sulthan`,
  role: "Software Engineer & Security Specialist",
  avatar: "/images/avatar.jpg",
  email: "muhdsulthan1@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about distributed systems, cybersecurity, and engineering.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MuhdSulthan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhdsulthan/",
  },
  {
    name: "TryHackMe",
    icon: "tryhackme",
    link: "https://tryhackme.com/p/muhdsulthan1",
  },
  {
    name: "Credly",
    icon: "credly",
    link: "https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/muhdzulthan?igsh=bXFxdnQ1bGJiMHpi",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name} — Software Engineer at IBM India, building distributed microservices and security systems.`,
  headline: <>Building distributed systems. Securing digital frontiers.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          RAAPD Platform
        </Text>
      </Row>
    ),
    href: "/work/raapd-telemetry-platform",
  },
  subline: (
    <>
      I'm Sulthan, a Software Engineer at{" "}
      <strong>IBM India</strong>
      {" "}building microservices and distributed systems — with a deep focus on{" "}
      <strong>cybersecurity</strong> and post-quantum cryptography.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Sulthan, a Software Engineer at IBM India working on microservices, full-stack distributed
        systems, and reliability engineering for large-scale US enterprise clients. I hold a B.Tech (Honours)
        in CSE (Cyber Security) with a CGPA of 8.7, and I bring deep experience in post-quantum cryptography,
        network security, digital forensics, and cloud-native architecture. I am actively engaged in research
        on quantum computing's impact on future security systems, and I love building systems that are both
        fast and resilient.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IBM India Pvt. Ltd.",
        timeframe: "July 2026 – Present",
        role: "Software Engineer – Microservices & Full Stack",
        achievements: [
          <>
            Architected modular automation frameworks and integration test suites in Core Java (OOP, Maven),
            validating distributed microservice workflows, business logic, and REST contract integrity for a
            major US enterprise client.
          </>,
          <>
            Diagnosed and resolved critical service regressions across distributed microservice backends,
            conducting structured Root Cause Analysis (RCA) across application logs, SQL query latencies,
            and API traces to restore service health.
          </>,
          <>
            Integrated automated reliability and regression quality checks into CI/CD pipelines (GitHub Actions),
            establishing automated build gates that prevent broken deployments from reaching production.
          </>,
        ],
        images: [],
      },
      {
        company: "Kerala Police Academy",
        timeframe: "June 2024 – July 2024",
        role: "Software & Security Intern",
        achievements: [
          <>
            Automated network routing and traffic isolation across 4 subnets on a pfSense firewall via custom
            Python audit scripts, eliminating unmonitored ingress routes and optimizing network throughput.
          </>,
          <>
            Investigated network anomalies using Wireshark packet capture analysis across 25+ digital endpoints
            (100% audit compliance) and engineered an object-oriented Python forensic microservice, cutting
            timeline reconstruction turnaround by 30%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Kerala Police Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Alibi Global Pvt. Ltd.",
        timeframe: "May 2024 – July 2024",
        role: "Cyber Forensic Intern",
        achievements: [
          <>
            Conducted forensic analysis on 3 criminal case studies, uncovering critical evidence that
            contributed to successful legal proceedings.
          </>,
          <>
            Applied Magnet AXIOM and Cellebrite UFED 4PC to recover deleted data from 7+ devices,
            strengthening digital evidence integrity.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ilahia College of Engineering and Technology",
        description: (
          <>
            B.Tech (Honours) in Computer Science and Engineering (Cyber Security) — CGPA: 8.7 | 2022 – 2026.
            APJ Abdul Kalam Technological University, Kerala, India.
          </>
        ),
      },
      {
        name: "Google Cybersecurity",
        description: <>Completed the Google Cybersecurity Professional Certificate via Coursera (2024).</>,
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications & Achievements",
    items: [
      {
        name: "Claude Certified Developer – Foundations",
        issuer: "Anthropic",
        date: "October 2026",
        description: (
          <>
            Foundational certification for developing applications and workflows using Claude AI and the
            Anthropic API, covering prompt engineering, tool use, and responsible AI practices.
          </>
        ),
        credentialUrl: "https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8",
      },
      {
        name: "Certified Partner Specialist: Gemini Enterprise Agent Development",
        issuer: "Google",
        date: "2026",
        description: (
          <>
            Google certification for designing, building, and deploying enterprise AI agents using Gemini,
            covering agent architecture, tool integration, and enterprise deployment patterns.
          </>
        ),
        credentialUrl: "https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8",
      },
      {
        name: "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
        issuer: "Microsoft via Coursera",
        date: "2026",
        description: (
          <>
            Industry certification validating skills in implementing security controls, maintaining an
            organization's security posture, and managing identity, access, data, applications, and
            networks in Azure cloud environments.
          </>
        ),
        credentialUrl: "https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8",
      },
      {
        name: "Certified API Security Analyst",
        issuer: "APIsec University",
        date: "2026",
        description: (
          <>
            Certification covering API security fundamentals, common vulnerabilities (OWASP API Top 10),
            penetration testing methodologies, and securing REST and GraphQL APIs.
          </>
        ),
        credentialUrl: "https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8",
      },
      {
        name: "Google Cybersecurity Professional Certificate",
        issuer: "Google via Coursera",
        date: "2024",
        description: (
          <>
            Comprehensive cybersecurity program covering security frameworks, risk management, incident
            response, and hands-on security tools including SIEM and IDS.
          </>
        ),
        credentialUrl: "https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8",
      },
      {
        name: "TryHackMe Active Learner",
        issuer: "TryHackMe",
        date: "Ongoing",
        description: (
          <>
            Hands-on cybersecurity learning platform focusing on penetration testing, digital forensics,
            and ethical hacking through real-world capture-the-flag challenges.
          </>
        ),
        credentialUrl: "https://tryhackme.com/p/muhdsulthan1",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Core CS",
        description: (
          <>
            Proficient in Python, Core Java, JavaScript/TypeScript, and SQL for building distributed
            systems, automation frameworks, and security tools. Strong foundation in OOD, DSA, and
            systems programming.
          </>
        ),
        tags: [
          { name: "Python", icon: "code" },
          { name: "Core Java", icon: "code" },
          { name: "JavaScript / TypeScript", icon: "javascript" },
          { name: "SQL (PostgreSQL, MySQL)", icon: "database" },
          { name: "Bash / Shell", icon: "terminal" },
          { name: "OOD & DSA", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Distributed Systems & Cloud",
        description: (
          <>
            Experienced in designing and deploying microservices architectures on AWS, with Docker and
            Kubernetes orchestration, CI/CD pipelines, and real-time communication via WebSockets and WebRTC.
          </>
        ),
        tags: [
          { name: "Microservices Architecture", icon: "server" },
          { name: "RESTful APIs", icon: "activity" },
          { name: "AWS (EC2, S3, VPC)", icon: "cloud" },
          { name: "Docker & Kubernetes", icon: "server" },
          { name: "WebSockets & WebRTC", icon: "activity" },
          { name: "CI/CD (GitHub Actions)", icon: "settings" },
        ],
        images: [],
      },
      {
        title: "Reliability & Observability",
        description: (
          <>
            Skilled in Root Cause Analysis, telemetry pipelines, and SLI/SLO tracking with Prometheus and
            Grafana. Experienced in Linux/UNIX administration and load testing with Locust.
          </>
        ),
        tags: [
          { name: "Root Cause Analysis (RCA)", icon: "search" },
          { name: "Prometheus & Grafana", icon: "activity" },
          { name: "SLIs / SLOs", icon: "eye" },
          { name: "Linux / UNIX (Ubuntu, RHEL)", icon: "terminal" },
          { name: "Load Testing (Locust)", icon: "activity" },
          { name: "Incident Triage", icon: "alert" },
        ],
        images: [],
      },
      {
        title: "Security & Testing",
        description: (
          <>
            Deep expertise in post-quantum cryptography (NIST FIPS 203 ML-KEM), network security, and
            automated testing. Hands-on with Playwright, Wireshark, Scapy, and pfSense for security
            analysis and test automation.
          </>
        ),
        tags: [
          { name: "Post-Quantum Cryptography (ML-KEM)", icon: "shield" },
          { name: "AES-256-GCM / TLS", icon: "shield" },
          { name: "Playwright & Selenium", icon: "code" },
          { name: "Wireshark & Scapy", icon: "activity" },
          { name: "pfSense Firewall", icon: "shield" },
          { name: "Magnet AXIOM / Cellebrite", icon: "smartphone" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about distributed systems, cybersecurity, and engineering...",
  description: `Read about ${person.name}'s engineering insights, security research, and technical deep-dives`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Distributed systems, security engineering, and full-stack projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-5.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
