/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      className='contact md:px-20 lg:px-36 pb-14 flex flex-col justify-center items-center'
      initial={{ opacity: 0, translateY: 80 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className='flex flex-col sm:justify-center sm:items-center'>
        <span className='text-[#b6e3ff] text-[18px] mb-4 capitalize'>
          what's next?
        </span>
        <h1 className='text-[orange] capitalize lg:text-4xl text-[22px] lg:mb-6 mb-2 tracking-wide font-bold'>
          Get in touch
        </h1>
        <p className='sm:text-lg text-base text-[#b6e3ff95] mb-6 leading-[35px] md:mx-14 flex justify-center items-center'>
          My inbox is always open. I'm currently open to entry level roles in
          frontend engineering. Whether you just want to say hello or you've got
          relevant job updates, Feel free to mail me!
        </p>
        <button className='text-[#b6e3ff] text-[14px] font-normal py-2 px-6 border-[1px] border-[#b6e3ff] rounded-[4px] transition ease-in-out delay-50 hover:bg-[#b6e3ff40] duration-100'>
          <Link href='mailto:irommyibe@gmail.com'>
            <span className='capitalize'>mail me</span>
          </Link>
        </button>
        <div className='flex justify-center items-center text-[orange] my-10 text-[22px]'>
          <Link href='https://www.linkedin.com/in/iromibe/'>
            <span
              className='text-[#b6e3ff] hover:text-[orange] mx-8 text-[22px]'
              title='linkedin'
            >
              <FaLinkedin />
            </span>
          </Link>

          <Link href='https://github.com/iromIbe'>
            <span
              className='text-[#b6e3ff] hover:text-[orange] mx-8 text-[22px]'
              title='github'
            >
              <AiFillGithub />
            </span>
          </Link>
          <Link href='https://wa.me/2349132925682'>
            <span
              className='text-[#b6e3ff] hover:text-[orange] mx-8 text-[22px]'
              title='whatsapp'
            >
              <BsWhatsapp />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
