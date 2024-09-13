"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "linuscolesharp@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Nottingham",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // Track success state
  const [errorTimeoutId, setErrorTimeoutId] = useState(null); // Track error timeout ID
  const [successTimeoutId, setSuccessTimeoutId] = useState(null); // Track success timeout ID

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSuccess(false);

      if (errorTimeoutId) {
        clearTimeout(errorTimeoutId);
      }

      const newErrorTimeoutId = setTimeout(() => {
        setErrors({});
      }, 5000);
      setErrorTimeoutId(newErrorTimeoutId);

      return;
    }

    setErrors({}); 

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);

        if (successTimeoutId) {
          clearTimeout(successTimeoutId);
        }

        const newSuccessTimeoutId = setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
        setSuccessTimeoutId(newSuccessTimeoutId);

        // Reset form fields
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        alert("Error sending message.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Get in touch!</h3>

              <p className="text-white/60">
                I am highly motivated and always looking for new opportunities.
                Reach out!
              </p>

              {/* Display success message */}
              {isSuccess && (
                <div className="bg-accent text-primary p-4 rounded-md">
                  <p>Message sent successfully! I will get back to you soon.</p>
                </div>
              )}

              {/* Display error message if there are validation errors */}
              {Object.keys(errors).length > 0 && (
                <div className="bg-red-500 text-white p-4 rounded-md">
                  <p>Please fill in the required fields.</p>
                </div>
              )}

              {/* input fields with validation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>

              {/* select */}
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="Contact">General Inquiry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[200px]"
                  placeholder="Type your message here"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* submit button */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;



