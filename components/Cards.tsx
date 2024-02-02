"use client";

import React from 'react'
import Animated from './animated'
import animate1 from "@/public/animate1.svg";
import animate2 from "@/public/animate2.svg";
import animate3 from "@/public/animate3.svg";

import { motion } from 'framer-motion';

export default function Cards() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className='mt-32'>
      <h1 className='cardHeading hidden lg:block w-full text-center'>
        with saveday, you can
      </h1>
      <h1 className='cardmobileHeading lg:hidden w-full mb-6'>
        with saveday, you can
      </h1>
      <motion.div variants={variants}
        initial="hidden"
        animate="show" className=''>
        <Animated bgColor='#fbda5f' imageSrc={animate1} heading='save whatever you encounter' description='All the content you encounter on the internet, such as images, YouTube videos, PDF files, tweets or podcasts can now be effortlessly saved with SaveDay.' headingColor='#191408' descriptionColor='#191408' />
        <Animated bgColor='#191408' imageSrc={animate1} heading='Search by how you think' description='You can easily search for your saved content by color, brand, keyword, date or any words you can remember, in any language.' headingColor='#fbda5f' descriptionColor='#ffffff' />
        <Animated bgColor='#d6cfc5' imageSrc={animate2} heading='Summarize lengthy content instantly' description='Tired of scrolling down articles or following every second of any video? SaveDay can give you the main ideas right away. Besides, you can share it with anyone in a minute with stunning templates.' headingColor='#191408' descriptionColor='#191408' />
        <Animated bgColor='#fbda5f' imageSrc={animate3} heading='save whatever you encounter' description='All the content you encounter on the internet, such as images, YouTube videos, PDF files, tweets or podcasts can now be effortlessly saved with SaveDay.' headingColor='#191408' descriptionColor='#191408' />
      </motion.div>
    </div>
  )
}
