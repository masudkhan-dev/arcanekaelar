import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BlogUpdate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const blog = useLoaderData();

  const { _id, title, description } = blog;

  useEffect(() => {
    setValue("title", blog.title);
    setValue("description", blog.description);
  }, [blog, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://masudurrahman-server.vercel.app/blog/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Blog Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/allBlog");
      } else {
        console.log("Failed to update blog");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="mt-16 md:mt-0">
      <div className="min-h-[calc(100vh-40px)] text-gray-800 rounded-none">
        <h2 className="text-center text-2xl bg-green-600 border-2 border-black mb-20 py-5 text-black shadow-custom">
          Update Blog
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-start items-center -mt-12 md:mx-5"
        >
          <label
            htmlFor=""
            className="text-[#3d3d3d] font-bold text-base md:text-xl"
          >
            Update Title
          </label>
          <input
            defaultValue={title}
            className="border-2 mt-2 md:mt-0 bg-[#DDD8BC] outline-green-600 w-full px-2 py-4 border-black shadow-custom"
            {...register("title")}
          />

          <label
            className="mt-10 text-[#3d3d3d] font-bold text-base md:text-xl"
            htmlFor=""
          >
            Update Description
          </label>
          <textarea
            defaultValue={description}
            className="border-2 mt-2 md:mt-0 w-full px-2 bg-[#DDD8BC] h-40 md:h-52 outline-green-600 border-black shadow-custom p-5 "
            {...register("description", { required: true })}
          />

          <input
            className="btn md:mt-6 mt-10 bg-green-600 hover:bg-[#DDD8BC] hover:border-green-600 border-2 border-black rounded-none hover:border-black-500 hover:text-green-600 text-black w-full shadow-custom"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default BlogUpdate;
