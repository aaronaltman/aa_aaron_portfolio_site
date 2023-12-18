import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron K. Altman | Software Engineer | Personal Portfolio",
  description: "Aaron K. Altman's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className="bg-[#fbe2e3] absolute top-[6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]"></div>
        <div></div>
        {children}
      </body>
    </html>
  );
}
