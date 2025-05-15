import {
  intro,
  blurb,
  passions,
  jobTitles,
  techTalks,
  education,
  coreSkills,
} from "../data/aboutInfo";
import CustomCard from "../customComponents/CustomCard";

const About = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap gap-8">
        <CustomCard title={"Past"} content={intro} />
        <CustomCard title={"Professional"} content={blurb} />
      </div>
      <div className="flex space-around flex-wrap gap-x-28 gap-y-8">
        <CustomCard
          title={"Job Titles"}
          content={
            <ul>
              {jobTitles.map((jobTitle, i) => (
                <li key={i}>{jobTitle}</li>
              ))}
            </ul>
          }
        />
        <CustomCard
          title={"Core Skills"}
          content={
            <ul>
              {coreSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          }
        />
        <CustomCard
          title={"Tech Talks"}
          content={
            <ul>
              {techTalks.map((techTalk, i) => (
                <li key={i}>{techTalk}</li>
              ))}
            </ul>
          }
        />
        <CustomCard
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
        <CustomCard
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
