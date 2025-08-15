import aboutimage from "../images/aboutimage.jpeg";
import { motion as m } from "framer-motion"

export function AboutPage() {
    const stackList = [
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            name: "html"
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            name: "CSS"
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            name: "TailwindCSS"
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            name: "Javascript"
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            name: "Typescript"
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React"
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            name: "Nextjs"
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            name: "Firebase"
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
            name: "Wordpress"
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            name: "git"
        },
        {
            img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
            name:"Axios"
        },
        {
            img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
            name:"Redux"
        }
    ]

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="p-8 lg:p-0 mt-8 flex flex-col justify-center items-center">
            <section className="max-w-[1278px] ">
                <h1 className="text-3xl lg:text-6xl lg:pl-8 ">About Me</h1>
                <div className="lg:p-16 lg:m-0 mt-8">
                    <div className="flex flex-col lg:grid grid-cols-3 gap-5 m-auto">
                        <div className="">
                            <img src={aboutimage} alt="" className="rounded-3xl" />
                        </div>
                        <div className="flex lg:text-2xl col-span-2">
                            <div className="m-auto">
                                <div className="flex items-center">Hi
                                    <p className="animate-wave-hand text:xl lg:text-5xl">👋🏿</p>
                                </div>
                                my name is <br />
                                <span class="italic my-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500/50 relative inline-block">
                                    <span class="relative text-white">
                                        <span className="font-bold text-blue-500"><span className="text-3xl">N</span>dukuba <span className="text-3xl">N</span>neoma <span className="text-3xl">C</span>hidinma</span>
                                    </span>
                                </span><br />
                                I am an all round creative, i love to explore, learn, create and most importantly solve problem.
                                I am a Frontend Web developer with a particular interest in making things simple and automating daily tasks.
                                I try to keep up with security and best practices, and am always looking for new things to learn</div>
                        </div>
                    </div>
                    <p className="mt-8 text-blue-700">These are some of the technlogies I’ve been working with:</p>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
                        {stackList.map((image, i) =>
                            <div key={i} className="border border-neutral-800 shadow-md bg-neutral-800 rounded-md lg:mx-8 py-2 lg:p-4 flex flex-col justify-center items-center gap-2">
                                <img src={image.img} alt="" className="h-10  m-auto" />
                                <p className="text-neutral-400 font-bold">{image.name}</p>
                            </div>)}
                    </div>
                    <p className="mt-8">I am also the head makeup artist and creative director at Makeup by Thatchidinma and a food scientist with a bachelors degree in food Science and Technology. </p>
                </div>
            </section>
        </m.div>
    )
}