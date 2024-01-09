import React from "react";
import { certifications, resumeObj } from "../constants/index.js";
import ExperienceCard from "./subComponents/ExperienceCard";
import ListCard from "./subComponents/ListCard";
import ContactCard from "./subComponents/ContactCard.jsx";
import ProviderCard from "./subComponents/ProviderCard.jsx";
import { motion } from "framer-motion";

const Resume = () => {
  const groupedCertifications = certifications.reduce((groups, cert) => {
    const group = groups[cert.provider] || [];
    group.push(cert);
    groups[cert.provider] = group;
    return groups;
  }, {});
  return (
    <motion.div
      layout
      className="relative grid md:grid-cols-6 grid-rows-1 text-white mt-5"
    >
      <div className="row-span-2 md:col-span-2 space-y-4 bg-black backdrop-blur-sm bg-opacity-50 border-1 border-gray-900 border h-full overflow-auto md:rounded-l-2xl md:rounded-r-none rounded-t-2xl shadow-card px-5 py-8 md:p-16">
        <h1 className="text-4xl font-bold">{resumeObj.name}</h1>
        <ContactCard contact={resumeObj.contact} />
        <ListCard title="Skills" items={resumeObj.skills} />
        <ListCard
          title="Personal Qualities"
          items={resumeObj.personalQualities}
        />
        <ListCard title="Spoken Languages" items={resumeObj.languages} />
      </div>
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
    </motion.div>
  );
};

export default Resume;
