import { motion } from "framer-motion";
import { slideIn } from "../../components/ui/animation.js";
import { EarthCanvas } from "../../components";

const EarthCanvasWrapper = () => (
  <motion.div
    variants={slideIn("right", "tween", 0.2, 1)}
    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  >
    <EarthCanvas />
  </motion.div>
);

export default EarthCanvasWrapper;
