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
          "Implemented backend API integrations using Golang, RPC, and Protocol Buffers to enable HIPAA-compliant data access with minimal latency.",
          "Produced picture perfect designs often praised by the UX lead as seen in Edwin Choi’s recommendation on my LinkedIn page.",
          "Led 5-person team to build a Cypress integration test framework, increasing coverage from 0% to 90% and accelerating release confidence across the platform.",
          "Improved frontend performance and load time by integrating asynchronous error handling and reducing unnecessary backend calls. ",
          "Authored detailed technical documentation for frontend systems and test frameworks to support team onboarding and long-term maintainability. ",
          "Practiced Agile methodologies including daily standups, sprint planning, ticket grooming, and backlog management to ensure delivery velocity. ",
          "Collaborated cross-functionally with engineers, designers, PMs, and engineering managers to deliver features in a remote, fast-paced environment. ",
          "Mentored junior engineers using clear, structured onboarding processes and technical walkthroughs, leveraging past experience as an educator. ",
          "Monitored production systems during on-call rotations and used Google Cloud Monitoring to resolve latency and stability issues, followed by incident documentation. ",
          "Strengthened company culture by organizing recurring off-site events and team-building activities for 40+ colleagues. ",
        ],
      },
      {
        name: "Site Tools",
        description:
          "Tools to help administrators of clinical trials collect data from participants and pharmacists such as consents, surveys, and administration of pharmaceuticals. ",
        responsibilities: [
          "Built and maintained Java-based end-to-end tests, including regression and localization coverage, and integrated them into CI/CD pipelines to reduce manual QA overhead. ",
          "Designed and implemented a JSWire unit testing framework with 90%+ feature coverage, incorporating reusable mocks and automated screenshot validation to ensure UI stability. ",
          "Developed RPC and Protocol Buffer-based backend communication systems, optimizing data payloads to improve frontend performance and reduce API latency. ",
          "Refactored frontend logic into a modular MVC architecture using JavaScript, improving code readability and long-term maintainability across multiple user flows. ",
          "Monitored system health and test stability using internal dashboards built with Google Cloud metrics, enabling faster issue detection and resolution during test runs. ",
        ],
      },
    ],
  },
];

export default jobExperience;
