import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
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

type ProjectProps = (typeof projectsData)[number];

function Project({ description, title, imageUrl, tags }: ProjectProps) {
  return (
    <section className="bg-gray-100 max-w-[42rem] border relative border-black/5 overflow-hidden sm:pr-8 ">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => (
          <li
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className="absolute top-8 -right-40"
      />
    </section>
  );
}
