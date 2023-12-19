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
        <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <li
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
