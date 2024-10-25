import logo from "../images/logo2.png"
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";



export function Nav(params) {
    const [visble, setVisible] = useState(false)

    return(
        <div >
            <header className="bg-black/10 flex flex-col justify-center p-3 lg:pl-24 text-blue-700 ">
                <nav className="flex justify-between "> 
                    <Link to="/"><img src={logo} alt="" className="w-16 h-16 my-auto"/></Link>
                    <ul className="p-4 gap-8 md:flex hidden">
                    <li className="hover:text-blue-400"><Link to="/works">Works</Link></li>
                    <li className="hover:text-blue-400"><Link to="/about">About</Link></li>
                    <li className="hover:text-blue-400"><Link to="/contact">Contact me</Link></li>
                    </ul>
                    <BiMenuAltRight 
                        className="lg:hidden text-5xl"
                        onClick={()=>setVisible(true)}
                    />
                </nav>

                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-800 z-50 transition-all ${visble ? 'w-2/3 shadow-2xl shadow-black' : 'w-0'} `}>
                    <div className='flex flex-col text-white'>
                        <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
                            <IoCloseSharp className=' my-auto h-4 rotate-180' />
                        </div>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 mx-2 pl-6 border-b' to="/">Home</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 mx-2 pl-6 border-b' to="/works">Works</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 mx-2 pl-6 border-b' to="/about">About</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 mx-2 pl-6 border-b' to="/contact">Contact me</NavLink>
                    </div>
                </div>
            </header>
        </div>
    )
}