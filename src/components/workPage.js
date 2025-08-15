import { workdata } from "./workdata";
import { WorksCard } from "./worksCard";
import { motion as m } from "framer-motion"

export function WorkPage() {
    //using map function to loop through workdata and and it as props to the worksCard component
    const workComponent = workdata.map((item, index) => <WorksCard key={index} {...item} />)
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="flex justify-center items-center">
            <div className="lg:py-2 max-w-[1278px] flex flex-col">
                <h1 className="text-3xl lg:text-6xl font-thin pl-8 mt-8">My Works</h1>
                {workComponent}
            </div>
        </m.div>
    )
}