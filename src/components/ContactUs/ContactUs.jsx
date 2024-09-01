import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import "./ContactUs.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const ContactUs = () => {
  // send mail
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_s0vnbrl", "template_ahxs11j", form.current, {
        publicKey: "y0Hj735gXxQosySkz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state after sending email
      });
  };

  return (
    <footer className="bg-[#F1F3F6] font-t">
      {/* Title */}
      <header className="bg-[#F1F3F6] pt-28 md:pt-24 ">
        <div className="container mx-auto font-t px-5">
          <section className="flex justify-center items-center">
            <button className="btn-white flex gap-3  rounded-lg shadow-xl ">
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
                Who Am I
              </h2>
            </button>
          </section>

          <article className="flex justify-center items-center pt-8">
            <button className=" btn-white  shadow-xl">
              <BiSolidQuoteAltLeft className=" text-[#06223f31] text-lg md:text-xl " />
              <p className=" text-sm md:text-base font-t text-[#06223f31] ">
                Six + Three = Nine, Can you be mine?
              </p>
            </button>
          </article>
        </div>
      </header>

      <main className="my-2 md:my-10 bg-[#F1F3F6]">
        <div className="container md:w-[1200px] mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="flex flex-col justify-center items-start px-8 md:ml-[15%] gap-5">
              <h2 className="text-3xl md:text-5xl font-bold font-t text-[#170602]">
                Lets Connect
              </h2>
              <div>
                <ul className=" font-t text-base gap-3 flex flex-col justify-start items-start">
                  <li className=" cursor-pointer italic flex flex-row items-center  gap-2">
                    <FaLocationDot></FaLocationDot>
                    Moscow, Russia
                  </li>
                  <li className="cursor-pointer italic flex flex-row items-center  gap-2">
                    <IoCall></IoCall>
                    +666 ***** *******
                  </li>

                  <li className="cursor-pointer italic flex flex-row items-center gap-2">
                    <IoMdMail></IoMdMail>
                    Профессор@gmail.com
                  </li>
                </ul>
              </div>

              <div>
                {/* Social Media */}
                <div className="">
                  <div className="flex gap-5 text-base md:text-xl justify-center items-center ">
                    <div className="Scard">
                      <Link
                        className="socialContainer containerOne  shadow-xl hover:shadow-none "
                        target="blank"
                        to="https://www.facebook.com/orphicdern"
                      >
                        <FaFacebookF className="socialSvg FacebookSvg" />
                      </Link>
                      <Link
                        className="socialContainer containerTwo  shadow-xl hover:shadow-none "
                        target="blank"
                      >
                        <FaTwitter className="socialSvg  twitterSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerThree shadow-xl hover:shadow-none"
                        target="blank"
                      >
                        <FaInstagram className="socialSvg  instagramSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerFour  shadow-xl hover:shadow-none "
                        to="https://wa.me/+8801627282572"
                        target="blank"
                      >
                        <FaWhatsapp className="socialSvg whatsappSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerFive  shadow-xl hover:shadow-none "
                        to="https://t.me/mr_problem_666"
                        target="blank"
                      >
                        <FaTelegramPlane className="socialSvg twitterSvg" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-center items-center text-base md:text-xl  mt-5">
                    <div className="Scard">
                      <Link
                        className="socialContainer containerSix  shadow-xl hover:shadow-none "
                        to="https://bn.quora.com/profile/Mr-Problem-1"
                        target="blank"
                      >
                        <FaQuora className="socialSvg FacebookSvg" />
                      </Link>
                      <Link
                        className="socialContainer containerSeven  shadow-xl hover:shadow-none "
                        to="https://www.pinterest.com/masudvairus/"
                        target="blank"
                      >
                        <FaPinterest className="socialSvg  twitterSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerEight  shadow-xl hover:shadow-none "
                        target="blank"
                      >
                        <FaLinkedinIn className="socialSvg  instagramSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerNine  shadow-xl hover:shadow-none "
                        to="https://github.com/iammrk24748"
                        target="blank"
                      >
                        <FaGithub className="socialSvg whatsappSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerTen  shadow-xl hover:shadow-none "
                        to="https://discord.com/channels/@iammrk24748"
                        target="blank"
                      >
                        <FaDiscord className="socialSvg twitterSvg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex justify-center md:justify-start items-center my-10 ">
              <form
                className="flex flex-col gap-5 w-[20em] md:w-[35em] bg-[#fff]  py-10 px-8 md:px-10 rounded-lg shadow-xl"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-bold text-lg text-[#170602]"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className=" border-2 border-[#170602] rounded w-full bg-[#fff] p-3 mt-2 text-[#170602]"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-bold text-lg text-[#170602]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="from_email"
                    placeholder="Email"
                    required
                    className="border-2 border-[#170602] rounded w-full bg-[#fff] p-3 mt-2 text-[#170602]"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-bold text-lg text-[#170602]"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Tell me something..."
                    className="border-2 border-[#170602] w-full rounded bg-[#fff] p-3 mt-2 text-[#170602]"
                  ></textarea>
                </div>
                <div className="flex justify-center items-center gap-10 ">
                  <input
                    name="message"
                    type="submit"
                    value={loading ? "Sending..." : "Send Message"}
                    disabled={loading}
                    className="btn w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="bg-[#F1F3F6]">
        <div className="mt-10 pb-10">
          <div className="border-t-8 border-dashed border-[#06223f31]  w-full "></div>

          <div className="flex justify-center items-center mt-8">
            <p className="md:text-base text-sm  color">
              &copy; All rights reserved 2023 - {new Date().getFullYear()} |
              Masudur Rahman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
