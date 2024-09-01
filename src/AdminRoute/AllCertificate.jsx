import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";

const AllCertificate = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/certificate`)
      .then((response) => {
        setBlogs(response.data);
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
        fetch(`${import.meta.env.VITE_LOCAL_URL}/certificate/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setBlogs(blogs.filter((blog) => blog._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-0 md:px-10 bg-[#F1F3F6] -mt-5 md:-mt-0">
      <div>
        <div className="flex justify-between">
          <div>
            <button className="btn-white rounded-lg shadow-xl">
              {blogs.length}
            </button>
          </div>
          <div>
            <Link to="/admin/AddCertificate">
              <button className="btn-white shadow-xl">Add Certificate</button>
            </Link>
          </div>
        </div>

        {/* body */}
        <div className="overflow-hidden">
          <div className="py-5">
            <div
              className="grid font-bold"
              style={{
                gridTemplateColumns: "1fr 3fr 1fr",
              }}
            >
              <div>#</div>
              <div>Title</div>

              <div className="flex justify-center">
                <h2 className="font-bold">Delete</h2>
              </div>
            </div>
            {blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="grid py-2"
                style={{
                  gridTemplateColumns: "50px 2fr 1fr",
                }}
              >
                <div className="flex flex-col">
                  <p className="font-bold color">{index + 1}</p>
                </div>
                <div className="flex flex-col -ml-5 md:-ml-0">
                  <p className="font-bold color"> {blog.qualification}</p>
                </div>

                <div className="flex flex-col mr-2">
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

export default AllCertificate;
