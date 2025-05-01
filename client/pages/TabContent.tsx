import { useEffect, useState } from "react";
import About from "./SectionComponents/About";
import Experience from "./SectionComponents/Experience";
import Technologies from "./SectionComponents/Technologies";
import Projects from "./SectionComponents/Projects";
import Contact from "./SectionComponents/Contact";
import OpenSource from "./SectionComponents/OpenSource";

const TabContent = ({
  section,
}: {
  section: { title: string; id: number };
}) => {
  // State to hold the title for the current tab (if needed)
  const [title, setTitle] = useState("");

  // Set title when the section changes
  useEffect(() => {
    setTitle(section.title);
  }, [section]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full pb-5">
      {title === "Open Source" && <OpenSource />}
      {title === "Contact" && <Contact />}
      {title === "About Me" && <About />}
      {title === "Experience" && <Experience />}
      {title === "Technologies" && <Technologies />}
      {title === "Projects" && <Projects />}
    </div>
  );
};
export default TabContent;
