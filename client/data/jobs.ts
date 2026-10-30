export type Job = {
  company: string;
  role: string;
  dates: string;
  teams: Team[];
};

export type Team = {
  name: string;
  description: string;
  responsibilities: string[];
};

const jobExperience: Job[] = [
  {
    company: "Contracts",
    role: "",
    dates: "",
    teams: [
      {
        name: "Fortitude Systems | Client: Motili",
        description: "Full-Stack Engineer | March 2026 - Present",
        responsibilities: [
          "Built internal tools in React for finance to manage money and clients that helped improve company operations.",
          "Developed large-scale survey tooling to gather information from prospective clients, generating leads and work orders (while ramping up on Vue).",
          "Created and called APIs using Loopback and RTK Query, reducing redundant calls across the stack.",
          "Managed long-term projects, wearing many hats to bridge gaps between project management, QA, and development.",
          "Organized and directed AI agents through Claude console to produce maintainable, readable code.",
          "Involved with company carnivals and event planning improving team culture and community.",
        ],
      },
      {
        name: "Alpine Solutions Group | Client: Synchrony Bank",
        description: "Frontend Engineer | May 2025 - March 2026",
        responsibilities: [
          "Built React features for Synchrony Bank’s main dashboard (VISTA).",
          "Owned releases for multiple micro-frontends (MFEs), keeping code current, documented, and tested across channel platform implementations.",
          "As the sole Cypress engineer on the team, raised automation coverage from 15% to 60%, and helped a second team develop Gherkin best practices in a more mature suite.",
          "Coordinated release process testing end to end, from image creation to channel app migration, including all stakeholder communication.",
          "Wrote bash scripts to automate tarball creation and migration, cutting minutes off each manual frontend test cycle for MFEs in channel apps.",
          "Detailed and improved best practices across the entire company for integration testing and Gherkin usage including an engineering wide tech talk.",
          "Experience in Agile methodologies, including daily standups for team alignment, ticket grooming for clarity and effective backlog management to support efficient, asynchronous workflows.",
        ],
      },
    ],
  },
  {
    company: "Verily Life Sciences (Alphabet/Google Life Sciences)",
    role: "Software Engineer",
    dates: "Nov 2021 - Nov 2024",
    teams: [
      {
        name: "Builder Platform",
        description:
          "A web application for administrators to build clinical trials and care programs.",
        responsibilities: [
          "Developed scalable, reusable React components with 90%+ unit and integration test coverage using Jest and Cypress, ensuring full accessibility compliance and a seamless user experience for all users.",
          "Worked with Go and Protocol Buffers RPCs that supplied data to the frontend.",
          "Produced picture perfect designs often praised by the UX lead, as seen in Edwin Choi’s recommendation on my LinkedIn page.",
          "Created software for companies to build clinical trials in React including large scale flows for data gathering from patients such as surveys and questionnaires as well as client dashboards.",
          "Led 5-person team to build a Cypress integration test framework, increasing coverage from 0% to 90% and improving release confidence across the platform.",
          "Improved frontend performance and load time by integrating asynchronous error handling and reducing unnecessary backend calls.",
          "Authored detailed technical documentation for frontend systems and test frameworks to support team onboarding and long-term maintainability.",
          "Collaborated cross-functionally with engineers, designers, PMs, and engineering managers to deliver features in a remote, fast-paced environment.",
          "Mentored junior engineers using clear, structured onboarding processes and technical walkthroughs, leveraging past experience as an educator.",
          "Monitored production systems during on-call rotations and used Google Cloud Monitoring to resolve latency and stability issues, followed by incident documentation.",
          "Strengthened company culture by organizing recurring off-site events and team-building activities for 40+ colleagues.",
        ],
      },
      {
        name: "Site Tools",
        description:
          "Tools to help administrators of clinical trials collect data from participants and pharmacists such as consents, surveys, and administration of pharmaceuticals. ",
        responsibilities: [
          "Created responsive, user-friendly components in Soy/Wiz/Typescript, enabling clinical trial administrators to easily manage schedules and pharmaceutical administration timeframes.",
          "Designed and implemented a JSWire unit testing framework with 90%+ feature coverage, incorporating reusable mocks and automated screenshot validation to ensure UI stability. ",
          "Developed RPC and Protocol Buffer-based backend communication systems, optimizing data payloads to improve frontend performance and reduce API latency. ",
          "Maintained and developed end-to-end tests in Java while ramping up on the language.",
          "Monitored system health and test stability using internal dashboards built with Google Cloud metrics, enabling faster issue detection and resolution during test runs. ",
        ],
      },
    ],
  },
];

export default jobExperience;
