import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Lottie from "lottie-react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import loading from "../../../assets/load_infinite.json";
import ProgressBar from "../../ProgressBar/ProgressBar";
import Status from "../../Status/Status";
import Services from "../../Services/Services";
import HomeStory from "../HomeStory/HomeStory";
import HomeDiary from "../HomeDiary/HomeDiary";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#fff] min-h-screen">
      <ProgressBar height="6" duration="0.2" />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="w-96 mt-52">
            <Lottie animationData={loading} />
          </div>
        </div>
      ) : (
        <main>
          <Banner />
          <Services />
          <HomeStory />
          <HomeDiary />
          <Status />
          <Footer />

          {/* Scroll button */}
          <div>
            <button
              className="scroll-button scroll-smooth fixed bottom-5 right-5 p-3 bg-white rounded-full shadow-lg transition-all hover:shadow-xl"
              onClick={isAtTop ? scrollToBottom : scrollToTop}
            >
              {isAtTop ? (
                <FaArrowDown className="text-lg text-[#000]" />
              ) : (
                <FaArrowUp className="text-lg text-[#000]" />
              )}
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
