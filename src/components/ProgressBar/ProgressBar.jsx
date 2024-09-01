import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const progressWidth = (scrollY / (documentHeight - windowHeight)) * 100;

      setProgressWidth(progressWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="z-50"
      id="progress-container"
      style={{
        height: "14px",
        width: "100%",
        background: "transparent",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <div
        className="progress-fill z-50"
        style={{
          height: "100%",
          background: "#170602",
          width: `${progressWidth}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
