import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllCategory = () => {
  const initialData = useLoaderData();
  const [categoryData, setCategoryData] = useState(initialData);

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
        fetch(`${import.meta.env.VITE_LOCAL_URL}/notes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setCategoryData(categoryData.filter((item) => item._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="overflow-hidden">
        <div className="md:px-10">
          <div
            className="grid font-bold"
            style={{
              gridTemplateColumns: "1fr 3fr 1fr",
            }}
          >
            <div>
              <h2 className="font-bold text-2xl">#</h2>
            </div>
            <div>
              <h2 className="font-bold text-xl">Title</h2>
            </div>
            <div>
              <h2 className="font-bold text-xl">Delete</h2>
            </div>
          </div>

          {categoryData.map((item, index) => (
            <div
              key={index}
              className="grid py-2"
              style={{
                gridTemplateColumns: "50px 3fr 1fr",
              }}
            >
              <div className="flex flex-col">
                <p className="font-bold">{index + 1}</p>
              </div>
              <div className="flex flex-col -ml-5 md:-ml-0">
                <p className="text-[#3d3d3d]">{item.Title}</p>
              </div>
              <div className="flex flex-col ml-2 md:ml-5 mr-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn-red"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
