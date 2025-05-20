import jobExperience from "../data/jobs";
import CustomCard from "../customComponents/CustomCard";
import CustomSecondaryCard from "../customComponents/CustomSecondaryCard";

const Experience = () => {
  return (
    <div>
      {jobExperience.map((job, i) => (
        <CustomSecondaryCard
          tailwindContentClasses="flex flex-col gap-8"
          // hoverEffect={false}
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
              hoverEffect={false}
              key={team.name}
              title={
                <>
                  <h4 className="font-bold">{team.name}</h4>
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
