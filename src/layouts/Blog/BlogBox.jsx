import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoEye } from "react-icons/io5";

const BlogBox = ({ blog }) => {
  const { _id, title, image, author, description, timestamp } = blog;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = description?.slice(0, 100);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleReadTime = () => {
    const wordsPerMinute = 70;
    const words = description?.split(/\s+/)?.length;
    const readTime = Math.ceil(words / wordsPerMinute);
    return readTime;
  };

  return (
    <div className="bg-[#F1F3F6] ">
      <div className="container mx-auto transition-all  ">
        <div className=" transition-all duration-500 bg-[#fff] rounded-xl shadow-xl hover:shadow-none relative group">
          <figure className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden ">
            <img
              src={image}
              alt="Blog"
              height={1080}
              width={1920}
              className="h-full w-full group-hover:scale-110 transition-all duration-300 rounded-lg"
            />
          </figure>
          <div className="p-4 flex flex-col">
            <div className="flex justify-between items-center text-[#06223f31] text-sm">
              <p className="font-t">{timestamp}</p>
              <div className="flex items-center gap-2">
                <IoEye className="text-lg" />
                <span className="font-t tracking-widest">666</span>
              </div>
            </div>
            <div className="cursor-pointer text-lg text-[#170602] sm:text-xl font-bold my-2">
              {title}
            </div>

            <div className="flex justify-between">
              <div className="font-bold  text-[#06223f31] font-t text-sm">{`${handleReadTime()} Min to read`}</div>
              <div className="font-t text-[#06223f31] text-sm">
                Total: 999 words
              </div>
            </div>

            <div className="mt-2" style={{ whiteSpace: "pre-line" }}>
              {/* {showFullDescription ? description : truncatedDescription} */}
              <div
                className="text-sm lg:text-base text-[#170602]  "
                dangerouslySetInnerHTML={{
                  __html: showFullDescription
                    ? description
                    : truncatedDescription,
                }}
              />
              {description?.length > 100 && (
                <button className=" mt-2" onClick={toggleDescription}>
                  <b className="font-t">
                    {showFullDescription ? " Read Less" : " Read More"}
                  </b>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
