import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { hero } from "../constants/index.js";

const Hero = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 5000ms = 5s

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);
  return (
    <section className="w-full h-[calc(100vh-100px)] flex flex-col justify-between items-center relative mx-auto pb-16">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="text-justify">
          <h2 className={`${styles.heroHeadText} text-white`}>{hero.title}</h2>
          <p
            className={`mt-4 text-secondary text-[17px] w-full leading-[30px] text-justify`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              {hero.role}
            </span>{" "}
            {hero.description}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <a href="#about" className="z-10 w-full flex justify-center items-center">
        <div
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative"
          title={"Click here to scroll to next section"}
        >
          {showMessage && (
            <div className="absolute top-0 right-full mr-2 w-32 text-center text-white p-2 rounded">
              Click here to scroll to the next section
            </div>
          )}
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-white mb-1"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
