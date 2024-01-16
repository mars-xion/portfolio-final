import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF.js worker from an external cdn
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ProjectPDFViewer = ({ division }) => {
  // Assuming you have a mapping of divisions to their corresponding PDF files
  // const divisionPDFs = {
  //   division1: "path/to/division1.pdf",
  //   division2: "path/to/division2.pdf",
  //   // Add more divisions and their PDF paths as needed
  // };
  // const pdfFile = divisionPDFs[division] || "default.pdf"; // Fallback to a default PDF if division is not found
  return (
    <div>
      <h2>PDF Viewer for {division}</h2>
      {/* <Document file={pdfFile}>
          <Page pageNumber={1} />
          {/* You can add more <Page /> components if you want to display more pages */}
      {/* </Document> */}
    </div>
  );
};

export default ProjectPDFViewer;
