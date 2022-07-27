import * as React from "react";

interface Props {}

const social = [];

export function HomePage(props: Props) {
  return (
    <div
      className='w-full min-h-screen px-14'
      style={{ background: "linear-gradient(180deg, #0e111d,  #031e52)" }}
    >
      <div
        className='hidden md:flex flex-col justify-center items-center fixed bottom-0 right-11'
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
      <div className='info h-full w-full'></div>
      <div id='#about'></div>
      <div id='#skills'></div>
      <div id='#experience'></div>
      <div id='#projects'></div>
      <div id='#contact'></div>
    </div>
  );
}
