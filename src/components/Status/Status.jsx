import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "./Status.css";

const Status = () => {
  return (
    <main className="bg-[#F1F3F6] font-t py-7">
      <div className="border-t-8 border-dashed border-[#06223f31] pt-2"></div>

      <div>
        <div className="">
          {/* Title */}
          <div className="bg-[#F1F3F6] pt-8">
            <div className="container mx-auto  px-5">
              <div className="text-center font-t pb-5" data-aos="fade-up">
                <div className="flex justify-center items-center">
                  <button className="btn-white flex gap-3 rounded-lg shadow-xl  cursor-text">
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
                      Status
                    </h2>
                  </button>
                </div>

                {/* Desktop */}
                <div className="flex justify-center items-center">
                  <button className="flex justify-center items-center mt-5  btn-white rounded-lg shadow-xl cursor-text">
                    <BiSolidQuoteAltLeft className=" text-[#06223f31] text-lg md:text-xl " />
                    <p className="text-[12px] md:text-base font-t text-[#06223f31] ">
                      I don't compete with anyone, I compete with myself.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* body */}
          <div className="">
            <div className="bg-[#F1F3F6] py-1">
              <div className="container mx-auto">
                <div className="mx-5">
                  <Marquee
                    gradient={false}
                    speed={80}
                    // pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                  >
                    <div>
                      <div className="flex gap-10">
                        <div>
                          <div className="page w-72 md:w-96 h-32 md:h-40 flex justify-center items-center shadow-xl my-8">
                            <div className="margin"></div>
                            <div className="flex flex-col justify-center items-start gap-2">
                              <FaQuoteLeft className="text-[#06223f31] text-3xl" />
                              <p>
                                নিজেকে ভালোবাসুন, নিজেকে ভালোবাসতে না পারলে
                                আমাকে ভালোবাসুন!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="page w-72  md:w-96 h-32 md:h-40 flex justify-center items-center shadow-xl my-5">
                            <div className="margin"></div>
                            <div className="flex flex-col justify-center items-start gap-2">
                              <FaQuoteLeft className="text-[#06223f31] text-3xl" />
                              <p>
                                All of the city lights,💡 <br /> Never shine as
                                bright as your eyes. 👁️
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="page w-72  md:w-96 h-32 md:h-40 flex justify-center items-center shadow-xl my-5 mr-10">
                            <div className="margin"></div>
                            <div className="flex flex-col justify-center items-start gap-2">
                              <FaQuoteLeft className="text-[#06223f31] text-3xl" />
                              <p>
                                Don't compare yourself with others, <br />-
                                Everyone is better than you...✌️
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="page w-72  md:w-96 h-32 md:h-40 flex justify-center items-center shadow-xl my-5 mr-10">
                            <div className="margin"></div>
                            <div className="flex flex-col justify-center items-start gap-2">
                              <FaQuoteLeft className="text-[#06223f31] text-3xl" />
                              <p>
                                ক্ষুধা না লাগলে,🍚 <br />- হয়তো কেউই কোনো কাজ
                                করত না!😐
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Status;
