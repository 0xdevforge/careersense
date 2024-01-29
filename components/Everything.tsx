"use client"


import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

export default function Everything() {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [prevScrollY, setPrevScrollY] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: false,
        onChange: (inView) => {
            const direction = inView ? 'up' : 'down';
            setScrollDirection(direction);
        },
    });

    const shiftDownDistance = 50;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY) {
            setScrollDirection('down');
        } else if (currentScrollY < prevScrollY) {
            setScrollDirection('up');
        }
        setPrevScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return (
        <div className="flex items-center justify-center min-h-screen flex-col orange bg-[#f8e1cb] -mx-12">
            <div className="mx-12 lg:mx-0">
            <Button text='Test Checking as it will show how the below content is going down' />
            </div>
            <div className="lg:space-y-2 -space-y-1  w-full items-center justify-center text-center mt-16" ref={ref}>
                <motion.p
                    className="text-black text-md tracking-tight font-bold uppercase md:text-1xl"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView && scrollDirection === 'down' ? 0 : inView && scrollDirection === 'up' ? -40 : -40 - shiftDownDistance,
                    }}
                    transition={{ duration: 0.2, yoyo: Infinity }}
                >
                    For Students
                </motion.p>
                <motion.p
                    className="text-black text-lg tracking-tight font-bold uppercase md:text-2xl"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView && scrollDirection === 'down' ? 0 : inView && scrollDirection === 'up' ? -40 : -40 - shiftDownDistance,
                    }}
                    transition={{ duration: 0.4, yoyo: Infinity }}
                >
                    For Students
                </motion.p>
                <motion.p
                    className="text-black text-xl tracking-tight font-bold uppercase md:text-3xl"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView && scrollDirection === 'down' ? 0 : inView && scrollDirection === 'up' ? -40 : -40 - shiftDownDistance,
                    }}
                    transition={{ duration: 0.6, yoyo: Infinity }}
                >
                    For Students
                </motion.p>
                <motion.p
                    className="text-black text-2xl tracking-tight font-bold uppercase md:text-4xl"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView && scrollDirection === 'down' ? 0 : inView && scrollDirection === 'up' ? -40 : -40 - shiftDownDistance,
                    }}
                    transition={{ duration: 0.8, yoyo: Infinity }}
                >
                    For Students
                </motion.p>
                <motion.p
                    className="text-black text-3xl tracking-tight font-bold uppercase md:text-5xl"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView && scrollDirection === 'down' ? 0 : inView && scrollDirection === 'up' ? -40 : -40 - shiftDownDistance,
                    }}
                    transition={{ duration: 1.0, yoyo: Infinity }}
                >
                    For Students
                </motion.p>
                <motion.p
                    className="text-black text-4xl tracking-tight font-bold uppercase md:text-6xl"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView && scrollDirection === 'down' ? 0 : inView && scrollDirection === 'up' ? -40 : -40 - shiftDownDistance,
                    }}
                    transition={{ duration: 1.2, yoyo: Infinity }}
                >
                    For Students
                </motion.p>
            </div>
            <p className='lg:text-2xl text-center leading-9 my-6'>
                Our mission is to guide students choose <br />
                the right path to achieve their career goals.
            </p>
        </div>
    );
}