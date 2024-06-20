"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewritter-effect";
import { SparklesPreview } from "./title";
export function HeroComp() {
  const words = [
    {
      text: "SOP",
    },
    {
      text: "Automation",
    },
    {
      text: "and",
    },
    {
      text: "AI",
    },
    {
      text: "Solutions",
    //   className: "text-blue-500 dark:text-blue-500",
    },                                
  ];
  return (
    <div>
    <SparklesPreview/>
    <div className="my-4">
      <TypewriterEffectSmooth words={words} />
      <p className="text-customGray font-medium text-base sm:text-xl  text-center my-4">
        Go from long redundant processess <br />to one-click solutions.
      </p>
      <div className="flex justify-center items-center gap-4 mt-8">
      <Link className="bg-black hover:text-gray-800  hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded-md shadow transition duration-100 ease-in-out" href="#contact">Get Started</Link>
      <Link  className="bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow transition duration-100 ease-in-out" href="#contact">Learn More</Link>
    </div>
      
    </div>
    
    </div>
  );
}
