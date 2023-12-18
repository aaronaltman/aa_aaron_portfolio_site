import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        <ul>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
