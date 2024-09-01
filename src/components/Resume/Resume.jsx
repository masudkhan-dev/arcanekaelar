import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-[#F1F3F6]">
      <div className="font-t pt-20 ">
        <div>
          <div className="border-t-8 border-dashed border-[#06223f31] bg-[#fff] -mt-20"></div>

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
                      className="fill-current color w-8"
                    >
                      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <h2 className="md:text-4xl text-3xl font-extrabold color  ">
                      Resume
                    </h2>
                  </button>
                </div>

                {/* Desktop */}
                <div className="flex justify-center items-center">
                  <div className="md:block hidden">
                    <button className="flex items-center mt-5 btn-white shadow-xl cursor-text">
                      <BiSolidQuoteAltLeft className=" text-[#06223f31] text-xl " />
                      <p className="font-bold text-base font-t text-[#06223f31] ">
                        I don't compete with anyone, I compete with myself.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex justify-center items-center">
                  <button className="block md:hidden btn-white shadow-xl mt-5  cursor-text">
                    <p className="text-[13px] text-[#06223f31] font-t">
                      I don't compete with anyone, I compete with myself.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container md:w-[1200px] mx-auto bg-[#F1F3F6] pt-5 pb-10">
            <div className="min-h-screen flex items-center justify-center ml-1 mr-3 md:ml-0 md:mr-0">
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                <div
                  className="flex flex-row-reverse md:contents"
                  data-aos="fade-up"
                >
                  <div className="w-full col-start-1 col-end-5 p-4 my-4 -ml-6 md:ml-auto bg-white shadow-xl rounded-lg">
                    <h3 className="font-semibold text-base md:text-xl mb-1 font-t text-[#170602]">
                      Bachelor of Business Administration (B.B.A)
                    </h3>
                    <h5 className="text-[12px] bg-[#F1F3F6] italic inline-block px-5 my-3">
                      2019 - Present
                    </h5>
                    <p className="text-[#170602]">
                      Sirajganj Government College
                    </p>
                    <p className="my-2">Subject : Management</p>
                    <p>Board : National University</p>
                    <p className="my-2">Result: Pending (Out of 4.00)</p>
                  </div>

                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-[#170602] pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#170602] rounded-full bg-[#170602] shadow"></div>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-[#170602] pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#170602] rounded-full bg-[#170602] shadow"></div>
                  </div>

                  <div
                    className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 color bg-white shadow-xl rounded-lg -ml-6 md:ml-auto "
                    data-aos="fade-right"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#170602]">
                      Higher Secondary School Certificate (H.S.C)
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F1F3F6] italic inline-block px-5 my-3">
                      2017 - 2019
                    </h5>
                    <p className="text-[#170602]">
                      Belkuchi Government College
                    </p>
                    <p className="my-2">Subject : Business Studies</p>
                    <p>Board : Rajshahi</p>
                    <p className="my-2">Result: 4.08 (Out of 5.00)</p>
                    <p>Passing of year: 2019</p>
                  </div>
                </div>

                {/* trial */}
                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="w-full col-start-1 col-end-5 p-4 my-4 -ml-6 md:ml-auto color bg-white shadow-xl rounded-lg"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#170602]">
                      Secondary School Certificate (S.S.C)
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F1F3F6] text-[#170602] italic inline-block px-5 my-3">
                      2015 - 2017
                    </h5>
                    <p className="text-[#170602]">
                      Sohagpur S.K Pilot Model High School
                    </p>
                    <p className="my-2">Board : Rajshahi</p>
                    <p>Result: 4.45 (Out of 5.00)</p>
                    <p className="mt-2">Passing of year: 2017</p>
                  </div>

                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-[#170602] pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#170602] rounded-full bg-[#170602] "></div>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-[#170602] pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#170602] rounded-full bg-[#170602] shadow"></div>
                  </div>

                  <div
                    className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 color bg-white rounded-lg shadow-xl -ml-6 md:ml-auto"
                    data-aos="fade-down"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#170602]">
                      Diploma in Computer Science & ICT
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F1F3F6] text-[#170602] italic inline-block px-5 my-3">
                      2017
                    </h5>
                    <p className="text-[#170602]">
                      Science & Information Technology (SIT) Foundation
                    </p>
                    <p className="my-2">
                      Board : Institute of Information & Communication
                      Technology
                    </p>
                    <p>Result: A+ </p>
                    <p className="mt-2">Passing of year: 2017</p>
                  </div>
                </div>

                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="w-full col-start-1 col-end-5 p-4 my-4 -ml-6 md:ml-auto color bg-white rounded-lg shadow-xl "
                    data-aos="fade-up-right"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#170602]">
                      16th Met Course
                    </h3>
                    <h5 className="text-[12px] font-t  bg-[#F1F3F6] text-[#170602] italic inline-block px-5 my-3">
                      2018 - Present Scouting
                    </h5>
                    <p className="text-[#170602]">
                      Sirajganj Polytechnic Institute, Sirajganj
                    </p>
                    <p className="my-2">Board : Bangladesh Scouts</p>
                    <p>Status: Rover Met </p>
                  </div>

                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-[#170602] pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#170602] rounded-full bg-[#170602] shadow"></div>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-[#170602] pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#170602] rounded-full bg-[#170602] shadow"></div>
                  </div>

                  <div
                    className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 color bg-white shadow-xl rounded-lg -ml-6 md:ml-auto"
                    data-aos="flip-right"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#170602]">
                      Language Fluency
                    </h3>
                    <ul className="ml-5 mt-5">
                      <li className="list-disc">
                        English : Best in reading, speaking and writing.
                      </li>
                      <li className="list-disc my-3">
                        Bengali : Best in reading, speaking and writing.
                      </li>
                      <li className="list-disc">
                        Hindi : Good speaking and writing.
                      </li>
                      <li className="list-disc mt-3">Urdu : Good speaking.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
