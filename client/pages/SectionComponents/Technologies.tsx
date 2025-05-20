import {
  familiarTechnologies,
  fluentTechnologies,
} from "../data/technologiesInfo";
import { techTalks } from "../data/aboutInfo";
import CustomCard from "../customComponents/CustomCard";

const Technologies = () => {
  return (
    <div className="space-y-8 w-full">
      <CustomCard
        title={"Fluent Technologies"}
        content={
          <ul>
            {fluentTechnologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        }
      />
      <CustomCard
        title={"Familiar Technologies"}
        content={
          <ul>
            {familiarTechnologies.map((tech, i) => (
              <li key={i}>{tech}</li>
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
    </div>
  );
};
export default Technologies;
