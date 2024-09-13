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
      "With expertise in web development using React, Next.js, and Tailwind CSS, I’ve built full-stack applications, including my personal portfolio and collaborative projects for clients like UNiDAYS.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I combine design principles with technical expertise to create user-centric interfaces. My experience in project management ensures a focus on seamless and intuitive user experiences in all of my work.",
    href: "",
  },
  {
    num: "03",
    title: "API Creation",
    description:
      "My skills in API development enable me to design and implement scalable, efficient systems. I focus on ensuring smooth communication between front-end and back-end, ensuring robust application performance.",
    href: "",
  },
  {
    num: "04",
    title: "Project Leadership",
    description:
      "Leading the UNiDAYS-sponsored project, I managed a team of developers to deliver a high-quality application, refining my skills in leadership, communication, and cross-functional collaboration.",
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
