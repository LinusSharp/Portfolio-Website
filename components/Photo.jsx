"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative z-10"
        >
          <Image
            src="/assets/me.png"
            priority
            quality={100}
            fill
            alt="profile image"
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] xl:w-[520px] h-[320px] xl:h-[520px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"  // Adjusted center point
            cy="253"  // Adjusted center point
            r="252"   // Increased radius to fit the image better
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],  // Adjusted dash pattern
              rotate: [120, 360],  // Full rotation
            }}
            transition={{
              duration: 20,  // Slower rotation for smooth effect
              repeat: Infinity,
              repeatType: "reverce",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
