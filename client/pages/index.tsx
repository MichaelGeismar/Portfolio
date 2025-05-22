import sections from "@/data/sections";
import TabLayout from "@/Components/Tabs";

interface Section {
  title: string;
  id: number;
}

interface PageProps {
  sections: Section[];
}

const index: React.FC<PageProps> = ({ sections }) => (
  <TabLayout sections={sections} />
);

export async function getStaticProps() {
  const sectionsData = sections;

  if (!sectionsData || sectionsData.length === 0) {
    console.warn("No sections data found for prerendering.");
    return {
      notFound: true, // This will render a 404 page if no sections are found
    };
  }

  return {
    props: {
      sections: sectionsData,
    },
  };
}

export default index;
