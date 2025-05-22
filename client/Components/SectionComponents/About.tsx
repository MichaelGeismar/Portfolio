import {
  intro,
  blurb,
  passions,
  jobTitles,
  education,
  coreSkills,
} from "../../data/aboutInfo";
import CustomCard from "../customComponents/CustomCard";
import CustomSecondaryCard from "../customComponents/CustomSecondaryCard";

const About = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap gap-8">
        <CustomCard title={"Past"} content={intro} />
        <CustomCard title={"Professional"} content={blurb} />
      </div>
      <div className="flex flex-col gap-x-4 gap-y-8 w-full">
        <CustomSecondaryCard
          title={"Job Titles"}
          content={
            <ul>
              {jobTitles.map((jobTitle, i) => (
                <li className="px-1 py-1" key={i}>
                  {jobTitle}
                </li>
              ))}
            </ul>
          }
        />
        <CustomSecondaryCard
          title={"Core Skills"}
          content={
            <ul>
              {coreSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          }
        />
        <CustomSecondaryCard
          title={"Education"}
          content={
            <ul>
              {education.map((school, i) => (
                <li key={i}>
                  {school.school} - {school.degree} ({school.dates})
                </li>
              ))}
            </ul>
          }
        />
        <CustomSecondaryCard
          title={"Passions"}
          content={
            <ul>
              {passions.map((passion, i) => (
                <li key={i}>{passion}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};
export default About;
