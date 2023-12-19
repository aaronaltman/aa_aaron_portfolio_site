"use client";

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { SendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%, 34rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 mb-3 -mt-5">
        Please feel free to contact me at aka@rapidinsights.ai
      </p>
      <form className="flex flex-col" action={SendEmail}>
        <input
          placeholder="Enter Your Email"
          className="h-14 p-4 rounded-lg borderBlack"
          type="email"
          required={true}
          maxLength={500}
        />
        <textarea
          placeholder="Your Message"
          className="h-52 mt-3 mb-3 borderBlack p-4"
          required={true}
          maxLength={500}
        />
        <button
          className="group flex items-center justify-center gap-3 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
