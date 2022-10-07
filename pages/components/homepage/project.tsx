/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import useCollapse from "react-collapsed";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

type Props = {};

const projectData = [
  {
    name: "crwn clothing",
    imgSrc: "/crwn.svg",
    about:
      "An e-commerce website designed to make  shopping of fashionable wears easier. Crwn Clothing offers payment services to enable a fast and efficient shopping experience. With the add to cart feature, shoppers can purchase multiple items at one time, resulting in a more seamless customer experience.",
    gitLink: "https://github.com/IromIbe/Crwn-clothing",
    liveLink: "https://crwn-clothing-stall.herokuapp.com/",
    stack: ["react", "firebase", "redux", "sass", "stripe"],
  },
  {
    name: "resume builder",
    imgSrc: "/resume.svg",
    about:
      "Have you ever been stuck finding the right layout for your resume? Then this web application is for you! It helps users fit in the best and necessary information needed in their resume making them highly employable, while cutting down time spent in writing the perfect resume.",
    gitLink: "https://github.com/IromIbe/resume-builder",
    liveLink: "https://resume-builder-orcin.vercel.app/",
    stack: ["next Js", "tailwindcss"],
  },
  {
    name: "M-zone",
    imgSrc: "/zone.svg",
    about:
      "This site is for movie lovers! The goal of this web application is to enable users find the best movie recommendations, see movies currently available, anticipate for upcoming movies, view most rated movies while keeping track of movies they are interested in by adding them to their watchlist.",
    gitLink: "https://github.com/IromIbe/Animes",
    liveLink: "https://animes-nine.vercel.app/",
    stack: ["next Js", "Typescript", "tailwindcss"],
  },
  // {
  //   name: "",
  //   imgSrc: "",
  //   about: "",
  //   gitLink: "",
  //   liveLink: "",
  //   stack: [],
  // },
  // {
  //   name: "",
  //   imgSrc: "",
  //   about: "",
  //   gitLink: "",
  //   liveLink: "",
  //   stack: [],
  // },
];
const routes = [
  "https://nugi-report-f8spr4ssj-iromibe.vercel.app/",
  "https://nugi-report-f8spr4ssj-iromibe.vercel.app/dashboard/overview",
  "https://nugi-report-f8spr4ssj-iromibe.vercel.app/dashboard/add_report",
  "https://nugi-report-f8spr4ssj-iromibe.vercel.app/change_password",
];

function Project({}: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
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
        <h1 className='hr-lines text-[#b6e3ff] capitalize lg:text-4xl text-[22px] lg:mb-6 mb-2 tracking-wide font-bold'>
          Personal projects
        </h1>
        <div className='flex flex-col'>
          {projectData.map((project, idx) => (
            <div key={idx}>
              <h2
                className={`md:text-[26px] text-[20px] my-2 font-bold capitalize text-[#b6e3ff] flex
                ${idx % 2 !== 0 ? " sm:justify-end" : "justify-start"}`}
              >
                {project.name}
              </h2>

              <div
                className={`flex flex-col sm:flex-row items-start pb-4 mb-4 ${
                  idx % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className='image'>
                  <img
                    src={project.imgSrc}
                    alt=''
                    className='w-full h-full rounded-md'
                  />
                </div>
                <div
                  className={`about relative
                })]  flex flex-col justify-center ${
                  idx % 2 !== 0 ? " items-end left-15" : "right-15 items-end"
                }`}
                >
                  <p className='bg-[#111529] rounded-md leading-[27px] py-3 px-3 text-[15px] '>
                    {project.about}
                  </p>
                  <div className='flex my-2'>
                    {project.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className='sm:pl-4 sm:pr-0 pr-2 text-[14px] capitalize text-[#b6e3ff90]'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className='flex'>
                    <Link href={project.liveLink}>
                      <span
                        className='text-[orange] hover:text-[#b6e3ff] ml-4 text-[22px]'
                        title='page link'
                      >
                        <HiOutlineExternalLink />
                      </span>
                    </Link>
                    <Link href={project.gitLink}>
                      <span
                        className='text-[orange] hover:text-[#b6e3ff] ml-4 text-[22px]'
                        title='github'
                      >
                        <BsGithub />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h1 className='hr-lines md:text-[26px] text-[20px] my-2 font-bold capitalize text-[#b6e3ff]'>
              Nugi Report
            </h1>
            <img src='/nugi.svg' alt='' className='rounded-md' />
            <div className='bg-[#111529] rounded-md py-3 px-3'>
              <p className=' leading-8  text-[15px] '>
                Nugi report is currently a work in progress. Its sole purpose is
                to make the submission of daily accomplishments/reports easier
                in Nugi innovations (A tech hub designed to help kids, students,
                and other professionals develop their theoretical and practical
                skills on major technologies and it's methodologies.).
              </p>
              <p {...getCollapseProps()} className='leading-8 pt-4'>
                It is being developed using recent technologies like next js,
                tailwind and styled components. <br />
                Though not fully functional and being in the first phase of
                development, I have been able to come up with a few design
                pages. <br />
                Some already existing routes are;
                <ul>
                  {routes.map((route, idx) => (
                    <Link
                      href='https://nugi-report-f8spr4ssj-iromibe.vercel.app/'
                      key={idx}
                    >
                      <li className='cursor-pointer flex text-[#ffa500]'>
                        <span className='py-[14px] mr-2 text-[9px] text-[#b6e3ff] font-bold'>
                          <FaLocationArrow />
                        </span>{" "}
                        {route}
                      </li>
                    </Link>
                  ))}
                </ul>
              </p>
              <button
                className='text-[#b6e3ff] text-[14px] font-normal py-0 px-2 border-[1px] border-[#b6e3ff] rounded-[4px] transition ease-in-out delay-50 hover:bg-[#b6e3ff40] duration-100 my-2'
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
              >
                {" "}
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
