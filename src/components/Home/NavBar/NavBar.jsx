import React, { useState, useEffect } from "react";
import { content } from "./Content";
import { createElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode, FaHeart } from "react-icons/fa";
import { RiHomeFill, RiMenu3Fill, RiQuillPenFill } from "react-icons/ri";
import { GiCrossedSabres, GiPistolGun } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import { IoTriangle } from "react-icons/io5";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const index = nav.findIndex((item) => item.link === location.pathname);
    setActive(index !== -1 ? index : 0);
  }, [location.pathname, nav]);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  const handleNavItemClick = (index = active) => {
    setActive(index);
    closeMobileMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const MobileNavItem = ({ to, icon, index, text, isActive }) => (
    <li>
      <Link
        to={to}
        onClick={() => handleNavItemClick(index)}
        className={`h-9 w-9 flex items-center rounded-full text-xl ${
          isActive ? "bg-[#fff]    text-[#021708] rounded-full p-2" : ""
        }`}
      >
        {icon}
        <span className="ml-0">{text}</span>
      </Link>
    </li>
  );

  return (
    <div className="z-50 md:fixed font-t">
      <div className="relative">
        {/* Desktop Menu */}
        <div className="px-4 ">
          <div className="flex justify-center items-center md:h-screen text-[#333333]">
            <nav className="hidden md:flex space-x-10 ">
              <ul className="space-y-3 flex flex-col">
                <Link to="/" onClick={() => handleNavItemClick(0)}>
                  <li className="relative bg-[#170602]   p-4 rounded-full transition-all  text-[#fff]    text-2xl w-14 hover:w-32 group  ">
                    <RiHomeFill className="" />
                    <span className="absolute ml-8 top-1/2 -translate-y-1/2 hidden group-hover:inline-block">
                      Home
                    </span>
                  </li>
                </Link>

                <Link to="/story" onClick={() => handleNavItemClick(0)}>
                  <li className="relative bg-[#170602]   p-4 rounded-full transition-all  text-[#fff]    text-2xl w-14 hover:w-32 group  ">
                    <FaHeart />
                    <span className="absolute ml-8 top-1/2 -translate-y-1/2 hidden group-hover:inline-block">
                      Story
                    </span>
                  </li>
                </Link>

                {/* <Link to="/moment" onClick={() => handleNavItemClick(0)}>
                      <li className="relative bg-[#170602]   p-4 rounded-full transition-all  text-[#fff]    text-2xl w-14 hover:w-40 group  ">
                        <IoTriangle />
                        <span className="absolute ml-8 top-1/2 -translate-y-1/2 hidden group-hover:inline-block">
                          Moment
                        </span>
                      </li>
                    </Link> */}

                <Link to="/diary" onClick={() => handleNavItemClick(0)}>
                  <li className="relative bg-[#170602]   p-4 rounded-full transition-all  text-[#fff]    text-2xl w-14 hover:w-32 group  ">
                    <RiQuillPenFill />

                    <span className="absolute ml-8 top-1/2 -translate-y-1/2 hidden group-hover:inline-block">
                      Diary
                    </span>
                  </li>
                </Link>
                <Link to="/contact" onClick={() => handleNavItemClick(0)}>
                  <li className="relative bg-[#170602] p-4 rounded-full transition-all text-[#fff] text-2xl w-14 hover:w-36 group">
                    <IoTriangle className="" />
                    <span className="absolute ml-8 top-1/2 -translate-y-1/2 hidden group-hover:inline-block">
                      Contact
                    </span>
                  </li>
                </Link>
                <Link to="/admin" onClick={() => handleNavItemClick(0)}>
                  <li className="relative bg-[#170602]   p-4 rounded-full transition-all  text-[#fff]    text-2xl w-14 hover:w-36 group  ">
                    <FaCode className="" />
                    <span className="absolute ml-8 top-1/2 -translate-y-1/2 hidden group-hover:inline-block">
                      Admin
                    </span>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        {/* End Desktop Menu */}

        {/* Start Mobile Menu */}
        <div className=" ">
          <div className="block md:hidden fixed top-3 left-3 right-3 bg-[#fff] shadow-xl py-4 z-50 px-5 rounded-2xl">
            <div className="flex justify-between items-center ">
              {/* Mobile Menu Logo */}
              <div className="text-2xl font-bold  text-[#170602]   ">
                <Link to="/" onClick={() => handleNavItemClick(0)}>
                  <TypeAnimation
                    sequence={["Профессор", 1000]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </Link>
              </div>

              {/* Mobile Menu Icon */}
              <div
                className="sm:cursor-pointer cursor-pointer  text-[#170602]   "
                onClick={handleNav}
              >
                {showMenu ? (
                  <GiCrossedSabres size={24} />
                ) : (
                  <GiPistolGun size={32} className="transform scale-x-[-1]" />
                )}
              </div>
              {/* Mobile Menu Section */}
              <nav
                className={`fixed z-[999rem] flex justify-center items-center gap-5 bg-[#170602] list-none text-[#fff] px-6 py-3 backdrop-blur-md rounded-full duration-700 transition-all ${
                  showMenu ? "bottom-10" : "bottom-[-100%]"
                }`}
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  justifyContent: "center",
                }}
              >
                {nav.map((item, i) => (
                  <MobileNavItem
                    key={i}
                    to={item.link}
                    icon={createElement(item.icon)}
                    index={i}
                    text={item.text}
                    isActive={active === i}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
        {/* End Mobile Menu */}
      </div>
    </div>
  );
};

export default Navbar;
