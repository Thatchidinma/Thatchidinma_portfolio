import  aboutimage from "../images/aboutimage.jpeg";
import htmllogo from "../images/html-logo.png"
import csslogo from "../images/css-logo.png"
import jslogo from "../images/js-logo.png"
import reactlogo from "../images/react-logo.png"
import wordpresslogo from "../images/wordpress-logo.png"
import firebaselogo from "../images/firebase.png"
import tailwindlogo from "../images/tailwind.svg"
import typescript from "../images/typescript.svg"
import nextlogo from "../images/next.svg"
import {motion as m} from "framer-motion"

export function AboutPage() {
    return(
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.9}} className="p-8 lg:p-0 mt-8">
            <section className="">
            <h1 className="text-3xl lg:text-6xl lg:pl-8 ">About Me</h1>
            <div className="lg:p-16 lg:m-0 mt-8">
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className=" ">
                    <img src={aboutimage} alt="" className="rounded-3xl"/>
                    </div>
                    <div className="flex lg:text-2xl">
                        <div className="m-auto">
                            <div className="flex items-center">Hi
                            <svg className="animate-wave-hand" width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#42ade2"> <path d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1"> </path> <path d="M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.5.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2"> </path> <path d="M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9"> </path> <path d="M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"> </path> </g> <g fill="#a17859"> <path d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9"> </path> <path d="M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"> </path> </g> <path d="M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2" fill="#7e5b3e"> </path> <path d="M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7" fill="#a17859"> </path> <path d="M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1" fill="#7e5b3e"> </path> <path d="M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6" fill="#a17859"> </path> <g fill="#7e5b3e"> <path d="M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1"> </path> <path d="M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"> </path> </g> <path d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5" fill="#a17859"> </path> <g fill="#7e5b3e"> <path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"> </path> <path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"> </path> </g> </g></svg>
                            </div>
                             my name is <br/>
                        <span class="italic my-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500/50 relative inline-block">
                                <span class="relative text-white">
                                <span className="font-bold text-blue-500"><span className="text-3xl">N</span>dukuba <span className="text-3xl">N</span>neoma <span className="text-3xl">C</span>hidinma</span>
                                </span>
                            </span><br/>
                         I am an all round creative, i love to explore, learn, create and most importantly solve problem. 
                            I am a Frontend Web developer with a particular interest in making things simple and automating daily tasks. 
                            I try to keep up with security and best practices, and am always looking for new things to learn</div>
                    </div>
                </div>
                <p className="mt-8 text-blue-700">These are some of the technlogies I’ve been working with:</p>
                <div className="grid grid-cols-4 gap-5 mt-4">
                    <img src={htmllogo} alt="" className="lg:h-32"/>
                    <img src={csslogo} alt="" className=" h-16 lg:h-32"/>
                    <img src={jslogo} alt="" className=" h-16 lg:h-32"/>
                    <img src={reactlogo} alt="" className="lg:h-32 animate-spin-slow"/>
                    <img src={wordpresslogo} alt="" className="lg:h-32"/>
                    <img src={tailwindlogo} alt="icon" className="h-12 lg:h-32 w-40"/>
                    <img src={firebaselogo} alt="" className="h-16 lg:h-32"/>
                    <img src={nextlogo} alt="icon" className="h-12 lg:h-32 w-40"/>
                    <img src={typescript} alt='icon' className="h-16 lg:h-32 w-28"/>
                </div>
                <p className="mt-8">I am also the head makeup artist and creative director at Makeup by Thatchidinma and a food scientist with a bachelors degree in food Science and Technology. </p>
            </div>
            </section>
        </m.div>
    )
}