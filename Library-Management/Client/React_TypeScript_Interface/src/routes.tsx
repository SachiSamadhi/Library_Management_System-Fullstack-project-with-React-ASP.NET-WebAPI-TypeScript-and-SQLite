import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Book from "./pages/book";

import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
      path: "/books",
      element: <Book />,
    errorElement: <Error />,
  },
  
  {
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
