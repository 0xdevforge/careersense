import React from 'react'

import Image from 'next/image';

type Props = {
    heading: string;
    description: string;
    imageSrc: string;
    bgColor: string;
    headingColor?: string;
    descriptionColor?: string;
  };
  
  const Animated = ({ heading, description, imageSrc, bgColor, headingColor, descriptionColor }: Props) => {
    return (
    <div className='lg:min-h-screen py-20 -mx-12 lg:rounded-t-3xl lg:sticky lg:top-0 justify-between grid grid-cols-12 gap-2 items-center' style={{ backgroundColor: bgColor }}>
        <div className="lg:col-span-6 col-span-12 text-[#191408]">
          <div className="text-left flex flex-col w-full pl-12  lg:px-20 space-y-4">
            <h1 className="lg:text-7xl font-bold text-5xl " style={{color: headingColor}}>{heading}</h1>
            <p className="lg:text-2xl  font-semibold mr-12" style={{color: descriptionColor}}>{description}</p>
          </div>
        </div>
        <div className="lg:col-span-6 mt-12 col-span-12 bg-white max-w-lg rounded-3xl mx-12 lg:mx-0 lg:ml-32 ">
          <Image src={imageSrc} alt="animation" />
        </div>
      </div>
    );
  };
  
  export default Animated;