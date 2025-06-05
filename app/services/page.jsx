"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "I build and maintain production-grade web applications from database schema to pixel-perfect UI. My toolbox includes TypeScript, Next.js, C#, and AWS, with an emphasis on clean architecture, automated testing, and continuous deployment.",
    href: "",
  },
  {
    num: "02",
    title: "Product Management",
    description:
      "At Pintly, I independently led the migration from a legacy ASP.NET MVC architecture to a decoupled system using Next.js and ASP.NET Core Web API. I scoped and prioritised features based on technical impact and business value, to ensure decisions met user and stakeholder needs.",
    href: "",
  },
  {
    num: "03",
    title: "Project Leadership",
    description:
      "Leading cross-functional teams is where I thrive. Using Agile/Scrum, I delivered the UNiDAYS Reverse Captcha project two weeks early, managing sprint planning, risk mitigation, and stakeholder communication.",
    href: "",
  },
  {
    num: "04",
    title: "UI / UX Engineering",
    description:
      "Great products start with great experiences. I prototype in Figma and ship accessible, responsive interfaces with Tailwind CSS and React, ensuring design consistency and performance across devices.",
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
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href || "#contact"}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl " />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;