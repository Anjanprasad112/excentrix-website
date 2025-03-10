"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="bg-black text-white px-4 py-40 mt-10" data-aos="fade-up">
      <div className="text-center text-2xl font-semibold tracking-wide">ABOUT EXCENTRIX</div>
      <div className="px-2  lg:px-52 text-base tracking-wide">
        <br />
        <br />

        Tech Innovation, Tailored Solutions: Where AI and Software Transform
        Today&apos;s Challenges.
        <br />
        <br />
        In today&apos;s dynamic landscape, harnessing technology isn&apos;t just about
        staying afloat — it&apos;s about propelling forward. That&apos;s where we come in.
        Our suite of services spans software development, SaaS solutions, AI
        development, and more, all aimed at automating and enhancing
        foundational processes to streamline operations and drive efficiency.
        <br />
        <br />
        But we&apos;re not content with merely scratching the surface. We&apos;re
        committed to unlocking the true potential of technology, especially in
        education. Through our expertise in EdTech, we leverage AI to
        personalize learning experiences, empowering educators and students
        alike to thrive in a digital age.
        <br />
        <br />
        Furthermore, we recognize the power of community within educational
        institutions. That&apos;s why we&apos;ve pioneered digital platforms that foster
        connections and collaboration in colleges and universities. By creating
        vibrant online communities, we facilitate knowledge sharing, networking,
        and support systems that enrich the educational journey.
        <br />
        <br />
        Your vision is our expertise, and together, we can turn challenges into
        opportunities. Let&apos;s innovate, let&apos;s transform, and let&apos;s shape a
        brighter future — one tailored solution at a time.
        <br />
      </div>
    </div>
  );
};

export default About;
