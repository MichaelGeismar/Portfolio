export type OpenSourceJob = {
  company: string;
  role: string;
  dates: string;
  description: string;
  responsibilities: string[];
};

const openSourceExperience: OpenSourceJob[] = [
  {
    company: "Breach",
    role: "Software Engineer",
    dates: "May 2021 - Oct 2021",
    description: "A desktop application for testing url security.",
    responsibilities: [
      "Developed front end in React to benefit from its modularity and flux paradigm, implementing functional components with Hooks for code that is cleaner and more maintainable while reducing development time as a product of organized component structures and increased readability",
      "Implemented React-Router to seamlessly swap between rendered components without reloads to improve user experience",
      "Manipulated style sheets in CSS to further modularize code improving readability, speeding up the development process, and creating an accessible and cohesive user interface",
      "Implemented Material UI for an optimized front end that includes theme changes and user personalization with the option for dark mode to improve battery life and user accessibility",
      "Leveraged Node.js Runtime (powered by Electron) to take advantage of the diverse ecosystem of npm packages, local data storage for personalization and security, and IPC communications protocol for data transfer between windows",
      "Incorporated Axios to reduce boilerplate code improving readability while making calls to a dedicated server that scrapes a target web application and tests for front end security weaknesses using a set of custom algorithms",
      "Coordinated webpack for its bundling capabilities using a combination of minification and uglification to create a dependency graph and improve performance efficiency and hot module reloading to improve developer efficiency",
    ],
  },
  {
    company: "KATS Box",
    role: "Software Engineer",
    dates: "May 2021 - Oct 2021",
    description: "E-commerce store for snack boxes.",
    responsibilities: [
      "Leveraged React’s capabilities and unidirectional data flow in order to separate static components from dynamic state changing components on login, box contents, cart, checkout, and items display pages based on user input",
      "Developed PostgreSQL database utilizing relational architecture to connect users, inventory, sales and carts in a well-formatted manner to decrease query times while maintaining ACID compliance for personal info security and increased data consistency",
    ],
  },
  {
    company: "oPin the World",
    role: "Software Engineer",
    dates: "May 2021 - Oct 2021",
    description: "Map pin tracker for keeping track of places travelled.",
    responsibilities: [
      "Utilized CSS’s modularization to develop a more legible style sheet with organization of classes that allow for use across multiple pages and IDs for more specific style formatting while incorporating Flexbox to fluidly reformat the page layout depending on users screen size",
      "Used Express to build a restful API with extensive middleware functionality allowing for compartmentalization of routes and controllers to separate calls from both the front and back end",
      "Developed a No-SQL database to efficiently store organized user data without the need for relational charts and frameworks in order to improve scalability and increase product load times",
    ],
  },
];

export default openSourceExperience;
