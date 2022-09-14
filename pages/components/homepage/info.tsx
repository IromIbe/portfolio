import * as React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {motion} from "framer-motion"
export interface IInfoProps {}

const socials = [{
  comp: <FaGithub/>,
  href: "",
},{
  comp:<FaLinkedinIn/>,
  href: "",
},]

export function Info(props: IInfoProps) {
  return (
    <motion.div className='flex justify-center flex-col w-full min-h-[100vh] pt-8'
     initial={{opacity: 0, translateY:50}}
    animate={{opacity:1, translateY:0}}
    transition={{duration:.5, delay:1}}>
      <div className='flex justify-between items-center'>
        <div className=' sm:text-6xl text-5xl font-bold text-[#b6e3ff]'>
          <h1 className='leading-10 sm:mb-3 mb-1'>Hi There! </h1>
          <h1 className='sm:mb-10 mb-3'> I'm Ibe Irom.</h1>
          <h3 className='text-2xl font-medium text-[orange]'>
            Front End Developer.
          </h3>
          <p className='sm:text-xl text-[17px] font-[400] m-0 text-[#eaeef2] leading-8'>
            I build interactive mobile first web applications <br /> while
            creating a striking balance between functional and aesthetic design.
          </p>
          <div>
            {/* <div className="social flex">
              {socials.map((social, index) => (
              <div key={index} className="text-3xl  p-3 hover:bg-[#ffffff20]  rounded-[50%]">
                <Link href={social.href}>{social.comp}</Link>
</div>))}
            </div> */}
            <button className='text-[#b6e3ff] text-[15px] font-normal py-4 px-10 border-[1px] border-[#b6e3ff] rounded-[4px] transition ease-in-out delay-50 hover:bg-[#b6e3ff40] duration-100'>
              <Link href='https://docs.google.com/document/d/e/2PACX-1vTUl6xphkSCSvP8dNn45Zjh6kqCtgbtufD7j5jTMQTMoWM4dbaLBfTVsG5HGz1f0aetBtvuTexM5ZRU/pub'>
                <span>View Resume</span>
              </Link>
            </button>
          </div>
        </div>
        <div className='image'>
          <h1></h1>
        </div>
      </div>
    </motion.div>
  );
}
