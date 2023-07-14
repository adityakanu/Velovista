import { useState } from "react";
import img1 from "../assets/logo.svg";
import Button from "./Button";
const Nav = () => {
    let Links = [
        { name: "Home", link: "/" },

        { name: "About", link: "/" },

        { name: "Help", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="top-0 left-0 w-full shadow-md">
            <div className="items-center justify-between py-4 bg-mint md:flex md:px-10 px-7">
                <div
                    className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
                >
                    <span className="pt-2 mr-1 text-3xl text-white">
                        <img src={img1} className="z-[2]" alt="logo"></img>
                    </span>
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static border-b-1 border-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="text-xl md:ml-8 md:my-0 my-7"
                        >
                            <a
                                href={link.link}
                                className="text-gray-800 duration-300 hover:text-white"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <Button>Logout</Button>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
