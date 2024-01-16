import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { portfolioData } from "../constants/projects"; // Import the data from data.js

const Portfolio = () => {
  // State to track the currently selected section
  const [selectedSection, setSelectedSection] = useState(
    "Design Specification"
  );

  // Ref to store references to section elements
  const sectionRefs = useRef({});

  // Effect to handle scrolling to the selected section when it changes
  useEffect(() => {
    // Get the reference to the selected section
    const selectedRef = sectionRefs.current[selectedSection];
    if (selectedRef) {
      // Scroll smoothly to the selected section
      selectedRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSection]);

  // Function to handle clicking on a section title in the navigation
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex">
      {/* Fixed navigation bar on the left */}
      <div className="fixed left-20 p-4 h-screen bg-transparent">
        <nav>
          <ul className="list-none pl-0">
            {/* Render the section titles as buttons in the navigation */}
            {portfolioData.sections.map((section) => (
              <li className="mb-2" key={section.title}>
                <button
                  // Apply styles based on selected section
                  className={`text-blue-600 hover:underline hover:bg-transparent ${
                    selectedSection === section.title ? "font-semibold" : ""
                  }`}
                  onClick={() => handleSectionClick(section.title)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Main content area with section details */}
      <div className="w-3/4 p-4" style={{ marginLeft: "25%" }}>
        {/* Iterate through sections and render their contents */}
        {portfolioData.sections.map((section, index) => (
          <div
            key={section.title}
            // Store a reference to this section for scrolling
            ref={(ref) => (sectionRefs.current[section.title] = ref)}
          >
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            {/* Iterate through content in each section */}
            {section.contents.map((content, contentIndex) => (
              <div className="mb-4" key={contentIndex}>
                <h4 className="font-semibold">{content.subtitle}</h4>
                <p>{content.description}</p>
                {/* Render images and links if available */}
                {content.image && (
                  <img
                    src={content.image}
                    alt={content.subtitle}
                    className="my-4"
                  />
                )}
                {content.links.map((link, linkIndex) => (
                  <p key={linkIndex}>
                    <a href={link.url} className="text-blue-600">
                      {link.text}
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
