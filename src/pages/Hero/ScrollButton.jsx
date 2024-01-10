import { motion } from "framer-motion";
import ScrollMessage from "./ScrollMessage";

const ScrollButton = () => {
  return (
    <div
      className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative"
      title={"Click here to scroll to next section"}
    >
      <ScrollMessage />
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
  );
};

export default ScrollButton;
