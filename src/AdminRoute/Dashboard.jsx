import React, { useEffect, useState } from "react";
import { BiWalk } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [notes, setNotes] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/blog`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/Memories`)
      .then((res) => res.json())
      .then((data) => {
        setMemories(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/certificate`)
      .then((res) => res.json())
      .then((data) => {
        setCertificate(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/notes`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  return (
    <div className="bg-[#F1F3F6] h-screen ">
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-2 w-full md:mx-5">
        <NavLink to="/admin/allBlog">
          <div className="relative p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden shadow-custom hover:shadow-none transition-all animate-bounce mt-2 md:mt-10 w-72 md:w-60">
            <div className="relative z-10 mb-4 text-[#F5F7F2] text-4xl leading-none font-semibold">
              {blogs.length}
            </div>
            <div className="relative z-10 text-green-200 text-xl leading-none font-semibold">
              Blogs
            </div>
            <BiWalk className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-green-600 opacity-50"></BiWalk>
          </div>
        </NavLink>

        <NavLink to="/admin/allNote">
          <div className="relative p-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md overflow-hidden shadow-custom hover:shadow-none transition-all animate-bounce mt-2 md:mt-10 w-72 md:w-60">
            <div className="relative z-10 mb-4 text-[#F5F7F2] text-4xl leading-none font-semibold">
              {notes.length}
            </div>
            <div className="relative z-10 text-blue-200 text-2xl leading-none font-semibold">
              Notes
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-blue-700 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </NavLink>

        <NavLink to="/admin/AllCertificate">
          <div className="relative p-5 bg-gradient-to-r from-red-400 to-red-600 rounded-md overflow-hidden shadow-custom hover:shadow-none transition-all animate-bounce mt-2 md:mt-10 w-72 md:w-60">
            <div className="relative z-10 mb-4 text-[#F5F7F2] text-4xl leading-none font-semibold">
              {certificate.length}
            </div>
            <div className="relative z-10 text-red-200 text-xl leading-none font-semibold">
              Certificate
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-red-700 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </NavLink>

        <NavLink to="/admin/allMemories">
          <div className="relative p-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md overflow-hidden shadow-custom hover:shadow-none transition-all animate-bounce mt-2 md:mt-10 w-72 md:w-60">
            <div className="mb-4 text-[#F5F7F2] text-4xl leading-none font-semibold">
              {memories.length}
            </div>
            <div className="text-yellow-200 leading-none text-xl font-semibold">
              Memories
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-yellow-700 opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </svg>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default Dashboard;
