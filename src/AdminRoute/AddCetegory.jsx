import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "@material-tailwind/react";

const AddCetegory = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { Title, Description, Category, _id } = notes;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/notes`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    const newNote = {
      Category: data.Category,
    };

    fetch(`${import.meta.env.VITE_LOCAL_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Category Added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/allNote");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#F1F3F6]">
      <div className="container mx-auto md:px-10">
        <div className="btn-white">
          <h2 className="text-2xl color font-bold ">Add Category</h2>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
          >
            <label htmlFor="" className="mt-5 font-bold color">
              Category
            </label>
            <div className="w-full">
              <Input
                label="Category Name"
                className=" bg-[#fff] px-5 py-6 w-full h-10"
                {...register("Category")}
              />
            </div>
            <input
              className="btn mt-5 w-full "
              type="submit"
              value={loading ? "Saving..." : "Save"}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCetegory;
