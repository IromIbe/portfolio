import * as React from "react";
import { motion } from "framer-motion";

export interface IAboutMeProps {}

function AboutMe(props: IAboutMeProps) {
  return (
    <motion.div
      className=' lg:pt-0 pt-4 md:px-20 lg:px-36'
      initial={{ opacity: 0, translateY: 80 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className='hr-lines text-[#b6e3ff]  lg:text-4xl text-[22px] lg:mb-6 mb-2 tracking-wide font-bold'>
        About Me
      </h1>
      <div className='leading-8'>
        <p className='mb-6'>
          I’m a 19 year old front end developer with a knack for creativity,
          building interactive and user friendly web applications with code.
        </p>
        <p className='mb-6'>
          Programming was a new found interest at age 16. Being Maths inclined,
          I realized it entailed what I love doing which is the whole
          technicality of thinking logically and the thrill that comes with
          solving problems.
        </p>
        <p className='mb-6'>
          Two years down the line, I wrote my first line of code, which marked
          the beginning of a journey of learning, building and growing. So far,
          I’ve been able to horn my skills from playing around with html, to
          building interactive web applications with javascript, using
          javascript frameworks like React and integrating web applications with
          Redux. Starting out in tech is a milestone for me and a necessary risk
          I took and I’m super glad and proud of my growth so far.{" "}
        </p>
        <p>
          I recently graduated from a six month intensive bootcamp program. I
          would be super excited to join your team where I can help your company
          achieve its goals while increasing my knowledge base through
          collaborative work.
        </p>
      </div>
    </motion.div>
  );
}
export default AboutMe;
