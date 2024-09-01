import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="flex gap-3 md:gap-5 text-xl md:text-3xl justify-center md:justify-start ">
            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full "
              to="https://www.facebook.com/masudvairus/"
              target="blank"
            >
              <img src="https://i.ibb.co/ZTvmCSz/facebook.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all  rounded-lg "
              to="https://www.instagram.com/iammrk24748/"
              target="blank"
            >
              <img
                src="https://i.ibb.co/YNgXghs/ig-instagram-icon.png"
                alt=""
              />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all  rounded-full"
              to="https://twitter.com/iammrk24748"
              target="blank"
            >
              <img src="https://i.ibb.co/3pY1xD8/twitter.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full"
              to="https://wa.me/+8801627282572"
              target="blank"
            >
              <img
                src="https://i.ibb.co/MhpRSv0/whatsapp-color-icon.png"
                alt=""
              />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full"
              to="https://t.me/mr_problem_666"
              target="blank"
            >
              <img src="https://i.ibb.co/vmXwRx1/telegram.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full"
              to="https://bn.quora.com/profile/Mr-Problem-1"
              target="blank"
            >
              <img src="https://i.ibb.co/j3qGFJk/quora-1.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full"
              to="https://www.pinterest.com/masudvairus/"
              target="blank"
            >
              <img src="https://i.ibb.co/VHrgry0/pinterest.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full"
              to="https://www.linkedin.com/in/masudur-rahman-4aa72b284/"
              target="blank"
            >
              <img src="https://i.ibb.co/qrrJsCC/linkedin.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer"
              to="https://github.com/iammrk24748"
              target="blank"
            >
              <img src="https://i.ibb.co/L1QpKRN/github.png" alt="" />
            </Link>

            <Link
              className="w-5 md:w-20 cursor-pointer shadow-bal hover:shadow-none transition-all rounded-full"
              to="https://discord.com/channels/@iammrk24748"
              target="blank"
            >
              <img
                src="https://i.ibb.co/Gx8S2h2/discord-round-color-icon.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
