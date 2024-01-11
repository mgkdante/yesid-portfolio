import { GenerateTextCard } from "../../components/ui/GenerateTextCard.jsx";
import { hero } from "../../data/index.js";
import { styles } from "../../styles.js";

const HeroTextCard = () => {
  return (
    <div className="text-justify">
      <GenerateTextCard
        className={`${styles.sectionHeadText}`}
        words={hero.title}
      />
      <div
        className={`mt-4 text-secondary text-[20px] w-full leading-[30px] text-justify font-medium`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-[2rem]">
          {hero.role}
        </span>{" "}
        <GenerateTextCard className="font-semibold" words={hero.description} />
      </div>
    </div>
  );
};

export default HeroTextCard;
