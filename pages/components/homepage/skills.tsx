/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export interface ISkillsProps {}

const skills = [
  {
    name: "React",
    imgSrc: "/react.svg",
  },
  {
    name: "Html",
    imgSrc: "/html.svg",
  },
  {
    name: "Css",
    imgSrc: "/css.svg",
  },
  {
    name: "Redux",
    imgSrc: "/redux.svg",
  },
  {
    name: "TypeScript",
    imgSrc: "/typescript.svg",
  },
  {
    name: "Sass",
    imgSrc: "/sass.svg",
  },
  {
    name: "Tailwind",
    imgSrc: "/tailwind.svg",
  },
  {
    name: "Firebase",
    imgSrc: "/firebase.svg",
  },
  {
    name: "Styled Components",
    imgSrc: "/styled.svg",
  },
  {
    name: "Bootstrap",
    imgSrc: "/bootstrap.svg",
  },
  {
    name: "Next js",
    imgSrc: "/next.svg",
  },
  {
    name: "Git",
    imgSrc: "/git.svg",
  },
  {
    name: "Javascript",
    imgSrc: "/js.svg",
  },
];

function Skills(props: ISkillsProps) {
  return (
    <div className='flex flex-col justify-between items-center md:px-20 lg:px-36 md:py-10'>
      <motion.div
        className='flex flex-wrap justify-center items-center'
        initial={{ opacity: 0, translateY: 80 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='w-[75px] h-[75px] flex justify-center items-center rounded-full  sm:mx-4  mx-1  py-1 my-5'
            whileHover={{
              scale: 1.15,
            }}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <img
              src={skill.imgSrc}
              alt=''
              title={skill.name}
              className=' md:w-[35px] w-[30px]'
            />
            {/* <p>{skill.name}</p> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default Skills;
