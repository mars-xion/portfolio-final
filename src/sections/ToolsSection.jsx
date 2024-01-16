import BallCanvas from "../canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ToolsSection = () => {
  return (
    <>
      <motion className="div" variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools and Languages</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />{" "}
            {/* passing icons from the BallCanvas class */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ToolsSection, "");
