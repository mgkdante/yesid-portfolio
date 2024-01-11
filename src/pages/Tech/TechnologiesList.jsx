import React from "react";
import Tilt from "react-parallax-tilt";
import { technologies } from "../../data/index.js";
import { InfoCard } from "../../components/ui/InfoCard.jsx";

const TechnologiesList = () => (
  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 my-10">
    {technologies.map((technology, index) => (
      <Tilt key={technology.name}>
        <div key={technology.name}>
          <InfoCard
            key={technology.name}
            index={index}
            title={technology.name}
            icon={technology.icon}
          />
        </div>
      </Tilt>
    ))}
  </div>
);

export default TechnologiesList;
