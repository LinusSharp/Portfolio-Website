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

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Reverse Captcha",
    descripton:
      "THis is going to be my unidays project, i was team leader, it was very insightfull this is just a polace holder for now. I lead the team",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Python" }],
    image: "/assets/work/thumb1.png",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Website Design",
    descripton:
      "I worked for resilient health, i overhalled their website to allow for better SEO, and better usablity",
    stack: [{ name: "Figma" }, { name: "wordpress" }],
    image: "/assets/work/thumb2.png",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Portfolio Website",
    descripton:
      "This is the portfolio website, you are currently on the page for it, i hope you like it",
    stack: [{ name: "Next.js" }, { name: "AWS" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div>text</div>
          <div>slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
