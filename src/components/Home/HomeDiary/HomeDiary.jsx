import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const HomeDiary = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    fetchNoteData();
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
        console.error("Error fetching notes:", error);
        setLoading(false);
      });
  };

  const groupNotesByCategory = () => {
    return notes.reduce((acc, note) => {
      if (!acc[note.Category]) {
        acc[note.Category] = [];
      }
      acc[note.Category].push(note);
      return acc;
    }, {});
  };

  const groupedNotes = groupNotesByCategory();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Get the first 4 categories
  const topCategories = Object.keys(groupedNotes).slice(0, 4);

  return (
    <div className="bg-[#F1F3F6]">
      {/* header */}
      <header className="pt-16 pb-10">
        <div className="border-t-8 border-dashed border-[#06223f31] mb-16"></div>
        <div className="container mx-auto px-5 md:px-20 text-center font-t">
          <section className="flex justify-center items-center">
            <button className="btn-white flex gap-3 shadow-xl cursor-text">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current color w-7"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <h2 className="md:text-4xl text-3xl font-extrabold color">
                Diary
              </h2>
            </button>
          </section>
          <article className="flex justify-center items-center mt-5">
            <button className="btn-white shadow-xl cursor-text">
              <BiSolidQuoteAltLeft className="text-[#06223f31] text-lg md:text-xl" />
              <p className=" text-sm md:text-base font-t text-[#06223f31]">
                Be alone, That is when ideas are born.
              </p>
            </button>
          </article>
        </div>
      </header>

      {/* body */}
      <main>
        <div className="container mx-auto px-5 md:px-16 pb-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {topCategories.map((category) => (
              <div
                key={category}
                className="bg-white shadow-xl hover:shadow-none transition-all rounded-xl p-5"
              >
                <h2 className="text-2xl font-bold color text-center mb-4">
                  {category}
                </h2>
                <div className="border-b-2 mb-5"></div>
                <div className="space-y-3">
                  {groupedNotes[category].slice(0, 4).map((note) => (
                    <div key={note._id} className="color">
                      <Link
                        to={`/SingleNotes/${note._id}`}
                        className="flex items-center hover:underline"
                      >
                        <FaAngleRight />
                        <p>
                          {note.Title &&
                            note.Title.split(" ").slice(0, 5).join(" ")}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-5 pt-5 border-t">
                  <span className="text-[#06223f31] font-t">
                    Posted Notes: {categoryCount[category] || 0}
                  </span>
                  <Link to={`/noteBox/${category}`} onClick={scrollToTop}>
                    <button className="btn">View All</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-10">
            <Link to="/diary">
              <button className="btn shadow-xl hover:shadow-none transition-all">
                See More
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeDiary;
