"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Sevillana } from "next/font/google";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I have a strong background in web development, with extensive experience in languages like C, Java, and Python. I've worked on a variety of projects, including full-stack development for my personal portfolio and the UNiDAYS-sponsored app project.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "In addition to my coding abilities, I am interested in creating intuitive and user-friendly interfaces. My focus is on ensuring seamless user experiences, drawing from my project management work where I balanced client requirements with technical execution.",
    href: "",
  },
  {
    num: "03",
    title: "API creation",
    description:
      "Through my work in computer science, I have developed strong skills in API design and implementation. I am proficient in building scalable APIs that effectively communicate between the front-end and back-end systems.",
    href: "",
  },
  {
    num: "04",
    title: "Project Leadership",
    description:
      "As the team leader of a UNiDAYS-sponsored project, I managed a group of software engineers to deliver a high-quality app. This role helped me refine my leadership and communication skills.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transiton-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duratoin-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
                {/* description */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
