import openSourceExperience from "../data/openSourceJobs";
import CustomCard from "../customComponents/CustomCard";

const OpenSource = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {openSourceExperience.map((openSourceJob, i) => (
        <CustomCard
          key={i}
          title={
            <>
              <h2>{openSourceJob.company}</h2>
            </>
          }
          content={
            <>
              <h3>{openSourceJob.role}</h3>
              <p>{openSourceJob.dates}</p>
              <p>{openSourceJob.description}</p>
              <ul>
                {openSourceJob.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </>
          }
        />
      ))}
    </div>
  );
};
export default OpenSource;
