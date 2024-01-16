import { styles } from "../../styles.js";
import { ComputersCanvas } from "../../components";
import HeroTextCard from "./HeroTextCard";
import ScrollButton from "./ScrollButton";
import { sendGAEvent } from "../../utils/gaEvents.js";

const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh-100px)] flex flex-col justify-between items-center relative mx-auto pb-16">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <HeroTextCard />
      </div>
      <ComputersCanvas />
      <a
        href="#overview"
        className="z-10 w-full flex justify-center items-center"
      >
        <ScrollButton />
      </a>
    </section>
  );
};

export default HeroSection;
