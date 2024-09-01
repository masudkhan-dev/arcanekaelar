import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const handleShowSearch = () => {
    setExpanded(!expanded);
  };

  return (
    <main>
      <div className="">
        <div
          ref={searchRef}
          onClick={handleShowSearch}
          className={`px-4  py-2 overflow-hidden cursor-pointer ${
            expanded ? "w-96 bg-[#f2f2f2]" : "w-0 "
          } rounded-lg flex group items-center hover:duration-500 duration-500 `}
        >
          <div className="flex items-center justify-center fill-white ">
            <FaSearch className="color  text-[#f2f2f2]" />
          </div>
          <input
            onClick={handleClickInside}
            type="text"
            placeholder="Search Titles.."
            className="outline-none w-full color search-input font-normal px-2 bg-[#f2f2f2]"
          />
        </div>
      </div>
    </main>
  );
};

export default Search;
