import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createRoot } from "react-dom/client";
import { Editor } from "@tinymce/tinymce-react";

const AddNote = () => {
  const [notes, setNotes] = useState([]);
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState("");

  const { Title, Description, Category, _id } = notes;

  const navigate = useNavigate();

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
    const newNote = {
      Title: data.Title,
      // Description: data.Description,
      Description: editorContent,
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
          title: "New Note Added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/allNote");
      })
      .catch((error) => {
        console.error(error);
        // Handle error or display a notification
      });
  };

  const logEditorContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="bg-[#f1f3f6] md:px-10">
      <div className="bg-[#fff] p-5 flex justify-center items-center ">
        <h2 className="text-2xl color font-bold ">Add Note</h2>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <label htmlFor="" className="mt-5 font-bold color">
            Title
          </label>
          <input
            className="border-2 px-5 bg-[#fff] color w-full border-black p-3 "
            {...register("Title")}
            placeholder="Enter Title Here"
          />
          <label htmlFor="" className="mt-5 font-bold color">
            Category
          </label>
          <select
            {...register("Category")}
            className="border-2 bg-[#fff] w-full border-black py-3 px-5 "
          >
            {[...new Set(notes.map((note) => note.Category))].map(
              (category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              )
            )}
          </select>
          <label htmlFor="" className="mt-5 font-bold text-[#3d3d3d]">
            Description
          </label>
          {/* <textarea
            className="px-5 bg-[#DDD8BC] border-2 w-full border-black shadow-custom h-40"
            {...register("Description", { required: true })}
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

          <input className="btn w-full cursor-pointer mt-3" type="submit" />
        </form>
      </div>
      {/* <Editor
        apiKey="4l4hhv85z6i1vyrblxa84yj42kjayboy53xr3fapedrtaog2"
        onInit={(evt, editor) => (editorRef.current = editor)} // Set reference on init
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
        }}
      />

      <button onClick={logEditorContent}>Log editor content</button> */}
    </div>
  );
};

export default AddNote;
