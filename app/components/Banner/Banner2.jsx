'use client'
import Image from "next/image";
import React from "react";
import BannerPng from "/public/images/banner.png"
import { motion } from "framer-motion";
import { FadeUp } from "../Hero/Hero";
import {FaBookReader } from 'react-icons/fa'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
import Link from "next/link";

const bannerItems = [
    { id: 1, title: "10,000+ Courses", icon: <FaBookReader className="text-2xl" />, delay: 0.2 },
    { id: 2, title: "10,000+ Courses", icon: <GrUserExpert className="text-2xl" />, delay: 0.4 },
    { id: 3, title: "10,000+ Courses", icon: <MdOutlineAccessTime className="text-2xl" />, delay: 0.6 },
]


const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6">

                {/* Banner Text */}
                <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                        <h1 className="text-4xl font-bold !leading-snug">
                            Join Our Community to Start your Journey
                        </h1>
                        <p className="text-dark2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eveniet impedit voluptatum ex ipsa blanditiis consequatur!
                        </p>
                        <Link href="#" className="primary-btn !mt-8">
                        Join Now
                        </Link>
                    </div>
                </motion.div>

                {/* Banner Image */}
                <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex justify-center items-center">
                    <Image src={BannerPng}
                        alt=""
                        className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Banner2;