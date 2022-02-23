import React from "react";
import { motion } from "framer-motion";

import "./intro.css";

const MyIntro = () => {
  const img = require("../../img/bg.jpeg");

  const imgVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="intro">
      <div class="intro">
        <motion.img
          src={img}
          alt="img"
          variants={imgVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          class="info"
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <h1>Hello, I'm YANDI</h1>
            <p>Fullstack Web Developer</p>
          </div>

          <address>
            <span>Get in Touch: </span>
            <a href="mailto:wangyandi0406@gmail.com">wangyandi0406@gmail.com</a>
          </address>
        </motion.div>
      </div>
    </section>
  );
};

export default MyIntro;
