import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

import Image1 from "../images/img-1.jpg";

import { motion } from "framer-motion";
import { animationOne } from "../animations";

export function Home() {
  return (
    <motion.div
      variants={animationOne}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header />
      <Hero
        image={Image1}
        title="Experience Nature"
        desc="Once in a lifetime"
      />
    </motion.div>
  );
}
