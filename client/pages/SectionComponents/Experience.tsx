import jobExperience from "../data/jobs";
import CustomCard from "../customComponents/CustomCard";

const Experience = () => {
  return (
    <div>
      {jobExperience.map((job, i) => (
        <CustomCard
          key={i}
          title={
            <>
              <h2>{job.company}</h2>
              <h3>{job.role}</h3>
              <p>{job.dates}</p>
            </>
          }
          content={job.teams.map((team) => (
            <CustomCard
              key={team.name}
              title={
                <>
                  {" "}
                  <h4>{team.name}</h4>
                  <p>{team.description}</p>
                </>
              }
              content={
                <ul>
                  {team.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              }
            />
          ))}
        />
      ))}
    </div>
  );
};
export default Experience;
