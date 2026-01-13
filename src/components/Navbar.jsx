import React,{useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    // const [nav, setNav] = useState(false)
    // const handleNav = () =>{
    //     setNav(!nav)
    // }
   return(
    <div className="relative z-50 flex justify-between items-center h-24 max-w-[1250px] mx-auto px-4 text-black bg-purple">
        <h1 className="w-full text-3xl font-bold text-[#0F0C08]">SUANIME</h1>
        <ul className="hidden md:flex">
            <li className="p-4"><Link to="/">Home</Link></li>
            <li className="p-4"><Link to="/events">Events</Link></li>
            <li className="p-4"><Link to="/about">About</Link></li>
            <li className="p-4"><Link to="/contact">Contact</Link></li>
            <li className="p-4"><Link to="/sponsors">Sponsors</Link></li>
        </ul>
        
        {/* <div className={!nav ? "fixed left-0 top-0 w-[50%] sm:w-40%] md:w-[20%] h-full border-r border-r-gray-900 bg-pink-100 ease-in-out duration-500":'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#0F0C08] m-5">SUA</h1>
            <ul className="pt-12 uppercase">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Events</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Contact</li>
            </ul>
        </div> */}
    </div>
   )
}

export default Navbar