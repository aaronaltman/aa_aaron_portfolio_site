"use client";
import Image from "next/image";
import React from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center mt-[2rem] items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Aaron K. Altman Bio"
              src="https://wp.rapidinsights.ai/wp-content/uploads/2023/10/how-to-market-new-legal-firm.png"
              width={250}
              height={250}
              quality={89}
              priority={true}
              className="rounded-full h-24 w-24 object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-900"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mt-4 mb-10 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.2,
          duration: 0.7,
        }}
      >
        <span className="font-bold">Hello, I&apos;m Aaron K. Altman.</span>{" "}
        I&apos;m a <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span>of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 outline-none transition text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Contact Me
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>

        <a className="bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer">
          Download CV <HiDownload />
        </a>

        <a className="bg-white p-4 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>

        <a className="bg-white p-4 flex items-center gap-2 rounded-full">
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
