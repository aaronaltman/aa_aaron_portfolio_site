import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-auto text-center p-4">
      <small className="p-2">&copy; Aaron K. Altman 2024 and beyond</small>
      <small>
        <span className="">Powered by</span> React, Node.js, Next.js, Framer
        Motion, Vercel hosting, and Tailwind CSS.
      </small>
    </footer>
  );
}
