import "@/styles/customStyles.css";
import TabLayout from "./Tabs";

const MainPage = () => {
  const sections = [
    { title: "About Me", id: 1 },
    { title: "Experience", id: 2 },
    { title: "Open Source", id: 3 },
    { title: "Technologies", id: 4 },
    // { title: "Projects", id: 5 },
    { title: "Contact", id: 6 },
  ];

  return <div className="MainPage ">{<TabLayout sections={sections} />}</div>;
};

export default MainPage;
