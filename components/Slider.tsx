import Image from 'next/image'
import React from 'react'
import card1 from "@/public/card1.svg";
import card2 from "@/public/card2.svg";
import card3 from "@/public/card3.svg";

const Slider = () => {
  return (
    <header className='min-h-screen flex flex-col items-center justify-center bg-[#9fd8f6] my-28 border-4 text-center w-full border-black '>
      <div className="bg-[#161b32] mx-8 lg:-translate-y-44 -translate-y-72 text-white pb-4 rounded-md lg:rounded-xl">
        <span className='uppercase heading text-6xl lg:text-9xl relative tracking-tight  lg:px-6 py-12'>concept capers!</span>
      </div>

      <div className='flex items-center rounded-full gap-4 '>
        <Image className='' src={card1} alt="card1" />
        <Image className='' src={card2} alt="card1" />
        <Image className='' src={card3} alt="card1" />
        <Image className='' src={card1} alt="card1" />
        <Image className='' src={card2} alt="card1" />
        <Image className='' src={card3} alt="card1" />
        <Image className='' src={card1} alt="card1" />
        <Image className='' src={card2} alt="card1" />
      </div>
    </header>
  )
}

export default Slider
