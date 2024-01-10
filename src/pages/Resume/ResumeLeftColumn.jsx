import React from "react";
import { resumeObj } from "../../data/index.js";
import ContactCard from "./ContactCard.jsx";
import ListCard from "./ListCard.jsx";

const ResumeLeftColumn = () => (
  <div className="row-span-2 md:col-span-2 space-y-4 bg-black backdrop-blur-sm bg-opacity-50 border-1 border-gray-900 border h-full overflow-auto md:rounded-l-2xl md:rounded-r-none rounded-t-2xl shadow-card px-5 py-8 md:p-16">
    <h1 className="text-4xl font-bold">{resumeObj.name}</h1>
    <ContactCard contact={resumeObj.contact} />
    <ListCard title="Skills" items={resumeObj.skills} />
    <ListCard title="Personal Qualities" items={resumeObj.personalQualities} />
    <ListCard title="Spoken Languages" items={resumeObj.languages} />
  </div>
);

export default ResumeLeftColumn;
