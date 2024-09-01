import React from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "../../../../public/professor.png";

const Banner = () => {
  return (
    <div className="bg-[#f1f3f6] h-screen flex items-center justify-center">
      <header className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-6">
          <figure className="flex justify-center items-center">
            <img
              src={logo}
              width={200}
              height={200}
              alt="Logo"
              className="border-8 border-black rounded-full shadow-xl"
            />
          </figure>
          <h2 className="text-4xl md:text-5xl font-bold font-t">Профессор</h2>
          <article>
            <button className="bg-white py-1 px-3 shadow-xl rounded-lg">
              Hey, I'm Expert of
            </button>
          </article>
          <article className="text-2xl md:text-3xl font-bold font-t">
            <TypeAnimation
              key="animationKey"
              sequence={[
                "Web Development",
                1000,
                "Canva Design",
                1000,
                "Content Writing",
                1000,
                "Data Entry",
                1000,
                "Adobe Photoshop",
                1000,
                "Microsoft Office",
                1000,
                "Linux Administration",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </article>
        </div>
      </header>
    </div>
  );
};

export default Banner;
