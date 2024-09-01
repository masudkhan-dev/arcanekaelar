import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";

const AllNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    fetchNoteData();
  }, []);

  const fetchNoteData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/notes`)
      .then((response) => {
        setNotes(response.data);

        const countObj = {};
        response.data.forEach((note) => {
          countObj[note.Category] = countObj[note.Category] + 1 || 1;
        });
        setCategoryCount(countObj);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

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
              setNotes(notes.filter((note) => note._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  // Filter notes to show only one note per category
  const filteredNotes = [];
  const categorySet = new Set();

  notes.forEach((note) => {
    if (!categorySet.has(note.Category)) {
      filteredNotes.push(note);
      categorySet.add(note.Category);
    }
  });

  return (
    <div className="container mx-auto  bg-[#F1F3F6]">
      <div className="md:mx-10">
        {/* header */}
        <div className="flex justify-between">
          <div>
            <button className="btn-white shadow-xl">
              {filteredNotes.length}
            </button>
          </div>
          <div>
            <Link to="/admin/AddCategory">
              <button className="btn-white shadow-xl">Add Category</button>
            </Link>
          </div>
          <div>
            <Link to="/admin/AddNotes">
              <button className="btn-white shadow-xl">Add Note</button>
            </Link>
          </div>
        </div>

        {/* body */}
        <div className="overflow-hidden">
          <div className="py-5">
            {/* title */}
            <div className="flex justify-between mr-5">
              <div>
                <h2 className=" font-bold ">#</h2>
              </div>
              <div>
                <h2 className=" color">Title</h2>
              </div>
              <div>
                <h2 className="  color">Note</h2>
              </div>
              <div>
                <h2 className=" color ">Delete</h2>
              </div>
            </div>

            {filteredNotes.map((note, index) => (
              <div key={note._id} className="listItem py-2">
                <div className="flex flex-col listItem1">
                  <p className="color">{index + 1}</p>
                </div>

                <div className="flex flex-col -ml-5 md:-ml-0 listItem2">
                  <p className="color">{note.Category}</p>
                </div>

                {/* mobile */}
                <div className="block md:hidden listItem3">
                  <button className="btn-white shadow-xl">
                    <Link
                      to={`/admin/allCategory/${note.Category}`}
                      className="  flex flex-row items-center justify-center gap-2"
                    >
                      <p className=""> Notes</p>
                      <p className="">{categoryCount[note.Category]}</p>
                    </Link>
                  </button>
                </div>

                {/* desktop */}
                <div className="hidden md:block listItem3">
                  <button className="btn-white shadow-xl w-full">
                    <Link
                      to={`/admin/allCategory/${note.Category}`}
                      className="  flex flex-row items-center justify-center gap-2"
                    >
                      <p className=""> Posted Notes</p>
                      <p className="">{categoryCount[note.Category]}</p>
                    </Link>
                  </button>
                </div>

                <div className="flex flex-col ml-2 md:ml-5 mr-2 listItem4">
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="btn-red shadow-xl"
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

export default AllNote;
