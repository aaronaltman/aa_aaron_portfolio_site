"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {experiencesData.map((experience, index) => (
          <motion.li
            key={experience.title}
            custom={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            {experience.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
