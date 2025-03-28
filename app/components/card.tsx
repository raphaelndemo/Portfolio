import react from "react";
import { ImLocation } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const card = [
    {
        icon: <ImLocation />,
        name: "Location",
        text: "Nairobi, Kenya"
    },
    {
        icon: <BiLogoGmail />,
        name: "Email",
        text: "ndemoraphael4@gmail"

    },
    {
        icon: <FaPhoneAlt />,
        name: "Call",
        text: "**********"

    },
    {
        icon: <BsGithub />,
        name: "Github",
        text: "raphaelndemo"

    },
    {
        icon: <FaLinkedin />,
        name: "LinkedIn",
        text: "Raphael Ndemo"

    },
    {
        icon: <FaXTwitter />,
        name: "Twitter",
        text: "@Ra_lphiee"

    }

]
export default function Card() {
    return (<div className="p-6 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {card.map((state, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center space-x-2 ">
            {/* Display the specific icon for the state */}
            {state.icon}
            <h3 className="text-lg font-semibold text-gray-800">{state.name}</h3>
          </div>
          <p className="text-md text-gray-600 break-words">{state.text}</p>
        </div>
      ))}

    </div>

    );
}