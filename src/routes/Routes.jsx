import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../layouts/Blog/Blog";
import DashboardLayout from "../AdminRoute/DashboardLayout";
import AddBlog from "../AdminRoute/AddBlog";
import AddCertificate from "../AdminRoute/AddCertificate";
import AddMemories from "../AdminRoute/AddMemories";
import PrivateRoute from "./PrivateRoute";
import AllBlog from "../AdminRoute/AllBlog";
import BlogUpdate from "../AdminRoute/Update/BlogUpdate";
import AllMemories from "../AdminRoute/AllMemories";
import AllCertificate from "../AdminRoute/AllCertificate";
import AllNote from "../AdminRoute/AllNote";
import AllCategory from "../AdminRoute/AllCategory";
import AddNote from "../AdminRoute/AddNote";
import AddCetegory from "../AdminRoute/AddCetegory";
import DashboadCard from "../AdminRoute/DashboadCard";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Notes from "../components/Notes/Notes";
import NoteBox from "../components/Notes/NoteBox";
import Memories from "../components/Home/Memories/Memories";
import MycertificateFullRoute from "../components/Home/MyCertificate/MycertificateFullRoute";
import SingleNotes from "../components/Notes/SingleNotes";
import ContactUs from "../components/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/story",
        element: <Blog />,
      },
      {
        path: "/diary",
        element: <Notes />,
      },
      {
        path: "SingleNotes/:_id",
        element: <SingleNotes />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_LOCAL_URL}/SingleNotes/${params._id}`),
      },
      {
        path: "/moment",
        element: <Memories />,
      },
      {
        path: "noteBox/:Category",
        element: <NoteBox />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_LOCAL_URL}/notes/${params.Category}`),
      },
      {
        path: "certificate",
        element: <MycertificateFullRoute />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboardCard",
        element: (
          <PrivateRoute>
            <DashboadCard />
          </PrivateRoute>
        ),
      },
      {
        path: "addBlog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "AddCertificate",
        element: (
          <PrivateRoute>
            <AddCertificate />
          </PrivateRoute>
        ),
      },
      {
        path: "AllCertificate",
        element: (
          <PrivateRoute>
            <AllCertificate />
          </PrivateRoute>
        ),
      },
      {
        path: "addMemories",
        element: (
          <PrivateRoute>
            <AddMemories />
          </PrivateRoute>
        ),
      },
      {
        path: "allBlog",
        element: <AllBlog />,
      },
      {
        path: "UpdateBlog/:_id",
        element: <BlogUpdate />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_LOCAL_URL}/blog/${params._id}`),
      },
      {
        path: "allMemories",
        element: <AllMemories />,
      },
      {
        path: "allNote",
        element: <AllNote />,
      },
      {
        path: "allCategory/:Category",
        element: <AllCategory />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_LOCAL_URL}/notes/${params.Category}`),
      },
      {
        path: "AddNotes",
        element: <AddNote />,
      },
      {
        path: "AddCategory",
        element: <AddCetegory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
