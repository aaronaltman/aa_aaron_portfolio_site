"use client";

import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl flex items-center justify-center"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
