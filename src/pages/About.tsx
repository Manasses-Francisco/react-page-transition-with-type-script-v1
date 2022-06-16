import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

import Image2 from "../images/img-2.jpg";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";

export function About() {
  return (
    <motion.div
      variants={animationTwo}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header />
      <Hero image={Image2} title="Beautiful views" desc="Never seen before" />
    </motion.div>
  );
}
