import React from 'react'

import gradient from '@/public/gradient.svg'
import Image from 'next/image'


export default function Paragraph() {
    return (
        <div className='min-h-[50vh] lg:text-xl border-2 border-black flex flex-col text-center justify-center bg-[#fef6f0] -mx-12  lg:leading-9 lg:tracking-wider'>
            <p className='z-10 mx-6'>
                At Educate Path, we believe in the power of innovation to  shape the future <br />
                of student success. Step into the realm of possibilities, where we introduce  <br />
                the most innovative and comprehensive data platform designed to decipher  <br />
                your career goals and chart a strategic plan of action. Your success story as  <br />
                a student begins here!
            </p>
            <div className="h-0 relative bottom-96 ">
                <Image src={gradient} alt='gradient' className='z-0 cover'  />
            </div>
        </div>
    )
}
