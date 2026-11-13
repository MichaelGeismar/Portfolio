import { Tabs } from "@base-ui-components/react/tabs";
import TabContent from "./TabContent";
import ToggleStylingMode from "./customComponents/ToggleStylingMode";
import Footer from "./SectionComponents/Footer";

const TabLayout = ({
  sections,
}: {
  sections: Array<{ title: string; id: number }>;
}) => {
  return (
    <Tabs.Root
      className={
        "Tabs flex flex-col min-h-screen overflow-y-scroll invisible-scrollbar"
      }
      defaultValue={sections[0].title}
    >
      <div className="grid shrink-0 grid-cols-1 items-center gap-3 mx-8 mt-4 min-h-fit mb-4 md:min-h-[4rem] lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-row justify-center lg:justify-start">
          <div className="w-16 transition-transform duration-300 hover:scale-130 aspect-square self-center rounded-full bg-radial-[at_75%_25%] from-white to-green-900 to-75%"></div>
          <p className="HeaderName text-2xl ms-4 content-center whitespace-nowrap">
            Michael Geismar
          </p>
        </div>
        <ToggleStylingMode />
        <Tabs.List className={"List flex flex-col lg:flex-row lg:self-stretch"}>
          {sections.map((section: { title: string; id: number }) => (
            <Tabs.Tab className={"Tab"} value={section.title} key={section.id}>
              {section.title}
            </Tabs.Tab>
          ))}
          <Tabs.Indicator className={"Indicator"} />
        </Tabs.List>
      </div>
      {sections.map((section: { title: string; id: number }) => (
        <Tabs.Panel
          keepMounted
          className={"Panel flex-grow"}
          key={section.id}
          value={section.title}
        >
          <TabContent section={section} />
        </Tabs.Panel>
      ))}
      <Footer />
    </Tabs.Root>
  );
};
export default TabLayout;
