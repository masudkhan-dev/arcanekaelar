import React from "react";
import Swal from "sweetalert2";

const MycertificateFullRouteBox = ({ certificate }) => {
  const { image, qualification, title, year, section } = certificate;

  const handleCertificate = () => {
    Swal.fire({
      width: "1280px",
      imageUrl: `${image}`,
      imageWidth: 1280,
      imageHeight: "auto",
      imageAlt: "Custom image",
    });
  };

  return (
    <div>
      <div className="card w-full bg-[#DDD8BC] border-2 border-[#796905] shadow-custom rounded-none">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{qualification}</p>
          <p>{section}</p>
          <p>{year}</p>
          <div className="card-actions">
            <button
              onClick={handleCertificate}
              className="ml-2 tracking-widest py-2 px-2 bg-[#f4d202] text-[#3d3d3d] font-bold shadow-custom border-2 border-[#796905] hover:border-2 hover:border-[#464c6a] rounded-none  hover:text-[#fff] hover:bg-[#796905] animate-bounce"
            >
              open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MycertificateFullRouteBox;
