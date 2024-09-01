import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeStory = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogData();
  }, []);

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
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  };

  const handleReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const displayedBlogs = blogs.slice(0, 6);

  return (
    <div>
      <div className="">
        <header className="bg-[#F1F3F6] pt-20">
          <div className="container mx-auto text-center font-t ">
            <section className="flex justify-center items-center">
              <button className="btn-white flex gap-3 rounded-lg shadow-xl cursor-text">
                <FaHeart className="text-3xl" />
                <h2 className="md:text-4xl text-3xl font-extrabold color">
                  Story
                </h2>
              </button>
            </section>

            <article className="flex justify-center items-center">
              <button className="flex items-center mt-5 btn-white shadow-xl cursor-text">
                <BiSolidQuoteAltLeft className="text-[#06223f31] text-lg md:text-2xl" />
                <p className="text-[12px] md:text-base font-t text-[#06223f31]">
                  All of the city lights, never shine as bright as your eyes.
                </p>
              </button>
            </article>
          </div>
        </header>

        <main className="bg-[#f1f3f6] px-3 md:px-20">
          <div className="container mx-auto transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {displayedBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  handleReadTime={handleReadTime}
                />
              ))}
            </div>
            {blogs.length > 6 && (
              <Link to="/story" className="flex justify-end items-end mt-8">
                <button to="/story" className="btn">
                  Show More
                </button>
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, handleReadTime }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { title, image, description, timestamp } = blog;
  const truncatedDescription = description?.slice(0, 100) || "";

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    // card body
    <div className="transition-all duration-500 bg-[#fff] rounded-xl shadow-xl hover:shadow-none relative group">
      <figure className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden">
        {image && (
          <img
            src={image}
            alt="Blog"
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300 rounded-lg"
          />
        )}
      </figure>
      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-center text-[#06223f31] text-sm">
          <p className="font-t">{timestamp || "No date available"}</p>
          <div className="flex items-center gap-2">
            <IoEye className="text-lg" />
            <span className="font-t tracking-widest">666</span>
          </div>
        </div>
        <div className="cursor-pointer text-lg text-[#170602] sm:text-xl font-bold my-2">
          {title || "Untitled"}
        </div>

        <div className="flex justify-between">
          <div className="font-bold text-[#06223f31] font-t text-sm">
            {`${handleReadTime(description || "")} Min to read`}
          </div>
          <div className="font-t text-[#06223f31] text-sm">
            Total: {description ? description.split(/\s+/).length : 0} words
          </div>
        </div>

        <div className="mt-2 whitespace-pre-line">
          <div
            className="text-sm lg:text-base text-[#170602]"
            dangerouslySetInnerHTML={{
              __html: showFullDescription ? description : truncatedDescription,
            }}
          />
          {description && description.length > 100 && (
            <button className="mt-2" onClick={toggleDescription}>
              <b className="font-t hover:underline">
                {showFullDescription ? " Read Less" : " Read More"}
              </b>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
