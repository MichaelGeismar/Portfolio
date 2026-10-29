import jobExperience from "../../data/jobs";
import CustomCard from "../customComponents/CustomCard";
import CardHolder from "../customComponents/CardHolder";

const Experience = () => {
  return (
    <div className="flex flex-col space-y-12">
      {jobExperience.map((job, i) => (
        <CardHolder
          key={i}
          title={
            <>
              <h2 className="font-semibold">{job.company}</h2>
              <h3>{job.role}</h3>
              <p>{job.dates}</p>
            </>
          }
          content={job.teams.map((team) => (
            <CustomCard
              hoverEffect={true}
              key={team.name}
              title={
                <>
                  <h4 className="">{team.name}</h4>
                </>
              }
              content={
                <>
                  <p className="font-semibold">{team.description}</p>
                  <ul>
                    {team.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </>
              }
            />
          ))}
        />
      ))}
    </div>
  );
};
export default Experience;
