import logo from "../images/logo2.png"
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";



export function Nav(params) {
    const [visble, setVisible] = useState(false)
    console.log(visble)

    return(
        <div className=" w-full">
            <header className=" shadow-xl bg-gray-800 flex flex-col justify-center p-3 lg:pl-24 text-blue-700 ">
                
                {/* Combined nav for both large and mobile view */}
                
                {/* <nav className="flex justify-between "> 
                    <Link to="/"><img src={logo} alt="" className="w-16 h-16 my-auto"/></Link>

                    <div className={`${visble ? 'h-screen w-full flex top-0 right-0  z-50 fixed ' : ''}`}>
                    <div className="w-1/3 bg-gray-800/60 md:hidden "></div>
                    <ul className={`p-4 md:gap-8 md:flex transition-all ${visble ? ' w-2/3 flex flex-col h-screen shadow-2xl col-span-2 shadow-black bg-gray-800 ' : 'hidden'} `}>
                    <li onClick={()=>setVisible(false)} className='flex item-center justify-end gap-4 p-3 cursor-pointer md:hidden'> 
                    < IoCloseSharp className=' my-auto h-4 rotate-180' />
                    </li>
                    <li className='p-4 md:p-0 border-b lg:border-0 md:hidden'>
                        <NavLink onClick={()=>setVisible(false)}  to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="p-4 md:p-0 border-b lg:border-0 hover:text-blue-400">
                        <NavLink onClick={()=>setVisible(false)} to="/works">
                            Works
                            <hr className='w-2/4 border-none h-[1.5px] hidden'/>
                        </NavLink>
                    </li>
                    <li className="p-4 md:p-0 border-b lg:border-0 hover:text-blue-400">
                        <NavLink onClick={()=>setVisible(false)} to="/about">
                            About
                            <hr className='w-2/4 border-none h-[1.5px] hidden'/>
                        </NavLink>
                    </li>
                    <li className="p-4 md:p-0 border-b lg:border-0 hover:text-blue-400">
                        <NavLink onClick={()=>setVisible(false)} to="/contact">
                            Contact me
                            <hr className='w-2/4 border-none h-[1.5px] hidden'/>
                        </NavLink>
                    </li>
                    </ul>
                    </div>
                    <BiMenuAltRight 
                        className="md:hidden my-auto text-5xl"
                        onClick={()=>setVisible(true)}
                    />
                </nav> */}
            
                <nav className="flex justify-between "> 
                    <Link to="/"><img src={logo} alt="" className="w-16 h-16 my-auto"/></Link>

                    <ul className={`p-4 gap-8 md:flex hidden`}>
                    <li className="hover:text-blue-400">
                        <NavLink to="/works">
                            Works
                            <hr className='w-2/4 border-none h-[1.5px] hidden'/>
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-400">
                        <NavLink to="/about">
                            About
                            <hr className='w-2/4 border-none h-[1.5px] hidden'/>
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-400">
                        <NavLink to="/contact">
                            Contact me
                            <hr className='w-2/4 border-none h-[1.5px] hidden'/>
                        </NavLink>
                    </li>
                    </ul>

                    {/* hanburger icon for mobile view */}
                    <BiMenuAltRight 
                        className="md:hidden my-auto text-5xl"
                        onClick={()=>setVisible(true)}
                    />
                </nav>


                {/* Nav side menu for mobile view */}
                <div className={`fixed top-0 right-0 flex overflow-hidden  z-50 transition-all h-screen ${visble ? 'w-full' : 'w-0'} `}>
                    <div className="w-1/3 bg-gray-800/60"></div>
                    <div className='flex flex-col text-white w-2/3 bg-gray-800 p-4 md:gap-8 shadow-2xl shadow-black'>
                        <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
                            <IoCloseSharp className=' my-auto h-4 rotate-180' />
                        </div>
                        <NavLink onClick={()=>setVisible(false)} className='p-4 pl-6 border-b' to="/">Home</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='p-4 pl-6 border-b' to="/works">Works</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='p-4 pl-6 border-b' to="/about">About</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='p-4 pl-6 border-b' to="/contact">Contact me</NavLink>
                    </div>
                </div>
            </header>
        </div>
    )
}