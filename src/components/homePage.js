import portrait from "../images/portrait.png"
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion"


export function Home() {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="h-screen ">

            <main className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mx-8 mt-8 lg:mt-0 overflow-hidden h-full md:text-2xl">
                {/*<div className="lg:border-r-4  border-blue-700/40 h-1/4 xl:h-1/6 animate-pulse absolute top-40 xl:top-64 left-60 "></div>*/}
                <div className="flex flex-col z-10">
                    <div className="m-auto text-right lg:translate-x-32 pl-4">
                        <m.h1
                            initial={{ y: "-100%" }}
                            animate={{ y: "0" }}
                            transition={{ duration: 1.5 }}>Hi, my name is</m.h1>
                        <m.h1
                            initial={{ x: "-100%" }}
                            animate={{ x: "0" }}
                            transition={{ duration: 1.5 }}
                            className="md:text-6xl text-3xl font-thin">Ndukuba N Chidinma</m.h1>
                        <m.p
                            initial={{ x: "-100%" }}
                            animate={{ x: "0" }}
                            transition={{ duration: 1.5 }}
                            className="text-blue-700">Frontend Developer</m.p>
                        <m.p
                            initial={{ x: "100%" }}
                            animate={{ x: "0" }}
                            transition={{ duration: 1.5 }}
                            className="mt-8">A frontend developer with a particular interest in making things simple and automating daily tasks.
                            I try to keep up with security and best practices, and i am always looking for new things to learn.</m.p>
                        <m.div
                            initial={{ y: "100%" }}
                            animate={{ y: "0" }}
                            transition={{ duration: 1.5 }}
                            className="flex mt-6 justify-end gap-3">
                            <Link to="https://docs.google.com/document/d/1P5vxrgK-JRIsVjZKA1ixXn-Ilx5wXKqFbbu7mVNKysw/edit?usp=sharing">
                                <div className="min-w-[150px] border p-4 text-center rounded-xl  hover:bg-blue-400/10 hover:border-transparent hover:scale-95 w-fit hover:shadow-lg">
                                    Resume
                                </div>
                            </Link>
                            <Link to="/works">
                                <button
                                    className="bg-blue-700 p-4  rounded-xl hover:bg-blue-600 hover:scale-95 hover:shadow-lg">View projects
                                </button>
                            </Link>
                        </m.div>
                    </div>
                </div>
                <m.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{ duration: 1.5 }}
                    className="lg:flex justify-center lg:justify-left"><img src={portrait} alt="" className="md:m-auto p-0 md:pt-32 md:scale-150 h-full md:h-fit" /> </m.div>
                {/*<div className="lg:border-r-4 border-blue-700/40 h-1/4 animate-pulse absolute bottom-32 right-32"></div>*/}
            </main>
        </m.div>
    )
}
// h-full md:h-fit
// grid grid-rows-2 lg:grid-cols-2