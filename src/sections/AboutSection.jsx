import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[220px] ww-full relative">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            /* opetions for the tilt cards*/ max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-2 
           px-12 min-h-[20px] flex justify-evenly 
           items-center flex-col relative"
        >
          <img
            src={icon}
            alt={title}
            className="w-14 h-14 object-contain relative z-10"
            style={{ width: "100px", height: "100px" }}
          />
          <h3
            className="text-white text-[14px] font-bold pt-1
          text-center relative z-10"
          >
            {title}
          </h3>
          <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-white bg-opacity-5 blur-md"></div>{" "}
        </div>
      </motion.div>
    </Tilt>
  );
};

const AboutSection = () => {
  return (
    <>
      <div className="pt-16">
        <motion className="div" variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About.</h2>
        </motion>

        {/*diraction , type, delay, duration*/}
        <motion.p
          variants={fadeIn("", "", 0.1, 0.1)}
          className="mt-4 text-secondary text-[14px] max-w-6xl leading-[25px]"
        >
          I am Mazoun Al Habsi, currently studying semster 7 ICT and Media
          Design at Fontys Hogescholen, I'm passionate about 3D websites,
          interactive elements, and building stunning user friendly solutions. I
          have enhanced my coding skills in HTML, CSS, JavaScript, Three.js, and
          more. While now, I am learning React and Node.js. I am able to work in
          different designing programs, including Photoshop, InDesign and
          Illustrator. In my spare time, I enjoy trying new things. I
          occasionally read books, watch movies, take photos, play video games,
          and every once in a while I attempt to play sports.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-10 pb-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

// component, "id name"
export default SectionWrapper(AboutSection, "about");
