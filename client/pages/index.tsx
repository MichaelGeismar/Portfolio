import Head from "next/head";
import sections from "@/data/sections";
import TabLayout from "@/Components/Tabs";

const portfolioUrl = "https://michael-geismar-portfolio.vercel.app";
const title = "Michael Geismar | Frontend focused Software Engineer";
const description =
  "Michael Geismar's Portfolio: React, TypeScript, testing, and accessibility.";

interface Section {
  title: string;
  id: number;
}

interface PageProps {
  sections: Section[];
}

const index: React.FC<PageProps> = ({ sections }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={portfolioUrl} />
      <meta property="og:image" content={`${portfolioUrl}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
    </Head>
    <TabLayout sections={sections} />
  </>
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
