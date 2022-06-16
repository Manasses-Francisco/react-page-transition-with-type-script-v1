import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

import Image3 from "../images/img-3.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

export function Services() {
  return (
    <motion.div variants={animationThree} initial="hidden" animate="visible">
      <Header />
      <Hero
        image={Image3}
        title="Look at this bird"
        desc="Can you believe this?"
      />
    </motion.div>
  );
}
