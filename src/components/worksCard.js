import { motion as m } from "framer-motion"

export function WorksCard(props) {
    //iteriate over the tech props and render an element containing each one
    const tech = props.techs.map(item => <li className="border-2 border-blue-700 p-2 rounded-md hover:bg-blue-500" key={item}>{item}</li>)
    return (
        <div className="p-8 lg:p-16 lg:m-0 grid grid-row-2 md:grid-cols-2  gap-5 lg:gap-14 ">
            <m.div
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ duration: 0.9 }}
                >
                <img src={props.img} alt=""
                    className="h-fit w-fit" />
            </m.div>
            <m.div
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                transition={{ duration: 0.9 }}
                className="flex flex-col justify-center">
                <h1 className="font-extrabold text-3xl text-blue-700">{props.title}</h1>
                <p className="mt-4">{props.description}</p>
                <ul className="flex flex-wrap gap-5 mt-4">{tech}</ul>
                <div className="mt-4"><a href={props.link} target='_blank' rel="noreferrer" className=' hover:text-blue-700'>View live</a></div>
            </m.div>
        </div>
    )
}