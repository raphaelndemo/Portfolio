import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import me from "../assets/images/me.jpg";
import { Link } from "react-router";

interface SideNavProps {
  name: string;
}

const SideNav = (props: SideNavProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Burger Menu */}
      <div className="burger-btn block md:hidden z-50">
        {showMenu ? (
          <IoMdClose size={30} onClick={toggleMenu} />
        ) : (
          <CiMenuBurger size={30} onClick={toggleMenu} />
        )}
      </div>

      {/* SideNav */}
      <div className={`p-6 sidenav ${showMenu ? "open" : ""} `}>
      <img
              src={me}
              alt="my profile picture"
              className="w-40 h-40 md:w-40 md:h-40 rounded-full border-4 border-gray-400 shadow-2xl object-cover transform hover:scale-105 transition duration-300 ease-in-out"
        />
        <h1 className="text-lg font-bold p-2">{props.name}</h1>           
        <div className="flex justify-center sm:justify-start gap-4 mt-6">
            <BsGithub className="icon-hover w-7 h-7 hover:text-[#6a4c9c] transform hover:scale-105 transition duration-300 ease-in-out"/>
            <FaLinkedin className="icon-hover w-7 h-7 hover:text-[#0077B5] transform hover:scale-105 transition duration-300 ease-in-out"/>
            <FaXTwitter className="icon-hover w-7 h-7 hover:text-[#000000] transform hover:scale-105 transition duration-300 ease-in-out"/>
            
        </div>
        <div>
        <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'><Link to ="#home">Home</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="#about">About</Link></li>
                <li className='p-4 '><Link to="#contact">Contact</Link></li>
                
        </ul>
        </div>            
      </div>
    </div>
  );
};

export default SideNav;
