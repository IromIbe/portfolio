import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Project({}: Props) {
  return (
    <motion.div
      className='projects md:px-20 lg:px-36 pt-6'
      initial={{ opacity: 0, translateY: 80 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div>
        <h1 className='hr-lines text-[#b6e3ff] capitalize lg:text-4xl text-[20px] lg:mb-8 mb-2 tracking-wide font-bold'>
          my projects
        </h1>
      </div>
    </motion.div>
  );
}

export default Project;
