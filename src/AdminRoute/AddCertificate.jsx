import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Input } from "@material-tailwind/react";

const image_hosting = import.meta.env.VITE_IMAGE_HOST;

const AddCertificate = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const title = event.target.collegeName.value;
    const qualification = event.target.qualification.value;
    const section = event.target.section.value;
    const year = event.target.year.value;

    const data = { title, qualification, section, year };

    const imageInput = event.target.image;
    const selectedImage = imageInput.files[0];

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
        const { title, qualification, section, year } = data;

        const timestampOptions = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          day: "numeric",
          month: "short",
          year: "numeric",
        };

        const timestamp = new Date().toLocaleString("en-US", timestampOptions);
        const newCertificate = {
          title,
          qualification,
          section,
          year,
          image: imageUrl,
          timestamp,
        };

        fetch("https://masudurrahman-server.vercel.app/certificate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCertificate),
        })
          .then((res) => res.json())
          .then((data) => {
            // Show success message
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Certificate Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            // Navigate to another page
            navigate("/admin/AllCertificate");
          });

        setUploadedImageName(imageName);
        setImagePreview(null);
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false); // Set loading to false after submission is completed
    }
  };

  return (
    <main className="bg-[#F1F3F6]">
      <div className=" container mx-auto md:px-10 -mt-5 md:-mt-5 pb-10">
        <div className="md:btn-white md:bg-white md:mt-5">
          <h2 className="text-center color text-2xl py-5  font-bold">
            Add Certificate
          </h2>
        </div>
        <form className="w-full mx-auto mt-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="w-full color">
              <Input
                className=""
                label="Collage Name"
                name="collegeName"
                id="collegeName"
                type="text"
                required
              />
            </div>

            <div>
              <div className="w-full color">
                <Input
                  label="Qualification"
                  name="qualification"
                  id="qualification"
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <div className="w-full color">
                <Input
                  label="Section"
                  name="section"
                  id="section"
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <div className="w-full color">
                <Input
                  label="Year"
                  name="year"
                  id="year"
                  type="number"
                  min="0"
                  step="1"
                  pattern="\d*"
                  inputMode="numeric"
                  required
                />
              </div>
            </div>

            <div className="bg-[#F1F3F6]">
              <div className="relative my-6">
                <input
                  className="hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
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
                      <span className="color">Upload a Certificate</span>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full btn mt-5">
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddCertificate;
