import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";

export interface IHeaderProps {}

const navLinks = [
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
  {
    href: "/#experience",
    label: "Experience",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];

export function Header(props: IHeaderProps) {
  const [active, setActive] = useState<string>("Home");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <div
      className='sticky z-[1000] drop-shadow-[0.5_35px_35px_ #0e111d)] top-0 nav-bar flex justify-between items-center w-full h-[5.2rem]  lg:px-12 px-8 py-5 border-t-8'
      style={{ background: "linear-gradient(200deg, #090c15,  #0e111d)" }}
    >
      <div className='logo'>
        <Link href='/'>
          <motion.img
            src='irom.svg'
            alt=''
            style={{ width: "140px" }}
            className='cursor-pointer'
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.04 }}
          />
        </Link>
      </div>
      <div
        className={`links flex justify-between items-center lg:flex-[.4]  ${
          isMobile ? "flex-col" : "flex-row"
        }`}
      >
        <motion.ul
          className={
            isMobile
              ? "nav-links-mobile justify-center items-center leading-10 text-center"
              : "flex flex-1  justify-between items-center all-links"
          }
          style={{ fontFamily: "Fira Code monospace" }}
        >
          {navLinks.map((link, index) => (
            <>
              <button
                key={index}
                className='relative'
                onClick={() => setActive(link.label)}
              >
                <motion.li
                  initial={{ opacity: 0, translateY: -50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`text-[#eaeef2] text-[15px] font-medium cursor-pointer px-4 py-2   hover:text-[#b6e3ff]  ${
                        active === link.label
                          ? "border-b-2 border-[#b6e3ff]"
                          : ""
                      } ${
                        link.label === "Contact"
                          ? "text-[#b6e3ff] border-[1px] border-[#b6e3ff] rounded-[4px] transition ease-in-out delay-50 hover:bg-[#b6e3ff40] duration-100"
                          : "activeLink"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              </button>
            </>
          ))}
        </motion.ul>

        <button
          className='mobile-nav'
          onClick={() => setIsMobile(!isMobile)}
          style={{ color: "#eaeef2" }}
        >
          {isMobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}

// #b6e3ff
