import React, { useState } from "react";
import { IconButton, Collapse, Input } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaRegMoon,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IoClose, IoCall } from "react-icons/io5";
import { IoMdMenu, IoMdSunny } from "react-icons/io";
import "./Menubar.css";
import Search from "../Search/Search";
import { TypeAnimation } from "react-type-animation";

const Menubar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [theme, setTheme] = useState("sunny");
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleTheme = () => {
    setTheme((prevIcon) => (prevIcon === "sunny" ? "moon" : "sunny"));
  };

  const handleNavClick = () => {
    setOpenNav(false);
  };

  // call
  const handlePhoneClick = () => {
    const phoneNumber = "+8801627282572";
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  // navbar Active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" ? "active" : "";
    }
    return location.pathname.startsWith(path) ? "active" : "";
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/" className={`flex items-center ${isActive("/")}`}>
        <li className="color">Home</li>
      </Link>

      <Link to="/story" className={`flex items-center ${isActive("/story")}`}>
        <li className="color">Stories</li>
      </Link>

      <Link to="/moment" className={`flex items-center ${isActive("/moment")}`}>
        <li className="color">Moments</li>
      </Link>
      <Link to="/diary" className={`flex items-center ${isActive("/diary")}`}>
        <li className="color">Diaries</li>
      </Link>
      <Link to="/diary" className={`flex items-center ${isActive("/about")}`}>
        <li className="color">About</li>
      </Link>
    </ul>
  );

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <nav className="mx-5 rounded-xl px-4 py-2 lg:px-8 lg:py-2 mt-3 md:mt-2 bg-white shadow-xl">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-black">
          <Link to="/">
            <h2 className="mr-4 cursor-pointer py-1.5 text-xl md:text-2xl font-bold color">
              <TypeAnimation
                key="animationKey"
                sequence={["Masudur Rahman", 1000, "Masudur Rahman", 1000]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
          </Link>
          <div className="hidden md:block">
            <div className="flex justify-center items-center gap-5">
              <div className="hidden lg:block">{navList}</div>

              <Link
                className=""
                to="https://www.facebook.com/masudvairus/"
                target="blank"
              >
                <FaFacebookF className="cursor-pointer text-lg " />
              </Link>

              <Link className=" " to="https://x.com/iammrk24748" target="blank">
                <FaTwitter className="cursor-pointer text-lg " />
              </Link>

              <Link
                className=""
                to="https://www.instagram.com/iammrk24748/"
                target="blank"
              >
                <FaInstagram className="cursor-pointer text-lg " />
              </Link>

              <Link className="" onClick={handlePhoneClick}>
                <IoCall className="cursor-pointer text-lg " />
              </Link>

              <div className="border-r border-[#170602] h-8"></div>
              <div className="hidden items-center -ml-3 lg:block">
                <Search />
              </div>

              <div className="flex gap-2">
                {theme === "sunny" ? (
                  <IoMdSunny
                    onClick={handleTheme}
                    className="text-xl cursor-pointer"
                  />
                ) : (
                  <FaRegMoon
                    onClick={handleTheme}
                    className="text-xl cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <IoClose className="text-3xl color " />
            ) : (
              <IoMdMenu className="text-3xl color" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            <div onClick={handleNavClick}>{navList}</div>

            <div
              onClick={handleNavClick}
              className="flex justify-start items-center gap-5"
            >
              <Link
                className=""
                to="https://www.facebook.com/masudvairus/"
                target="blank"
              >
                <FaFacebookF className="cursor-pointer text-lg " />
              </Link>

              <Link className="" to="https://x.com/iammrk24748" target="blank">
                <FaTwitter className="cursor-pointer text-lg " />
              </Link>

              <Link
                className=""
                to="https://www.instagram.com/iammrk24748/"
                target="blank"
              >
                <FaInstagram className="cursor-pointer text-lg " />
              </Link>

              <Link className="" onClick={handlePhoneClick}>
                <IoCall className="cursor-pointer text-lg " />
              </Link>

              <div className="">
                {theme === "sunny" ? (
                  <IoMdSunny
                    onClick={handleTheme}
                    className="text-xl cursor-pointer"
                  />
                ) : (
                  <FaRegMoon
                    onClick={handleTheme}
                    className="text-xl cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col justify-start items-center mt-2">
              <div className="relative  gap-2 w-full ">
                <Input
                  type="search"
                  placeholder="Search"
                  containerProps={{
                    className: "color",
                  }}
                  className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 bg-[#f2f2f2]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className="!absolute left-3 top-[13px]">
                  <FaSearch className="text-sm text-blue-gray-300" />
                </div>
              </div>
              <button size="md" className="btn w-full mt-2 rounded-lg ">
                Search
              </button>
            </div>
          </div>
        </Collapse>
      </nav>
    </div>
  );
};

export default Menubar;
