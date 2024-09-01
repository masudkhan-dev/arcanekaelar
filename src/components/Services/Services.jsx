import React from "react";
import Marquee from "react-fast-marquee";

// SVG files
import PhotoShop from "../../../public/Service/Adobe_Photoshop.svg";
import bootstrap from "../../../public/Service/bootstrap.svg";
import bun from "../../../public/Service/Bun.svg";
import css from "../../../public/Service/css.svg";
import html from "../../../public/Service/html.svg";
import express from "../../../public/Service/express.svg";
import figma from "../../../public/Service/figma.svg";
import firebase from "../../../public/Service/firebase.svg";
import git from "../../../public/Service/git.svg";
import github from "../../../public/Service/github.svg";
import javascript from "../../../public/Service/javascript.svg";
import mongoDB from "../../../public/Service/mongoDB.svg";
import nextJs from "../../../public/Service/NextJs.svg";
import npm from "../../../public/Service/NPM.svg";
import react from "../../../public/Service/react.svg";
import tailwind from "../../../public/Service/tailwind.svg";
import vscode from "../../../public/Service/vscode.svg";
import zed from "../../../public/Service/zed.png";
import wordpress from "../../../public/Service/wordpress.svg";
import arch from "../../../public/Service/archlinux.svg";
import linux from "../../../public/Service/linux.svg";

const services = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: nextJs, alt: "Next.js" },
  { src: express, alt: "Express.js" },
  { src: mongoDB, alt: "MongoDB" },
  { src: wordpress, alt: "WordPress" },
  { src: figma, alt: "Figma" },
  { src: PhotoShop, alt: "Photoshop" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: firebase, alt: "Firebase" },
  { src: npm, alt: "NPM" },
  { src: bun, alt: "Bun" },
  { src: vscode, alt: "VSCode" },
  { src: zed, alt: "zed" },
  { src: linux, alt: "Linux" },
  { src: arch, alt: "Arch Linux" },
];

const ServiceIcon = React.memo(({ src, alt }) => (
  <div>
    <img src={src} alt={alt} className="w-16 md:w-20 h-16 md:h-20" />
  </div>
));

const Services = () => {
  return (
    <main className="bg-[#f1f3f6]">
      <div className="border-t-8 border-dashed border-[#06223f31]"></div>
      <div className="container mx-auto bg-[#f1f3f6] ">
        <Marquee
          gradient={false}
          speed={80}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex gap-8 my-8 md:my-10">
            {services.map((service, index) => (
              <ServiceIcon key={index} src={service.src} alt={service.alt} />
            ))}
          </div>
        </Marquee>
      </div>
      <div className="border-t-8 border-dashed border-[#06223f31]"></div>
    </main>
  );
};

export default Services;
