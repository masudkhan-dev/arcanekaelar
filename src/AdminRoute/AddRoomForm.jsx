import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Input } from "@material-tailwind/react";
import { Editor } from "@tinymce/tinymce-react";
import { FaCloudUploadAlt } from "react-icons/fa";

const image_hosting = import.meta.env.VITE_IMAGE_HOST;

const AddRoomForm = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // Moved here

  const editor = useRef(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const title = event.target.title.value;
    // const description = event.target.description.value;

    // const data = { title, description };
    const data = { title };

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
        const { title } = data;
        // const { title, description } = data;

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
          title,
          image: imageUrl,
          timestamp,
          description: editorContent,
        };

        fetch(`${import.meta.env.VITE_LOCAL_URL}/blog`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlog),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Blog Posted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/admin/allBlog");
          });

        setUploadedImageName(imageName);
        setImagePreview(null);
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const [state, setState] = useState({
    "id-01": "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <div className="-mt-5 md:mt-2 bg-[#F1F3F6] font-t md:mx-10">
      <div className=" color rounded-xl">
        <h2 className="text-center text-2xl bg-white py-5 rounded-lg shadow-xl font-t">
          Add Blog
        </h2>
        <form className="w-full mx-auto mt-5" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className=" mt-10">
              <Input
                className="w-full bg-white shadow-xl py-6"
                label="Title"
                name="title"
                id="title"
                type="text"
                placeholder="Enter Title Here"
                required
              />
            </div>

            <div className="">
              {/*<!-- Component: Dropzone file input --> */}
              <div className="relative mt-16 my-6">
                <input
                  className="hidden bg-white"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={(event) => {
                    const { files } = event.target;
                    if (files && files.length > 0) {
                      const file = files[0];
                      setUploadedImageName(file.name);
                      const reader = new FileReader();
                      reader.onload = (e) => setImagePreview(e.target.result);
                      reader.readAsDataURL(file);
                    } else {
                      setUploadedImageName("");
                      setImagePreview(null);
                    }
                  }}
                />
                <label
                  htmlFor="image"
                  className="relative flex cursor-pointer flex-col items-center gap-4 bg-white rounded border-2 border-dashed border-black px-3 py-10 text-center text-sm font-medium  shadow-xl z-10"
                >
                  {imagePreview && (
                    <div className=" ml-5 z-50">
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
                        <FaCloudUploadAlt className="text-3xl" />
                      </span>
                      <span className="text-slate-500">
                        Drag & drop or
                        <span className="text-emerald-500"> upload a file</span>
                      </span>
                    </>
                  )}
                </label>
              </div>

              {/*<!-- End Dropzone file input --> */}
            </div>

            <div className="">
              <label
                htmlFor="description"
                className="block color mt-10 font-bold "
              >
                Description
              </label>

              <div className="mt-5">
                {/* <JoditEditor
                  ref={editor}
                  value={description}
                  tabIndex={1}
                  onBlur={(newContent) => setDescription(newContent)}
                  onChange={(newContent) => {}}
                /> */}
                <Editor
                  apiKey="4l4hhv85z6i1vyrblxa84yj42kjayboy53xr3fapedrtaog2"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="" // Optional: set initial value
                  init={{
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                    setup: (editor) => {
                      editor.on("Change", () => {
                        setEditorContent(editor.getContent());
                      });
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full my-3 rounded-lg shadow-xl"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoomForm;
