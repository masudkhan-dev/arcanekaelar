import { RiHomeFill, RiQuillPenFill } from "react-icons/ri";
import { IoTriangle } from "react-icons/io5";
import { FaCode, FaHeart } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "/",
      icon: RiHomeFill,
    },
    {
      link: "/story",
      icon: FaHeart,
    },
    // {
    //   link: "/moment",
    //   icon: IoTriangle,
    // },
    {
      link: "/diary",
      icon: RiQuillPenFill,
    },
    {
      link: "/contact",
      icon: IoTriangle,
    },
    {
      link: "/admin",
      icon: FaCode,
    },
  ],
};
