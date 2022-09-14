import * as React from "react";
import { Info } from "./info";
import { AboutMe } from "./about";
import { Skills } from "./skills";
import {Experience} from "./experience"

interface Props {}

const social = [];

export function HomePage(props: Props) {
  return (
    <div className='w-full min-h-screen sm:px-8 md:px-10 lg:px-14 px-5 bg-[#0e111d]'>
      <div
        className='hidden md:flex flex-col  justify-center items-center fixed bottom-0 right-11'
        style={{ fontFamily: "Fira Code monospace" }}
      >
        <div>
          <a
            href='mailto:irommyibe@gmail.com'
            className=' text-[16px] tracking-widest email text-[#eaeef2] hover:text-[#b6e3ff]'
            style={{ writingMode: "vertical-rl" }}
          >
            irommyibe@gmail.com
          </a>
        </div>
        <div className='line'></div>
      </div>
      <div className='md:px-[2.5rem] lg:px-[4rem]'>
        <div className='info w-full text-white'>
          <Info />
        </div>
        <div id='about' className=' w-full text-white'>
          <AboutMe />
        </div>
        <div id='skills' className=' w-full  text-white'>
          <Skills />
        </div>
        <div id='experience' className=' w-full sm:pt-20 pt-10 md:pt-24 pb-36 text-white'>
          <Experience/>
        </div>
        <div id='projects' className=' w-full  text-white'>
          <h1>projects</h1>
        </div>
        <div id='contact' className=' w-full  text-white'>
          <h1>contact</h1>
        </div>
      </div>
    </div>
  );
}
