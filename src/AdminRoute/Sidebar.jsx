import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState("false");

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

  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <main>
      <div>
        <div>
          {/*  <!-- Mobile trigger --> */}
          <div className="block md:hidden pt-5 pb-8">
            <div className="flex justify-between items-center bg-white shadow-xl py-5 px-5 mx-5 rounded-xl ">
              <Link to="/">
                <h2 className="color text-xl">Masudur Rahman</h2>
              </Link>
              <button
                title="Side navigation"
                type="button"
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? "true" : "false"}
                aria-controls="nav-menu-4"
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              >
                {isSideNavOpen ? (
                  <IoMdClose className="h-6 w-6" />
                ) : (
                  <HiOutlineMenuAlt3 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/*  <!-- Side Navigation --> */}
          <aside
            id="nav-menu-4"
            aria-label="Side navigation"
            className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col bg-[#F1F3F6] shadow-xl border-r-4 border-white transition-transform lg:translate-x-0 ${
              isSideNavOpen ? "translate-x-0" : " -translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center border-b border-slate-200 mt-12">
              <div className="">
                <Link to="/">
                  <h4 className=" text-[#170602] bg-white shadow-xl rounded-xl color font-bold tracking-[2px] px-5 py-2 -mt-8 ">
                    Masudur Rahman
                  </h4>
                </Link>
              </div>
              <div className="mt-10">
                <Link
                  to="/admin/dashboardCard"
                  className="relative flex h-12 w-24 items-center justify-center rounded-full text-white"
                >
                  <img
                    src="https://i.ibb.co/TLwrzrX/Capture.jpg"
                    alt="Profile Picture"
                    className="rounded-full"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center mt-10">
                <Link to="/admin">
                  <p className="text-md color hover:underline mb-2">
                    {user?.email}
                  </p>
                </Link>
              </div>
            </div>
            <nav
              aria-label="side navigation"
              className=" border-t-4 border-white  overflow-auto"
            >
              <div>
                <ul className="flex flex-1 flex-col gap-1 py-3">
                  <li className="mx-5 color">
                    <NavLink
                      to="/admin/dashboardCard"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 text-[#170602] ${
                          isActive
                            ? "bg-white shadow-xl rounded-xl text-[#170602] "
                            : "text-[#170602]"
                        }`
                      }
                    >
                      <div className="flex items-center self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                          />
                        </svg>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ml-2">
                        Dashboard
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                        7
                      </span>
                    </NavLink>
                  </li>
                  <li className="mx-5 color">
                    <NavLink
                      to="/admin/allBlog"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 text-[#170602] ${
                          isActive
                            ? "bg-white shadow-xl rounded-xl text-[#170602] "
                            : "text-[#170602]"
                        }`
                      }
                    >
                      <div className="flex items-center self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                          />
                        </svg>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ml-2">
                        <h2>Blogs</h2>
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                        {blogs.length}
                      </span>
                    </NavLink>
                  </li>

                  <li className="mx-5 color">
                    <NavLink
                      to="/admin/AllCertificate"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2  ${
                          isActive
                            ? "bg-white shadow-xl rounded-xl text-[#170602]"
                            : "text-[#170602]"
                        }`
                      }
                    >
                      <div className="flex items-center self-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                          />
                        </svg>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ml-2">
                        Certificate
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                        {certificate.length}
                      </span>
                    </NavLink>
                  </li>

                  <li className="mx-5 color">
                    <NavLink
                      to="/admin/allMemories"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2  ${
                          isActive
                            ? "bg-white shadow-xl rounded-xl "
                            : "text-[#170602]"
                        }`
                      }
                    >
                      <div className="flex items-center self-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                          />
                        </svg>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ml-2">
                        Memories
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                        {memories.length}
                      </span>
                    </NavLink>
                  </li>
                  <li className="mx-5 color">
                    <NavLink
                      to="/admin/allNote"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 ${
                          isActive
                            ? "bg-white shadow-xl rounded-xl text-[#170602]"
                            : "text-[#170602]"
                        }`
                      }
                    >
                      <div className="flex items-center self-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          />
                        </svg>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ml-2">
                        Notes
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                        {notes.length}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-1 flex-col gap-1 py-3">
                  <li className="mx-5 color">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 text-[#170602] ${
                          isActive
                            ? "bg-white shadow-xl rounded-xl text-[#170602] "
                            : "text-[#170602]"
                        }`
                      }
                    >
                      <div className="flex items-center self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>
                      </div>
                      <p className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ml-2">
                        Home
                      </p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            <footer className="border-t-4 border-white">
              <button
                onClick={handleLogOut}
                className="flex items-center justify-center gap-3 mt-5 py-2 bg-white shadow-xl rounded-xl w-full "
              >
                <div className="flex items-center self-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Dashboard icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="uppercase color font-bold tracking-[2px]">
                  Log Out
                </p>
              </button>
            </footer>
          </aside>

          {/*  <!-- Backdrop --> */}
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
              isSideNavOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsSideNavOpen(false)}
          ></div>
          {/*  <!-- End Side navigation menu with user profile and alert message --> */}
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
