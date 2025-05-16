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
      <div className="mb-12 py-16 w-screen text-white text-center text-4xl font-semibold bg-linear-to-r from-[#1b4332] to-[#2d6a4f]">
        {" "}
        {title}{" "}
      </div>
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
