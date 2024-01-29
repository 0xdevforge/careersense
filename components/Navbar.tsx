"use client";

import { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Button from "./Button";
import Image from "next/image";
import logo from "@/public/Navbar/logo.svg";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const xLeft = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const xRight = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    useEffect(() => {
        const checkScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <nav className="flex items-center justify-center w-full ">
            <div className="w-full items-start flex justify-between">
                <motion.div
                    className="mt-6"
                    style={{ opacity, x: xLeft }}
                >
                    <Button text="Buy the game" />
                </motion.div>

                <motion.div
                    className={`border-[7px] z-30 bg-white justify-center  max-w-md border-[#161b32] py-4 items-center rounded-full px-44 hidden lg:flex ${isScrolled ? 'fixed top-8 left-0 right-0 ml-auto mr-auto' : ''}`}
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{ scale }}
                >
                    <div className="pr-12 uppercase items-center flex text-left justify-between">
                        <span className="font-semibold text-2xl text-[#161b32]">Work</span>
                        <Image src={logo} alt="logo" className="ml-12 mr-4" />
                        <Button text="Play" />
                    </div>
                </motion.div>

                <motion.div
                    className="mt-6"
                    style={{ opacity, x: xRight }}
                >
                    <Button text="Buy the font" />
                </motion.div>
            </div>
        </nav>
    );
}