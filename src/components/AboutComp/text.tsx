"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `
Tech Innovation, Tailored Solutions: Where AI and Software Transform Today's Challenges.\n
In today's dynamic landscape, harnessing technology isn't just about staying afloat — it's about propelling forward. That's where we come in. Our suite of services spans software development, SaaS solutions, AI development, and more, all aimed at automating and enhancing foundational processes to streamline operations and drive efficiency.\n
But we're not content with merely scratching the surface. We're committed to unlocking the true potential of technology, especially in education. Through our expertise in EdTech, we leverage AI to personalize learning experiences, empowering educators and students alike to thrive in a digital age.\n
Furthermore, we recognize the power of community within educational institutions. That's why we've pioneered digital platforms that foster connections and collaboration in colleges and universities. By creating vibrant online communities, we facilitate knowledge sharing, networking, and support systems that enrich the educational journey.\n
Your vision is our expertise, and together, we can turn challenges into opportunities. Let's innovate, let's transform, and let's shape a brighter future — one tailored solution at a time.\n
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
