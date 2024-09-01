import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogBox from "./BlogBox";
import Loader from "../../Shared/Loader/Loader";
import Footer from "../../components/Home/Footer/Footer";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaArrowDown, FaArrowUp, FaHeart } from "react-icons/fa";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAtTop, setIsAtTop] = useState(true);
  const itemsPerPage = 6;

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
    fetchBlogData();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

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

  const fetchBlogData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/blog`)
      .then((response) => {
        const sortedBlogs = response.data.sort((a, b) => {
          const timestampA = new Date(a.timestamp);
          const timestampB = new Date(b.timestamp);
          return timestampB - timestampA;
        });

        setBlogs(sortedBlogs);
        setLoading(false);
        scrollToTop();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(blogs.length / itemsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="bg-[#F1F3F6] ">
      <div className=" ">
        {/* Title */}
        <header className="bg-[#F1F3F6] pt-24 ">
          <div className="container mx-auto px-5 md:px-20 text-center font-t">
            <div className="">
              <section className="flex justify-center items-center">
                <button className="btn-white flex gap-3 rounded-lg shadow-xl  cursor-text">
                  <FaHeart className="text-3xl" />
                  <h2 className="md:text-4xl text-3xl font-extrabold color  ">
                    Story
                  </h2>
                </button>
              </section>

              <article className="flex justify-center items-center">
                <button className="flex items-center mt-5 btn-white shadow-xl  cursor-text">
                  <BiSolidQuoteAltLeft className=" text-[#06223f31] text-lg md:text-3xl -ml-2 " />
                  <p className="text-[12px] md:text-base font-t -ml-2 text-[#06223f31] ">
                    All of the city lights, never shine as bright as your eyes.
                  </p>
                </button>
              </article>
            </div>
          </div>
        </header>

        <div className="container md:w-[1200px] mx-auto px-3 md:mt-8 mt-0">
          <div className="pt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ">
            {currentItems.map((blog) => (
              <BlogBox key={blog._id} blog={blog} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="my-10  flex justify-center">
          <button
            onClick={goToPreviousPage}
            className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
              currentPage === 1 ? "btn" : "btn-white shadow-xl"
            }`}
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(blogs.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
                  i + 1 === currentPage ? "btn " : "btn-white shadow-xl"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
          <button
            onClick={goToNextPage}
            className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
              currentPage === Math.ceil(blogs.length / itemsPerPage)
                ? "btn"
                : "btn-white shadow-xl"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Scroll top button */}
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
  );
};

export default Blog;
