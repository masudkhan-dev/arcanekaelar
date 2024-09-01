import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";

const AllMemories = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchMemoriesData();
  }, []);

  const fetchMemoriesData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/Memories`)
      .then((response) => {
        setMemories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_LOCAL_URL}/Memories/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Memory Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              fetchMemoriesData();
            }
          });
      }
    });
  };

  const indexOfLastMemory = currentPage * itemsPerPage;
  const indexOfFirstMemory = indexOfLastMemory - itemsPerPage;
  const currentMemories = memories.slice(indexOfFirstMemory, indexOfLastMemory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(memories.length / itemsPerPage))
    );

  return (
    <div className="container mx-auto -mt-5 md:-mt-0 px-0 md:px-8 bg-[#F1F3F6]">
      <div>
        {/* title */}
        <div className="flex justify-between">
          <div>
            <button className="btn-white shadow-xl">{memories.length}</button>
          </div>
          <div>
            <Link to="/admin/addMemories">
              <button className="btn-white shadow-xl">Add Memories</button>
            </Link>
          </div>
        </div>

        {/* body */}
        <div className="overflow-hidden">
          <div className="py-5">
            <div
              className="grid font-bold"
              style={{
                gridTemplateColumns: "1fr 2fr 1fr 1fr",
              }}
            >
              <div>#</div>
              <div>Picture</div>
              <div className="flex justify-center">
                <h2 className="font-bold">Delete</h2>
              </div>
            </div>
            {currentMemories.map((memory, index) => (
              <div
                key={memory._id}
                className="grid py-2 justify-center items-center"
                style={{
                  gridTemplateColumns: "50px 1fr 1fr",
                }}
              >
                <div className="flex flex-col">
                  <p className="font-bold">{indexOfFirstMemory + index + 1}</p>
                </div>
                <div className="flex flex-col -ml-5 md:-ml-0">
                  <div className="avatar">
                    <div className="w-20 h-20">
                      <img
                        src={memory.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mr-2 ml-2 md:ml-10">
                  <button
                    onClick={() => handleDelete(memory._id)}
                    className="btn-red"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10 flex flex-wrap justify-center">
          <div className="w-full md:w-auto flex justify-center md:justify-start mb-2 md:mb-0">
            <button
              onClick={goToPreviousPage}
              className={`mx-1 px-2 md:px-3 py-1 md:py-2 h-10 md:h-12 ${
                currentPage === 1 ? "btn" : "btn-white shadow-xl"
              }`}
            >
              Previous
            </button>
            {Array.from(
              {
                length: Math.min(5, Math.ceil(memories.length / itemsPerPage)),
              },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-2 md:px-3 py-1 md:py-2 h-10 md:h-12 ${
                    i + 1 === currentPage ? "btn" : "btn-white shadow-xl"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            {Array.from(
              {
                length: Math.max(
                  0,
                  Math.ceil(memories.length / itemsPerPage) - 5
                ),
              },
              (_, i) => (
                <button
                  key={i + 6}
                  onClick={() => paginate(i + 6)}
                  className={`mx-1 px-2 md:px-3 py-1 md:py-2 h-10 md:h-12 ${
                    i + 6 === currentPage ? "btn" : "btn-white"
                  }`}
                >
                  {i + 6}
                </button>
              )
            )}
            <button
              onClick={goToNextPage}
              className={`mx-1 px-2 md:px-3 py-1 md:py-2 h-10 md:h-12 ${
                currentPage === Math.ceil(memories.length / itemsPerPage)
                  ? "btn"
                  : "btn-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMemories;
