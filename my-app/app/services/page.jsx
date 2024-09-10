"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a great web dev, very motivated and looking for work, pls message me i need it",
    href: "",
  },
  {
    num: "02",
    title: "Web Design",
    description:
      "I am a great web dev, very motivated and looking for work, pls message me i need it",
    href: "",
  },
  {
    num: "03",
    title: "API creation",
    description:
      "I am a great web dev, very motivated and looking for work, pls message me i need it",
    href: "",
  },
  {
    num: "04",
    title: "Leadership",
    description:
      "I am a great web dev, very motivated and looking for work, pls message me i need it",
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
        >
          {services.map((services, index) => {
            return <div key={index}>
              <div>
                <div>{services.num}</div>
                <Link href={services.href}>
                <BsArrowDownRight />
                </Link>
              </div>
            </div>
          })}

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
