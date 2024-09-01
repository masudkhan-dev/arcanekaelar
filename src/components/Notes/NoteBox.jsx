import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaAngleRight, FaHashtag } from "react-icons/fa";
import Footer from "../Home/Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const NoteBox = () => {
  const { Category } = useParams();
  const categoryData = useLoaderData();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 100,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.querySelector(".scroll-to-top");
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.classList.add("show");
        } else {
          scrollButton.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F1F3F6] min-h-screen">
      <div className="container mx-auto bg-[#F1F3F6] md:px-10 px-5 py-10 ">
        <div className="overflow-x-auto">
          <div className="pt-5 ">
            {/* Title */}

            <div className="flex justify-center items-center">
              <button className="btn-white flex gap-3 rounded-lg shadow-xl my-10  cursor-text">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-current color w-7"
                >
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <h2 className="md:text-4xl text-3xl font-extrabold color  ">
                  {Category}
                </h2>
              </button>
            </div>

            {/*Cards  */}
            <div className="grid md:grid-cols-2 gap-5 md:mx-10 mx-0 mb-8">
              {categoryData.map((note) => (
                <div key={note._id}>
                  <aside className="bg-[#fff] text-[#170602] p-6 rounded-lg  shadow-xl hover:shadow-none transition-all w-full max-w-lg font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-[#3d3d3d] text-sm font-t">fish</p>
                    </div>
                    <Link
                      to={`/SingleNotes/${note._id}`}
                      onClick={() => {
                        scrollToTop();
                      }}
                    >
                      <div className="mt-4 flex justify-start items-center gap-1 font-t">
                        <FaAngleRight className="text-[#333333]" />
                        <p className="text-[#333333] ">
                          {note.Title
                            ? note.Title.split(" ").slice(0, 3).join(" ")
                            : "Untitled"}
                          {note.Title && note.Title.split(" ").length > 3
                            ? "..."
                            : ""}
                        </p>
                      </div>
                    </Link>
                  </aside>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll top button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <BsFillArrowUpCircleFill className="text-4xl text-[#DDD8BC] border-2 border-[#796905] rounded-full shadow-bal hover:shadow-none transition-all" />
      </button>

      <Footer />
    </div>
  );
};

export default NoteBox;
