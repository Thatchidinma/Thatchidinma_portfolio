import portrait from "../images/portrait.png"
import { Link } from "react-router-dom";
import {motion as m} from "framer-motion"
import htmllogo from "../images/html-logo.png"
import csslogo from "../images/css-logo.png"
import jslogo from "../images/js-logo.png"
import reactlogo from "../images/react-logo.png"
import wordpresslogo from "../images/wordpress-logo.png"


export function Home() {
    return (
        <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
         className="h-screen ">
            <img src={htmllogo} alt="" className="h-10 animate-bounce absolute bottom-32 right-32 opacity-20 dark:opacity-5 hover:opacity-100 hover:grayscale-0 z-20"/>
            <img src={csslogo} alt="" className="h-10 animate-bounce absolute bottom-32 left-32 opacity-25 dark:opacity-5  hover:opacity-100 hover:grayscale-0 z-20"/>
            <img src={jslogo} alt="" className="h-10 animate-bounce absolute top-32 right-72 opacity-25 dark:opacity-5  hover:opacity-100 hover:grayscale-0 z-20"/>
            <img src={reactlogo} alt="" className="h-10 animate-spin-slow absolute top-72 left-72 opacity-25 dark:opacity-5  hover:opacity-100 hover:grayscale-0 z-20"/>
            <img src={wordpresslogo} alt="" className="h-10 animate-spin-slow hover:animate-none absolute top-96 right-60 opacity-25 dark:opacity-10  hover:opacity-100 hover:grayscale-0 z-20"/>

            <main className="lg:grid grid-cols-2 mx-8 mt-8 lg:mt-0 overflow-hidden h-full md:text-2xl">
            {/*<div className="lg:border-r-4  border-blue-700/40 h-1/4 xl:h-1/6 animate-pulse absolute top-40 xl:top-64 left-60 "></div>*/}
                <div className="flex flex-col z-10">
                    <div className="m-auto text-right lg:translate-x-32 pl-4">
                        <m.h1
                        initial={{y: "-100%"}}
                        animate={{y: "0"}} 
                        transition={{duration: 1.5}}>Hi, my name is</m.h1>
                        <m.h1
                        initial={{x: "-100%"}}
                        animate={{x: "0"}} 
                        transition={{duration: 1.5}} 
                        className="md:text-6xl text-3xl font-thin">Ndukuba N Chidinma</m.h1>
                        <m.p 
                        initial={{x: "-100%"}}
                        animate={{x: "0"}} 
                        transition={{duration: 1.5}}
                        className="text-blue-700">Frontend Developer</m.p>
                        <m.p 
                        initial={{x: "100%"}}
                        animate={{x: "0"}} 
                        transition={{duration: 1.5}}
                        className="mt-8">A frontend developer with a particular interest in making things simple and automating daily tasks. 
                        I try to keep up with security and best practices, and i am always looking for new things to learn.</m.p>
                        <Link to="/works"><m.button 
                        initial={{y: "100%"}}
                        animate={{y: "0"}} 
                        transition={{duration: 1.5}}
                        className="bg-blue-700 p-4 mt-6 rounded-xl hover:bg-blue-600">View projects</m.button></Link>
                    </div>
                </div>
                <m.div
                initial={{y: "100%"}}
                animate={{y: "0"}} 
                transition={{duration: 1.5}}
                className="lg:flex justify-center lg:justify-left"><img src={portrait} alt="" className="m-auto p-0 md:pt-32 md:scale-150"/> </m.div>
                {/*<div className="lg:border-r-4 border-blue-700/40 h-1/4 animate-pulse absolute bottom-32 right-32"></div>*/}
            </main>
        </m.div>
    )
}