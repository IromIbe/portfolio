import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

const compName = [
  {
    name: "Nugi",
    year: "January - May 2022",
    role: "intern",
    duties: [
      "collaborated in cross functional development teams with senior developers to build interactive mobile first web applications",
      " Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript",
      " Work with a variety of different languages, platforms, frameworks, such as JavaScript, TypeScript, React, Next js, Redux",
    ],
  },
  {
    name: "Tilte",
    year: "June - September 2022",
    role: "intern",
    duties: [
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Tilte's web applications",
      "integrated end to end testing with Cypress",
    ],
  },
];

function Experience() {
  const [company, setCompany] = useState<string>("Nugi");
  const activeComp = compName.find(
    (companyName) => companyName.name === company
  );

  return (
    <motion.div
      className='experience md:px-20 lg:px-36'
      initial={{ opacity: 0, translateY: 80 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div>
        <h1 className='hr-lines text-[#b6e3ff]  lg:text-4xl text-[22px] lg:mb-6 mb-2 tracking-wide font-bold'>
          Experience/Internship
        </h1>
        <div className='flex sm:flex-row flex-col justify-between items-start'>
          <div className='exp-role flex sm:flex-col flex-row mb-6 sm:mb-0'>
            {compName.map((comp, index) => (
              <div
                className={` ${
                  company === comp.name
                    ? " border-b-2 sm:border-b-0 sm:border-l-2   border-[#b6e3ff] "
                    : "sm:border-l-2 sm:border-b-0 border-b-2  border-[#b6e3ff20]"
                }`}
                onClick={() => {
                  setCompany(comp.name);
                }}
                key={index}
              >
                <h1
                  className={`text-[14px] sm:pl-6 px-10 sm:pr-10 md:pr-[4.3rem] py-[10px] hover:bg-[#b6e3ff10] capitalize cursor-pointer hover:text-[orange] ${
                    company === comp.name
                      ? "text-[orange] transition ease-in-out delay-50 bg-[#b6e3ff10]"
                      : "text-[#eaeef2]"
                  }`}
                >
                  {comp.name}
                </h1>
              </div>
            ))}
          </div>
          <div className='flex-[.95]'>
            {activeComp && (
              <div>
                <div className='mb-4'>
                  <p className='text-[20px] capitalize'>
                    {activeComp.role}{" "}
                    <span className='text-[orange]'>@ {activeComp.name}</span>
                  </p>
                  <p className='text-[#b6e3ff90] text-sm'>{activeComp.year}</p>
                </div>
                <div className='details'>
                  {activeComp.duties.map((duty, i) => (
                    <p key={i} className='mb-6 leading-7 flex  items-start'>
                      <span className='py-[14px] mr-6 text-[9px] text-[orange] font-bold'>
                        <FaLocationArrow />
                      </span>
                      {duty}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Experience;
