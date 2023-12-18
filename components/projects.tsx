import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        <ul>
          {projectsData.map((project) => (
            <li key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
