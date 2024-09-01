import React, { useEffect, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting = import.meta.env.VITE_IMAGE_HOST;

const AddMemories = ({ loading = false }) => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(loading);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const imageInput = event.target.image;
    const selectedImage = imageInput.files[0];

    if (!selectedImage) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No image selected",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        const imageUrl = result.data.url;
        const imageName = selectedImage.name;

        const timestampOptions = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          day: "numeric",
          month: "short",
          year: "numeric",
        };

        const timestamp = new Date().toLocaleString("en-US", timestampOptions);
        const newBlog = {
          image: imageUrl,
          timestamp,
        };

        const postResponse = await fetch(
          `${import.meta.env.VITE_LOCAL_URL}/Memories`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newBlog),
          }
        );

        if (postResponse.ok) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Memory Posted Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/admin/allMemories");
        } else {
          console.error("Error saving memory.");
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error saving memory",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        console.error("Image upload failed.");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Image upload failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error uploading image",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setIsLoading(false);
      setUploadedImageName("");
      setImagePreview(null);
    }
  };

  return (
    <div className="bg-[#F1F3F6] ">
      <div className="container mx-auto md:px-10 ">
        <div className="md:btn-white md:bg-white md:py-3 -mt-5 md:-mt-0">
          <h2 className="text-center text-2xl font-bold color">Add Memories</h2>
        </div>

        <form className="w-full mx-auto" onSubmit={handleSubmit}>
          <div className="">
            <p className=" color mt-5">Select Your Image</p>
            <div className="bg-[#F1F3F6]">
              <div className="file_upload ">
                <div className="text-center mt-2">
                  <input
                    className="text-sm cursor-pointer hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                    onChange={(event) => {
                      const { files } = event.target;
                      if (files && files.length > 0) {
                        setUploadedImageName(files[0].name);
                        const reader = new FileReader();
                        reader.onload = (e) => setImagePreview(e.target.result);
                        reader.readAsDataURL(files[0]);
                      } else {
                        setUploadedImageName("");
                        setImagePreview(null);
                      }
                    }}
                  />
                  <label
                    htmlFor="image"
                    className="relative flex cursor-pointer flex-col items-center gap-4  rounded border-2 border-dashed border-black px-3 py-10 text-center text-sm font-medium shadow-xl z-10"
                  >
                    {imagePreview && (
                      <div className="ml-5 z-50">
                        <img
                          src={imagePreview}
                          alt="Selected"
                          className="max-w-20 h-auto"
                        />
                      </div>
                    )}
                    {uploadedImageName ? (
                      <span className="text-sm text-gray-600">
                        {uploadedImageName}
                      </span>
                    ) : (
                      <>
                        <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-[#F1F3F6] px-3 text-slate-400">
                          <MdOutlineCloudUpload className="text-3xl" />
                        </span>
                        <span className="color">Upload a Memory</span>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemories;
