import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/blog`)
      .then((response) => {
        const sortedBlogs = response.data.sort((a, b) => {
          const timestampA = new Date(a.timestamp);
          const timestampB = new Date(b.timestamp);
          return timestampB - timestampA;
        });

        setBlogs(sortedBlogs);
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
      icon: "error",
      showCancelButton: true,
      background: "#fff",
      confirmButtonColor: "#22C55E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_LOCAL_URL}/blog/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // Update the state immediately after deletion
              setBlogs(blogs.filter((blog) => blog._id !== id));
            }
          })
          .catch((error) => {
            console.error("Error deleting the blog:", error);
            Swal.fire(
              "Error!",
              "There was an issue deleting the blog.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-0 md:px-10 bg-[#F1F3F6] -mt-5 md:-mt-0">
      <div>
        {/* Title */}
        <div className="flex justify-between ">
          <div>
            <button className="btn-white rounded-lg shadow-xl">
              {blogs.length}
            </button>
          </div>
          <div>
            <Link to="/admin/addBlog">
              <button className="btn-white rounded-lg shadow-xl">
                Add Blog
              </button>
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
              <div className="text-xl">#</div>
              <div className="">Title</div>
              <div className="flex justify-start md:justify-center">
                <h2 className="font-bold">Update</h2>
              </div>
              <div className="flex justify-center">
                <h2 className="font-bold">Delete</h2>
              </div>
            </div>
            {blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="grid py-2"
                style={{
                  gridTemplateColumns: "50px 2fr 1fr 1fr",
                }}
              >
                <div className="flex flex-col">
                  <p className="font-bold">{index + 1}</p>
                </div>
                <div className="flex flex-col -ml-5 md:-ml-0">
                  <p className="font-bold">
                    {blog.title?.split(" ").slice(0, 3).join(" ")}
                  </p>
                </div>
                <div className="flex flex-col ">
                  <Link to={`/admin/UpdateBlog/${blog._id}`}>
                    <button className="btn-green rounded-lg w-full">
                      Update
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col mr-2 ml-2 md:ml-10">
                  <button
                    onClick={() => handleDelete(blog._id)}
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
    </div>
  );
};

export default AllBlog;
