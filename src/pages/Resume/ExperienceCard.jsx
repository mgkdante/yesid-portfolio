import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="p-4 space-y-2">
      {experience.description ? (
        <>
          <p>{experience.title}</p>
          <p>{experience.description}</p>
        </>
      ) : (
        <>
          <p>{experience.institution}</p>
          <div className="pl-2">
            <div className="flex justify-between">
              <p>{experience.title}</p>
              <p>{experience.period}</p>
            </div>
          </div>
        </>
      )}
      {experience.tasks && (
        <ul className="list-disc pl-5">
          {experience.tasks.map((task, taskIndex) => (
            <li key={taskIndex}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
