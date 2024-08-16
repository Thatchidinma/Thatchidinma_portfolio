import logo from "../images/logo2.png"
import { Link } from "react-router-dom";


export function Nav(params) {
    return(
        <div>
            <header className="bg-black/10 flex flex-col justify-center p-3 lg:pl-24 text-blue-700 ">
                <nav className="flex justify-between "> 
                    <Link to="/"><img src={logo} alt="" className="w-16 h-16 my-auto"/></Link>
                    <ul className="p-4 gap-8 flex">
                    <li className="hover:text-blue-400"><Link to="/works">Works</Link></li>
                    <li className="hover:text-blue-400"><Link to="/about">About</Link></li>
                    <li className="hover:text-blue-400"><Link to="/contact">Contact me</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}