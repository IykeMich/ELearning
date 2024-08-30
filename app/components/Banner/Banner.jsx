'use client'
import Image from "next/image";
import React from "react";
import BannerPng from "/public/images/education.png"
import { motion } from "framer-motion";
import { FadeUp } from "../Hero/Hero";
import {FaBookReader } from 'react-icons/fa'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'

const bannerItems = [
    { id: 1, title: "10,000+ Courses", icon: <FaBookReader className="text-2xl" />, delay: 0.2 },
    { id: 2, title: "10,000+ Courses", icon: <GrUserExpert className="text-2xl" />, delay: 0.4 },
    { id: 3, title: "10,000+ Courses", icon: <MdOutlineAccessTime className="text-2xl" />, delay: 0.6 },
]


const Banner = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6">
                {/* Banner Image */}
                <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex justify-center items-center">
                    <Image src={BannerPng}
                        alt=""
                        className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
                    />
                </motion.div>
                {/* Banner Text */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-12">
                        <motion.h1 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold !leading-snug">
                            The World's Leading Online learning Platform
                        </motion.h1>
                        <div className="flex flex-col gap-6">
                            {/* <ul className="flex flex-col gap-6"> */}
                                {bannerItems.map((item) => (
                                    <motion.div 
                                    key={item.id}
                                    variants={FadeUp(item.delay)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-6 bg-[#f4f4f4]
                                    rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                                    >
                                        {item.icon}
                                        <p className="text-lg">{item.title}</p>
                                    </motion.div>
                                ))}
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;