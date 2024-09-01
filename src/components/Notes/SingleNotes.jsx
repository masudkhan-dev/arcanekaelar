import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";

const SingleNotes = () => {
  const noteData = useLoaderData();
  console.log(noteData);

  return (
    <main className="bg-[#F1F3F6] h-screen pb-10">
      <div className="bg-[#F1F3F6] pb-10">
        <div className="container mx-auto md:w-[1200px]">
          {/* Title */}
          <div className="bg-[#F1F3F6] pt-24 md:pt-20">
            <div className="flex justify-start items-center gap-3  pb-8 px-5 md:px-20">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-[#06223f31] w-10 "
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <div className="flex flex-col justify-start items-center">
                <h2 className="md:text-5xl text-2xl font-semibold font-t text-[#170602]  ">
                  {noteData.Title}
                </h2>
                <h2 className="md:text-5xl text-2xl -mt-2 font-semibold font-t text-[#06223f31]  ">
                  {noteData.Title}
                </h2>
              </div>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg color text-base px-5 md:px-28 py-10 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: noteData.Description }}
          />
        </div>
      </div>
    </main>
  );
};

export default SingleNotes;
