import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { divisions } from "../constants";
import { fadeIn } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const DivisionsCard = ({ index, title, icon, id }) => {
  return (
    <Tilt className="xs:w-[220px] ww-full relative">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
        onClick={() => (window.location.href = `${id}`)}
      >
        <div
          options={{
            /* opetions for the tilt cards*/ max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] pt-3 pb-2 
           px-6 min-h-[20px] flex justify-evenly 
           items-center flex-col relative"
        >
          <h3
            className="text-white text-[16px] font-bold
          text-center pb-2"
          >
            {title}
          </h3>
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-white bg-opacity-5 blur-md"></div>{" "}
      </motion.div>
    </Tilt>
  );
};

const ProjectOverview = () => {
  return (
    <>
      {/* <motion className="div" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Divisions</h2>
      </motion> */}

      <div
        className="mt-64 pb-32 flex flex-wrap  justify-evenly 
           items-center"
      >
        {divisions.map((division, index) => (
          <DivisionsCard key={division.title} index={index} {...division} />
        ))}
      </div>
    </>
  );
};

// component, "id name"
export default SectionWrapper(ProjectOverview, "project");
