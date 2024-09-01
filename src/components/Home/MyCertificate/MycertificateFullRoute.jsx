import React, { useEffect, useState } from "react";
import MycertificateFullRouteBox from "./MycertificateFullRouteBox";
import Loader from "../../../Shared/Loader/Loader";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";

const MycertificateFullRoute = () => {
  const [certificate, setCertificate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/certificate`)
      .then((res) => res.json())
      .then((data) => {
        setCertificate(data);
        setLoading(false); // Update loading state after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching certificate data:", error);
        setLoading(false); // Update loading state in case of an error
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#CCC6A1] font-t">
      {/* Title */}
      <div className="bg-[#DDD8BC]">
        <div className="text-center font-t px-5 md:px-20 py-5 pt-16 md:pt-5">
          <div className="flex justify-start items-center gap-3 relative">
            <FaHashtag className="text-[#796905] text-4xl md:text-5xl font-bold" />
            <div className="flex justify-start items-center">
              <h2 className="md:text-8xl text-4xl font-semibold font-t text-[#bcb690]  z-10 relative mt-5">
                My Certificate
              </h2>
              <h2 className="md:text-5xl text-2xl font-semibold font-t text-[#796905]  z-10 absolute ">
                My Certificate
              </h2>
            </div>
          </div>

          {/* Desktop */}
          <div className="md:block hidden pb-10 ml-10">
            <div className="flex justify-start items-center mt-10 ">
              <BiSolidQuoteAltLeft className="absolute text-[#bcb690] text-4xl -mt-9 " />
              <p className="text-center md:text-left ml-16 text-base font-t text-[#3d3d3d] relative">
                Tomorrow is my exam. But it is not my special concern, because
                only a few pages of the ledger can not determine my future.
              </p>
              <BiSolidQuoteAltRight className="text-[#bcb690] ml-2 mt-3 text-4xl" />
              <div className="border-t-4 border-dotted  border-[#bcb690] ml-5 w-[42em]"></div>
            </div>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            <div className="flex justify-start items-center mt-10 gap-2">
              <BiSolidQuoteAltLeft className="text-[#bcb690]  -mt-9 text-7xl inline-block" />
              <p className="text-center md:text-left text-base font-t text-[#3d3d3d] -ml-3">
                Tomorrow is my exam. But it is not my special concern, because
                only a few pages of the ledger can not determine my future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10 pb-20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificate.map((certificate) => (
            <MycertificateFullRouteBox
              key={certificate._id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MycertificateFullRoute;
