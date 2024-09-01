import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import axios from "axios";
import Footer from "../Home/Footer/Footer";

import { FaAngleRight, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const AllNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryCount, setCategoryCount] = useState({});
  const [isAtTop, setIsAtTop] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4; // Number of category groups to show per page

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.querySelector(".scroll-button");
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.classList.add("show");
          setIsAtTop(false);
        } else {
          scrollButton.classList.remove("show");
          setIsAtTop(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    fetchNoteData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchNoteData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/notes`)
      .then((response) => {
        setNotes(response.data);

        const countObj = {};
        response.data.forEach((note) => {
          countObj[note.Category] = (countObj[note.Category] || 0) + 1;
        });
        setCategoryCount(countObj);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  // Group notes by category
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.Category]) {
      acc[note.Category] = [];
    }
    acc[note.Category].push(note);
    return acc;
  }, {});

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // Pagination logic
  const categories = Object.keys(groupedNotes);
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(categories.length / categoriesPerPage))
    );
  };

  const renderCategoryGroup = (category) => (
    <div
      key={category}
      className="pt-10 shadow-xl hover:shadow-none transition-all bg-[#fff] relative rounded-xl p-5"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold color">{category}</h2>
      </div>
      <div className="border-b-2 mt-4"></div>
      <div className="grid grid-cols-1 gap-5 pt-5">
        {groupedNotes[category].slice(0, 4).map((note) => (
          <div key={note._id}>
            <div className="bg-[#fff] color">
              <div className="flex">
                <div className="flex justify-center items-center gap-2 hover:cursor-pointer font-t">
                  <Link
                    to={`/SingleNotes/${note._id}`}
                    className="flex items-center"
                  >
                    <FaAngleRight />
                    <p>
                      {note.Title &&
                        note.Title.split(" ").slice(0, 5).join(" ")}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-5 flex flex-col md:flex-row justify-between items-center pt-5">
        <span className="md:order-1 mb-3 md:mb-0 text-[#06223f31] font-t">
          Posted Notes: {categoryCount[category]}
        </span>
        <button
          className="md:order-2"
          onClick={() => {
            scrollToTop();
          }}
        >
          <Link to={`/noteBox/${category}`}>
            <p className="btn"> View All</p>
          </Link>
        </button>
      </div>
    </div>
  );

  return (
    <main className="bg-[#F1F3F6]">
      {/* Title */}
      <header className="bg-[#F1F3F6] pt-24 ">
        <div className="container mx-auto  px-5 md:px-20">
          <div className="text-center font-t pb-5">
            <section className="flex justify-center items-center">
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
                  Diary
                </h2>
              </button>
            </section>

            <article className="flex justify-center items-center">
              <button className="flex items-center mt-5 btn-white shadow-xl  cursor-text">
                <BiSolidQuoteAltLeft className=" text-[#06223f31] text-lg md:text-xl " />
                <p className="text-sm md:text-base font-t text-[#06223f31] ">
                  Be alone, That is when ideas are born.
                </p>
              </button>
            </article>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="bg-[#F1F3F6]">
        <div className="container mx-auto">
          <div className="bg-[#F1F3F6] mb-10 mt-8 grid md:grid-cols-2 grid-cols-1 gap-10 px-5 md:px-16">
            {currentCategories.map(renderCategoryGroup)}
          </div>
        </div>
      </main>

      {/* Pagination */}
      <div className="my-10 flex justify-center items-center">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`mx-1 px-3 py-2 cursor-pointer ${
            currentPage === 1 ? "btn" : "btn-white shadow-xl"
          }`}
        >
          Previous
        </button>

        {Array.from(
          { length: Math.ceil(categories.length / categoriesPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
                i + 1 === currentPage ? "btn" : "btn-white shadow-xl"
              }`}
            >
              {i + 1}
            </button>
          )
        )}

        <button
          onClick={goToNextPage}
          disabled={
            currentPage === Math.ceil(categories.length / categoriesPerPage)
          }
          className={`mx-1 px-3 py-2 cursor-pointer ${
            currentPage === Math.ceil(categories.length / categoriesPerPage)
              ? " btn"
              : "btn-white shadow-xl"
          }`}
        >
          Next
        </button>
      </div>

      {/* Scroll button and Footer */}
      <div>
        <button
          className="scroll-button fixed bottom-5 right-5 p-3 bg-white rounded-full shadow-xl transition-all hover:shadow-lg"
          onClick={isAtTop ? scrollToBottom : scrollToTop}
        >
          {isAtTop ? (
            <FaArrowDown className="text-lg text-[#000]" />
          ) : (
            <FaArrowUp className="text-lg text-[#000]" />
          )}
        </button>

        <Footer />
      </div>
    </main>
  );
};

export default AllNote;
