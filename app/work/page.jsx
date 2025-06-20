"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "Pintly Intern",
    descripton:
      "Contributed as a Software Engineering Intern at Pintly (Jan–Jun 2025), leading the transition from a legacy ASP.NET MVC monolith to a decoupled architecture powered by a Next.js frontend and an ASP.NET Core Web API backend. Refactored backend logic, developed RESTful APIs in C#, and optimised database migrations to improve performance and scalability.",
    stack: [
      { name: "Next.js" },
      { name: "ASP.NET Core" },
      { name: "C#" },
      { name: "React.js" },
    ],
    image: "/assets/work/pintly.png",
    github: "",
    live: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Reverse Captcha",
    descripton:
      "Led a UNiDAYS-sponsored project, Reverse Captcha, where I managed a team of developers to create a novel approach to CAPTCHA validation. My role involved overseeing the full development lifecycle using Flutter and Dart, with backend support from Python.",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Python" }],
    image: "/assets/work/thumb1.png",
    github: "https://projects.cs.nott.ac.uk/comp2002/2023-2024/team35_project",
    live: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Website Design",
    descripton:
      "Redesigned the website for Resilient Health to improve user experience and SEO performance. The overhaul included UI/UX improvements using Figma, and seamless integration into WordPress for scalability and content management.",
    stack: [{ name: "Figma" }, { name: "WordPress" }],
    image: "/assets/work/thumb2.png",
    github: "",
    live: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Portfolio Website",
    descripton:
      "Developed my personal portfolio website from scratch using Next.js and Tailwind CSS. The site showcases my skills, projects, and experience while leveraging AWS for secure and scalable hosting.",
    stack: [{ name: "Next.js" }, { name: "AWS" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/playhavoc/website",
    live: "https://linus-sharp.co.uk/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* ───────────────────── Left panel ───────────────────── */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.descripton}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={50}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={50}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Git Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* ───────────────────── Right panel (slider) ───────────────────── */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative group flex justify-center items-center bg-pink-50/20 h-[300px] sm:h-[350px] md:h-[400px] xl:h-[460px]">
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    {/* image */}
                    <Image
                      src={proj.image}
                      fill
                      className="object-cover"
                      alt={proj.title}
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider navigation buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
