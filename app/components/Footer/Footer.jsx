'use client'

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import {motion} from "framer-motion"

const FooterCourses = [
    {id: 1, name: "Web Development"},
    {id: 2, name: "Software Development"},
    {id: 3, name: "Apps Development"},
    {id: 4, name: "E Learning"},
]
const Links = [
    {id: 1, name: "Home"},
    {id: 2, name: "Services"},
    {id: 3, name: "About"},
    {id: 4, name: "Contact"},
]

const Footer = () => {
    return (
        <footer className="py-28 bg-[#f7f7f7]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-14 md:gap-4">
                    {/* First Section */}
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold">The Coding Journey</h1>
                        <p className="text-dark2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Fugit et cumque impedit animi ratione? Quisquam nulla 
                            suscipit totam tempora qui perferendis? 
                            Laboriosam veniam ipsum ratione culpa consequatur quas! 
                            Repellat, asperiores?
                        </p>
                    </motion.div>

                    {/* Second Section */}
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Courses</h1>
                            <div className="text-dark">
                                <ul className="space-y-2 text-lg">
                                    {FooterCourses.map((course) => (
                                        <li key={course.id} className="cursor-pointer hover:text-secondary duration-200">
                                            <Link href="#">{course.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Links</h1>
                            <div className="text-dark">
                                <ul className="space-y-2 text-lg">
                                    {Links.map((link) => (
                                        <li key={link.id} className="cursor-pointer hover:text-secondary duration-200">
                                            <Link href="#">{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>



                    {/* Third Section */}
                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold">Get In Touch</h1>
                        <div className="flex items-center">
                            <input type="text" placeholder="Enter your email" 
                            className="p-3 rounded-s-xl bg-white w-full py-4 focus:outline-none
                            placeholder:text-dark2"
                            />
                            <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl" >Go</button>
                        </div>
                        {/* Social Icons */}
                        <div className="flex space-x-6 py-3">
                            <Link href="#">
                            <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </Link>
                            <Link href="#">
                            <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </Link>
                            <Link href="#">
                            <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </Link>
                            <Link href="#">
                            <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;