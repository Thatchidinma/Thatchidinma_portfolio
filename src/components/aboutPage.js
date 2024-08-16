import  aboutimage from "../images/aboutimage.jpeg";
import htmllogo from "../images/html-logo.png"
import csslogo from "../images/css-logo.png"
import jslogo from "../images/js-logo.png"
import reactlogo from "../images/react-logo.png"
import wordpresslogo from "../images/wordpress-logo.png"
import tailwindlogo from "../images/tailwind.svg"
import {motion as m} from "framer-motion"

export function AboutPage() {
    return(
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.9}} className="p-8 lg:p-0 mt-8">
            <section className="">
            <h1 className="text-3xl lg:text-6xl lg:pl-8 ">About Me</h1>
            <div className="lg:p-16 lg:m-0 mt-8">
                <div className="grid grid-cols-6 gap-5">
                    <img src={aboutimage} alt="" className="rounded-full col-span-2"/>
                    <div className="col-span-4 flex">
                        <p className="m-auto">Hi, my name is <span className="font-bold text-blue-700"><span className="text-3xl">N</span>dukuba <span className="text-3xl">N</span>neoma <span className="text-3xl">C</span>hidinma</span>. I am an all round creative, i love to explore, learn, create and most importantly solve problem. 
                            I am a Frontend Web developer with a particular interest in making things simple and automating daily tasks. 
                            I try to keep up with security and best practices, and am always looking for new things to learn</p>
                    </div>
                </div>
                <p className="mt-8 text-blue-700">These are some of the technlogies I’ve been working with:</p>
                <div className="grid grid-cols-4 gap-5 mt-4">
                    <img src={htmllogo} alt="" className="lg:h-32"/>
                    <img src={csslogo} alt="" className=" lg:h-32"/>
                    <img src={jslogo} alt="" className="lg:h-32"/>
                    <img src={reactlogo} alt="" className="lg:h-32 animate-spin-slow"/>
                    <img src={wordpresslogo} alt="" className="lg:h-32"/>
                    <img src={tailwindlogo} alt="icon" className="h-12 lg:h-32 w-40"/>
                </div>
                <p className="mt-8">I am also the head makeup artist and creative director at Makeup by Thatchidinma and a food scientist with a bachelors degree in food Science and Technology. </p>
            </div>
            </section>
        </m.div>
    )
}