import jobExperience from "../../data/jobs";
import CardHolder from "../customComponents/CardHolder";
import CustomCard from "../customComponents/CustomCard";

const Experience = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      {jobExperience.map((job) => (
        <CardHolder
          key={job.company}
          title={
            <>
              <h2 className="font-semibold">{job.company}</h2>
              {job.role && <h3>{job.role}</h3>}
              {job.dates && <p>{job.dates}</p>}
            </>
          }
          content={job.teams.map((team) => (
            <CustomCard
              collapsible
              key={team.name}
              title={team.name}
              content={
                <>
                  <p className="mb-3 font-semibold">{team.description}</p>
                  <ul className="space-y-2">
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
