import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Loader from "../../../Shared/Loader/Loader";
import Masonry from "react-responsive-masonry";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

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

    setLoading(true);
    fetch(`${import.meta.env.VITE_LOCAL_URL}/Memories`)
      .then((res) => res.json())
      .then((data) => {
        setMemories(data);
        setLoading(false);
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = memories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(memories.length / itemsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 100 });
  };

  return (
    <div className="bg-[#F1F3F6] font-t">
      <div className="pt-16 ">
        {/* Title */}
        <div className="bg-[#F1F3F6] pt-10">
          <div className="container mx-auto md:w-[1200px] px-5">
            <div className="text-center font-t pb-5" data-aos="fade-up">
              <div className="flex justify-center items-center">
                <button className="btn-white flex gap-3 shadow-xl  cursor-text">
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
                    Moments
                  </h2>
                </button>
              </div>

              {/* Desktop */}
              <div className="flex justify-center items-center">
                <div className="md:block hidden">
                  <button className="flex items-center mt-5 btn-white shadow-xl cursor-text">
                    <BiSolidQuoteAltLeft className=" text-[#06223f31] text-xl " />
                    <p className="font-bold text-base font-t text-[#06223f31] ">
                      Perhaps I failed, but I did my best.
                    </p>
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex justify-center items-center">
                <button className="block md:hidden btn-white shadow-xl mt-5  cursor-text">
                  <p className="text-[13px] text-[#06223f31] ">
                    Perhaps I failed, but I did my best.
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-3 md:px-16 pt-5 ">
          <Masonry columnsCount={3} gutter="10px">
            {currentItems.map((memory, i) => (
              <img
                key={i}
                src={memory.image}
                style={{ width: "100%", display: "block" }}
                alt={`Memory ${i + 1}`}
              />
            ))}
          </Masonry>
        </div>

        <div className="my-10 flex justify-center">
          <button
            onClick={goToPreviousPage}
            className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
              currentPage === 1 ? "btn" : "btn-white  shadow-xl"
            }`}
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(memories.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
                  i + 1 === currentPage ? "btn" : "btn-white  shadow-xl"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
          <button
            onClick={goToNextPage}
            className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
              currentPage === Math.ceil(memories.length / itemsPerPage)
                ? "btn"
                : "btn-white shadow-xl"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Scroll top button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <BsFillArrowUpCircleFill className="text-4xl text-[#fff] border-2 border-[#170602] rounded-full shadow-bal hover:shadow-none transition-all" />
      </button>

      <Footer />
    </div>
  );
};

export default Memories;
