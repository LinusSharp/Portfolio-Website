"use client";
import { title } from "process";
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcssm, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Linus Sharp",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 years",
    },
    {
      fieldName: "Email",
      fieldValue: "linuscolesharp@gmail.com",
    },
    {
      fieldName: "Nationnality",
      fieldValue: "British & French",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French & Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      company: "Resilient Health",
      position: "Website Designer",
      duration: "Summer 2024",
    },
    {
      company: "UNiDAYS x UoN",
      position: "Team Leader",
      duration: "Oct 2023 - Jul 2024",
    },
    {
      company: "Fox Cafe",
      position: "Barista",
      duration: "Jun 2023- Oct 2023",
    },
    {
      company: "Le Pain Quotidien",
      position: "Barista",
      duration: "Jan 2022 - Aug 2022",
    },
    {
      company: "Aviva",
      position: "Work Experience",
      duration: "April 2019",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      insititution: "University of Nottingham",
      degree: "Bsc Computer Science",
      duration: "2022 - 2025",
    },
    {
      insititution: "Collingham College",
      degree: "A level - Computer Science",
      duration: "2021 - 2022",
    },
    {
      insititution: "Lycee St Jean - France",
      degree: "French Baccalaureat",
      duration: "2018 - 2021",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcssm />,
      name: "tailwind.css",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
