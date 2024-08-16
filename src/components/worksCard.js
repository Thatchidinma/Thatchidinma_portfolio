
export function WorksCard(props) {
    //iteriate over the tech props and render an element containing each one
    const tech = props.techs.map(item => <li className="border-2 border-blue-700 p-2 rounded-md hover:bg-blue-500" key={item}>{item}</li>)
    return(
            <div className="lg:p-16 lg:m-0 grid grid-row-2 md:grid-cols-2  gap-5 lg:gap-14">
                <img src={props.img} alt=""/>
                <div className="flex flex-col justify-center">
                    <h1 className="font-extrabold text-3xl text-blue-700">{props.title}</h1>
                    <p className="mt-4">{props.description}</p>
                    <ul className="flex gap-5 mt-4">{tech}</ul>
                    <div className="mt-4"><a href={props.link} target='_blank' rel="noreferrer"  className=' hover:text-blue-700'>View live</a></div>
                </div>
        </div>
    )
}