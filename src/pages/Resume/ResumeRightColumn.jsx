import React from "react";
import { resumeObj } from "../../data";
import ExperienceCard from "./ExperienceCard.jsx";
import ProviderCard from "./ProviderCard.jsx";

const ResumeRightColumn = () => {
  const groupedCertifications = resumeObj.certifications.reduce(
    (groups, cert) => {
      const group = groups[cert.provider] || [];
      group.push(cert);
      groups[cert.provider] = group;
      return groups;
    },
    {},
  );

  return (
    <div className="row-span-4 md:col-span-4 space-y-4 backdrop-blur-md bg-opacity-40 md:bg-opacity-60 bg-tertiary h-full overflow-auto rounded-b-2xl md:rounded-r-2xl md:rounded-l-none shadow-card p-2 px-5 py-8 md:p-16">
      <div>
        <h2 className="text-2xl font-semibold">Education</h2>
        {resumeObj.education.map((edu, index) => (
          <ExperienceCard key={index} experience={edu} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        {resumeObj.workExperience.map((work, index) => (
          <ExperienceCard key={index} experience={work} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Hobbies</h2>
        {resumeObj.hobbies.map((hobby, index) => (
          <ExperienceCard key={index} experience={hobby} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Certifications</h2>
        {Object.entries(groupedCertifications).map(
          ([provider, certs], index) => (
            <ProviderCard
              key={index}
              provider={provider}
              certifications={certs}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ResumeRightColumn;
