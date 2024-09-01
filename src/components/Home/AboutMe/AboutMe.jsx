import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { FaAngleRight, FaHashtag } from "react-icons/fa";
import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from "react-icons/bi";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
    });
  }, []);

  const handleCvDownload = () => {
    Swal.fire({
      html: `
    <div>
      <img src="https://i.ibb.co/hB8jM5D/1.png" style="width: 100%;" />
      <img src="https://i.ibb.co/rQwRyJx/2.png" style="width: 100%;" />
    </div>`,
      showCancelButton: true,
      confirmButtonText: "Download",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://drive.google.com/file/d/1LQohH9pQTW22FhysajZzYQTLz5YSjlOk/view?usp=sharing"
        );
      }
    });
  };

  const handleMailClick = () => {
    const email = "iammasud004@gmail.com";

    const mailtoLink = `mailto:${email}`;

    const isMobileOrTablet = window.innerWidth < 1024;

    window.open(mailtoLink, "_blank");

    if (isMobileOrTablet) {
      window.open(mailtoLink, "_blank");
    } else {
      window.location.href = mailtoLink;
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+8801627282572";
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const handleAddressClick = () => {
    const address = "Sirajganj, Rajshahi";
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapLink, "_blank");
  };

  return (
    <div className="bg-[#DDD8BC] font-t pb-20">
      <div className="border-t-8 border-dashed border-[#bcb690]  pb-10"></div>
      <div className=" ">
        {/* Title */}
        <div
          className="text-center font-t container mx-auto px-5 md:px-10"
          data-aos="fade-right"
        >
          <div className="flex justify-start items-center gap-3 relative">
            <FaHashtag className="text-[#796905] text-4xl md:text-5xl font-bold" />
            <div className="flex justify-start items-center">
              <h2 className="md:text-8xl text-6xl font-semibold font-t text-[#bcb690]  z-10 relative ">
                Who Am I
              </h2>
              <h2 className="md:text-4xl text-3xl font-semibold font-t text-[#796905]  z-10 absolute ">
                Who Am I
              </h2>
            </div>
          </div>

          {/* Desktop */}
          <div className="md:block hidden pb-10">
            <div className="flex justify-start items-center mt-10 ml-10">
              <BiSolidQuoteAltLeft className="absolute text-[#bcb690] -mt-3 text-3xl" />
              <p className="text-center md:text-left ml-10 text-base font-t text-[#796905] relative">
                You can be everything. You can be infinite amount of things that
                people are.
              </p>
              <BiSolidQuoteAltRight className="text-[#bcb690] ml-2 -mt-3 text-3xl" />
              <div className="border-t-4 border-dashed border-[#bcb690] ml-5 w-[33em]"></div>
            </div>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            <div className="flex justify-start items-center mt-10 gap-2">
              <BiSolidQuoteAltLeft className="text-[#bcb690] -mt-8 text-5xl" />
              <p className="text-center md:text-left text-base font-t text-[#796905] -ml-1">
                You can be everything. You can be infinite amount of things that
                people are.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#CCC6A1]" data-aos="fade-right">
          <div className="md:flex justify-between items-center container mx-auto px-5 md:px-16  md:py-5 pb-16 md:pb-20">
            <div className="mt-10 mb-10 w-full" data-aos="fade-up">
              <img
                className="w-96 border-solid"
                src="https://i.ibb.co/1RSHtTY/about-img.png"
                alt=""
              />
            </div>
            <div
              className="md:ml-10 space-y-4  w-full mt-5 bg-[#CCC6A1] "
              data-aos="fade-up"
            >
              <h2 className="font-t text-2xl md:text-4xl font-semibold text-[#3d3d3d]">
                Hey There,
              </h2>

              <p className=" text-[#3d3d3d] text-base text-justify">
                Asslamu alaikum, I'm{" "}
                <span className="font-bold">Masudur Rahman</span>, a student
                with a mind tuned to the frequency of creativity. From crafting
                captivating web experiences to navigating the intricate realms
                of Microsoft wizardry, I seamlessly blend pixels and codes. My
                canvas expands to Adobe Photoshop, where logos come to life, and
                words find their rhythm in content creation. Whether it's
                designing posters and cards or fortifying the digital frontier
                with linux administration, I embark on each venture with a
                symphony of innovation.
              </p>
              <div className="space-y-5 text-base">
                <div className="md:flex justify-between mt-5 gap-5 text-[#555a64]">
                  <div className="space-y-2">
                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p>
                        <span className="font-bold text-[#3d3d3d]">Name: </span>
                        Masudur Rahman
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <span className="font-bold text-[#3d3d3d]">
                        Birthday:
                      </span>
                      7 February 2000
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p
                        onClick={handleAddressClick}
                        className="cursor-pointer"
                      >
                        <span className="font-bold text-[#3d3d3d]">
                          Address:{" "}
                        </span>
                        Sirajganj, Rajshahi
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p>
                        <span className="font-bold text-[#3d3d3d]">
                          Zip Code:
                        </span>{" "}
                        6740
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p>
                        <span className="font-bold text-[#3d3d3d]">
                          Residence:
                        </span>{" "}
                        Bangladesh
                      </p>
                    </span>
                  </div>

                  <div className="space-y-2 mt-3 md:mt-0">
                    <span className="flex justify-start items-center gap-2 ">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p
                        className="cursor-pointer text-[#3d3d3d]"
                        onClick={handleMailClick}
                      >
                        <span className="font-bold text-[#3d3d3d] cursor-pointer">
                          Email:
                        </span>{" "}
                        iammasud004@gmail.com
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p className="cursor-pointer" onClick={handlePhoneClick}>
                        <span className="font-bold text-[#3d3d3d] cursor-pointer">
                          Phone:
                        </span>{" "}
                        +880162-7282572
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p>
                        <span className="font-bold text-[#3d3d3d]">
                          Blood Group:
                        </span>{" "}
                        A+
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p>
                        <span className="font-bold text-[#3d3d3d]">Hobby:</span>{" "}
                        Writing, Coding & Explore
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2 text-[#3d3d3d]">
                      <FaAngleRight className="text-[#3d3d3d]" />
                      <p>
                        <span className="font-bold text-[#3d3d3d]">
                          Relationship:
                        </span>{" "}
                        Single
                      </p>
                    </span>
                  </div>
                </div>

                <button
                  className="ml-2 tracking-widest py-2 px-2 bg-[#f4d202] text-[#3d3d3d] font-bold shadow-custom hover:shadow-none transition-all border-2 border-[#796905] hover:border-2 hover:border-[#464c6a] rounded-none  hover:text-[#fff] hover:bg-[#796905]"
                  onClick={handleCvDownload}
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
