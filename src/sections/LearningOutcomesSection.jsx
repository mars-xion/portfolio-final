import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { LAData, LAprojects } from "../constants";
import { SectionWrapper } from "../hoc";
import React, { useState, useEffect } from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  position,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full
             flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{position}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const LearningOutcomeSection = () => {
  const data = LAData.jobs;
  // Set initial selected tab
  const [selectedTab, setSelectedTab] = useState(data[0].expData.position);
  // filter project depininding on the type of the Learning Agreements
  let filteredProjects = [];
  if (selectedTab === "All Projects") {
    // Show all projects when the position is "All"
    filteredProjects = LAprojects;
  } else {
    // Filter projects based on the selected position
    filteredProjects = LAprojects.filter(
      (LAproject) => LAproject.position === selectedTab
    );
  }
  // Log the selected tab and filtered projects whenever the component renders
  console.log("Selected Tab:", selectedTab);
  console.log("Filtered Projects:", filteredProjects);
  // Log state changes when the component mounts and whenever selectedTab changes
  useEffect(() => {
    console.log("Selected Tab:", selectedTab);
  }, [selectedTab]); // useEffect will run whenever selectedTab change
  const handleTabChange = (value) => {
    console.log("Selected Tab (change):", value); // Log the selected tab value
    // filteredProjects = LAprojects.filter((LAproject) => LAproject.position === value);
    console.log("Filtered Projects (change):", filteredProjects); // Log the filtered projects
    setSelectedTab(value);
  };
  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      orientation="vertical"
      className="max-w-6xl"
    >
      <TabsHeader className="w-44 p-4">
        {data.map(({ expData }) => (
          <Tab
            key={expData.position}
            value={expData.position}
            style={{
              color: selectedTab === expData.position ? "#4B527E" : "white",
              borderRight:
                selectedTab === expData.position
                  ? "4px solid #4B527E"
                  : "2px solid transparent",
              backgroundColor:
                selectedTab === expData.position
                  ? "rgba(128, 0, 128, 0.1)" // Background color with low opacity for the selected tab
                  : "transparent",
              paddingRight: "8px",
              paddingLeft: "12px", // Adjust padding between text and border
              marginBottom: "15px", // Adjust vertical spacing between tabs
              fontSize: selectedTab === expData.position ? "20px" : "18px",
              cursor: "pointer", // Show pointer cursor on hover
              paddingTop: "8px", // Add padding within the background box
              paddingBottom: "8px", // Add padding within the background box
            }}
            onClick={() => handleTabChange(expData.position)}
          >
            {expData.title}
          </Tab>
        ))}
        <span
          className={`border-r-2 border-purple-500 h-auto absolute top-4 bottom-8 right-4 m-auto`}
        />
      </TabsHeader>
      <div className="p-4" key={selectedTab}>
        <TabsBody>
          {data.map(({ expData }) => (
            <TabPanel
              key={expData.position}
              value={expData.position}
              className="py-0"
            >
              <h2>{expData.position}</h2>
              <h3>{expData.period}</h3>
              <br />
              <p>{expData.details.join("\n")}</p>
              {filteredProjects.length > 0 ? (
                <div className="mt-20 flex flex-wrap gap-7">
                  {filteredProjects.map((LAprojects, index) => (
                    <div key={`project-${index}`}>
                      {/* Applicant name:  {ProjectCard.name} */}
                      <ProjectCard index={index} {...LAprojects} />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <br />
                  <br />
                  <p>
                    No related projects yet for the selected Learning agreement.
                  </p>
                </>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </div>
    </Tabs>
  );
};

export default SectionWrapper(LearningOutcomeSection, "learning-outcomes");