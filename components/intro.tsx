import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="relative">
          <Image
            alt="Aaron K. Altman Bio"
            src="https://wp.rapidinsights.ai/wp-content/uploads/2023/10/how-to-market-new-legal-firm.png"
            width={150}
            height={150}
            quality={90}
            priority={true}
            className="rounded-full h-24 w-24 object-cover border-[0.35rem] border-white shadow-xl"
          />
          <span className="text-4xl absolute bottom-0 right-0">👋</span>
        </div>
      </div>
    </section>
  );
}
