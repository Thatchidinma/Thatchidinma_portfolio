import { motion as m } from "framer-motion"
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export function ContactPage(params) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="m-8 flex flex-col justify-center items-center h-screen"
        >
            <div className="max-w-[1278px] w-full ">
                <h1 className="text-3xl lg:text-6xl font-thin">Get in Touch</h1>
                <div className="flex flex-col lg:flex-row py-4 lg:p-16 lg:mx-6">
                    <div className="lg:basis-1/3 p-4">
                        <p className="hover:text-blue-600"><a href="mailto:ndukubachidinma@gmail.com?subject=I%20" ><FaEnvelope className="inline mr-2 text-blue-700" />  ndukubachidinma@gmail.com</a></p>
                        <p className="mt-4 hover:text-blue-600"><a href="tel:+234903059245">  <FaPhone className="inline mr-2 text-blue-700" /> 09030592495</a></p>
                        <div className="mt-8">
                            <h1>Socials :</h1>
                            <div className="flex flex-wrap mt-2">
                                <a href="https://github.com/Thatchidinma"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 m-2 rounded-md bg-gray-600 hover:bg-white hover:text-black text-2xl">
                                    <FaGithub />
                                </a>

                                <a href="https://wa.link/emat4t"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 m-2 rounded-md bg-gray-600 hover:bg-[#25D366] text-2xl">
                                    <FaWhatsapp className="" />
                                </a>

                                <a href="https://instagram.com/Thatchidinma"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 m-2 rounded-md bg-gray-600 hover:bg-gradient-to-b from-[#405DE6] via-[#833AB4] via-[#C13584] to-[#FCAF45] text-2xl">
                                    <FaInstagram />
                                </a>

                                <a href="https://www.linkedin.com/in/ndukubachidinma/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 m-2 rounded-md bg-gray-600 hover:bg-blue-600 text-2xl">
                                    <FaLinkedin />
                                </a>

                                <a href="https://twitter.com/Thatchidinma"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 m-2 rounded-md bg-gray-600 hover:bg-white hover:text-black text-2xl">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col lg:basis-2/3 text-gray-400" action="https://getform.io/f/aqonywxa" method="POST">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="m-4 p-2 rounded-md bg-gray-700"
                            value={formData.name}
                            onChange={handleChange}
                            required />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="m-4 p-2 rounded-md bg-gray-700"
                            value={formData.email}
                            onChange={handleChange}
                            required />

                        <textarea
                            rows="6"
                            type="text"
                            name="message"
                            placeholder="Leave a message"
                            className="m-4 p-2 rounded-md bg-gray-700"
                            value={formData.message}
                            onChange={handleChange}
                            required />

                        <button type="submit" className=" m-4 mx-auto bg-blue-700 px-4 py-2 rounded-xl hover:bg-blue-600 text-white">Send</button>
                    </form>
                </div>
            </div>
        </m.div>
    )
}