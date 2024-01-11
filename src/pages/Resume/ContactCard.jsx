import React from "react";
import { githubIcon, linkedin } from "../../assets/index.js";

const ContactCard = ({ contact }) => {
  return (
    <div>
      <h2 className="text-xl">Contact</h2>
      <div className="flex flex-col sm:items-center md:items-start p-4">
        <p>{contact.location}</p>
        <p>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          <a href={contact.website} target="_blank" rel="noopener noreferrer">
            {contact.website}
          </a>
        </p>
        <div className="flex pt-3 gap-10">
          <a
            href="https://www.linkedin.com/in/otaloray/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mgkdante"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
