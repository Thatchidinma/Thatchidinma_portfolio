import portrait from "../images/portrait.png"
import { Link } from "react-router-dom";
import {motion as m} from "framer-motion"

export function Home() {
    return (
        <m.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}} 
        transition={{duration: 0.9}}
         className="h-5/6 ">
            <main className="lg:grid grid-cols-2 mx-8 mt-8 overflow-hidden h-full" data-aos="fade-up">
            {/*<div className="lg:border-r-4  border-blue-700/40 h-1/4 xl:h-1/6 animate-pulse absolute top-40 xl:top-64 left-60 "></div>*/}
                <div className="flex flex-col">
                    <div className="m-auto text-right lg:translate-x-32 pl-4">
                        <h1>Hi, my name is</h1>
                        <h1 className="lg:text-6xl text-3xl font-thin">Ndukuba N Chidinma</h1>
                        <p className="text-blue-700">Frontend Developer</p>
                        <p className="mt-8">A frontend developer with a particular interest in making things simple and automating daily tasks. 
                        I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <button className="bg-blue-700 p-4 mt-6 rounded-xl hover:bg-blue-600"><Link to="/works">View projects</Link></button>
                    </div>
                </div>
                <div className="lg:flex justify-left "><img src={portrait} alt="" className=""/> </div>
                {/*<div className="lg:border-r-4 border-blue-700/40 h-1/4 animate-pulse absolute bottom-32 right-32"></div>*/}
                <div></div>
            </main>
        </m.div>
    )
}