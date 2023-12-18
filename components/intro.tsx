import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div>
          <Image
            alt="Aaron K. Altman Bio"
            src="https://wp.rapidinsights.ai/wp-content/uploads/2023/10/how-to-market-new-legal-firm.png"
            width={150}
            height={150}
            quality={90}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
