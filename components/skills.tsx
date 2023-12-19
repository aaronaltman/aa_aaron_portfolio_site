"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Skills() {
  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-[28rem] text-center sm:mb-40">
      <motion.div id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap max-w-lg justify-center items-center">
          {skillsData.map((skill, index) => (
            <li className="p-4 flex flex-wrap justify-center" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
