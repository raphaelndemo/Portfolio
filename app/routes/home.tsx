import SideNav from "../components/sidenav";
import type { Route } from "./+types/home";
import {ReactTyped} from "react-typed";
import Card from "../components/card";
import Testimonial from "../components/testimonials";
import BackToTopButton from "../components/backToTop";
import { IoIosLaptop } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css.png";
import mongodb from "../assets/images/mongodb.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import java from "../assets/images/java.png";
import linux from "../assets/images/linux.png";
import python from "../assets/images/python.png";
import github from "../assets/images/github.png";
import reactRouterIcon from "../assets/images/reactRouterIcon.png";
import code from "../assets/images/code.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home(props: any, state: any) {
  return (
  <div id="home" className="sm:flex-1 sm:ml-0 md:ml-64 md:p-8 overflow-auto min-h-screen">
    <SideNav name="Raphael Ndemo"/>
    <div className="home bg-gray-600 text-white py-60 justify-center items-center flex flex-col ">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight md:py-6">
          Raphael Ndemo
        </h1>
        <div className="flex items-center md:text-xl ">
          <p className="mr-2 text-lg sm:text-lg md:text-xl">I am a </p><div className="font-normal text-lg sm:text-lg md:text-xl inline">
            <ReactTyped
              strings={[
                "Software Engineer",
                "Full-Stack Web Developer",
                "Car Enthusiast",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

        </div> 
              
    </div>
    <h2 className="contact text-2xl md:text-3xl font-bold text-gray-800 mb-4 p-4 border-b border-gray-600 ">Some Technologies I've Worked With</h2>
    <div className="flex gap-6 justify-center items-center p-10 flex-wrap">
      <img src={html} alt="html logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={css} alt="css logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300"  loading="lazy"/>
      <img src={reactRouterIcon} alt="react router logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300 object-contain" loading="lazy" />
      <img src={bootstrap} alt="bootstrap logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={mongodb} alt="mongodb logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={js} alt="javascript logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={java} alt="java logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={python} alt="python logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={linux} alt="linux logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300" loading="lazy" />
      <img src={github} alt="github logo" className="w-16 h-16 md:grayscale hover:grayscale-0 transition duration-300"  loading="lazy"/>
    </div>

    <h2 id="about" className="contact text-2xl md:text-3xl font-bold text-gray-800 mb-4 p-4 border-b border-gray-600 ">What I do</h2>
    <div  className="px-8">
      {/* Design Card */}
      <div className="bg-white p-8 mb-4 rounded-lg shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center mb-4">
            <IoIosLaptop size={30} className="text-gray-600 mr-4 hover:rotate-360 transition-transform duration-500 ease-in-out" />
            <h3 className="text-xl font-semibold text-gray-800">Design</h3>
          </div>
          <p className="text-gray-600 text-md">
            Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.
          </p>
        </div>

        {/* Development Card */}
        <div className="bg-white mb-4 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center mb-4">
            <IoCodeSlash size={30} className="text-gray-600 mr-4 hover:rotate-360 transition-transform duration-500 ease-in-out" />
            <h3 className="text-2xl font-semibold text-gray-800">Development</h3>
          </div>
          <p className="text-gray-600 text-md">
            With a strong foundation in Information Technology, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.
          </p>
        </div>

        {/* Support Card */}
        <div className="bg-white mb-4 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center mb-4">
            <BiSupport size={30} className="text-gray-600 mr-4 hover:rotate-360 transition-transform duration-500 ease-in-out" />
            <h3 className="text-xl font-semibold text-gray-800">Support</h3>
          </div>
          <p className="text-gray-600 text-md">
            Your website is always growing. Whether you’re adding new features or making improvements, I’m here to help.
          </p>
        </div>
    </div>
    <h2 className="contact text-2xl md:text-3xl font-bold text-gray-800 mb-4 p-4 border-b border-gray-600 ">Bringing a Personal Touch</h2>
    <div>
      <Testimonial />
    </div> 
    <h2 className="contact text-2xl font-bold text-gray-800 mb-4 p-4 border-b border-gray-600 ">Contact</h2>
    <div id="contact">            
      <Card />
    </div>
    <BackToTopButton />
   
    

    
    
  </div>);
}
