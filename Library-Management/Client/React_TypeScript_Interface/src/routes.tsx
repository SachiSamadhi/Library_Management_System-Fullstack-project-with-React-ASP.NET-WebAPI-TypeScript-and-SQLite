import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Book from "./pages/book";

import Bookmark from "./pages/bookmark";
import BookForm from "./components/Books/BookForm";
import BookTable from "./components/Books/BookTable";

export const router = createBrowserRouter([
  {
  children: [
  {path: 'createBook', element: <BookForm key='create' />},
  {path: 'editBook/:id', element: <BookForm key='edit' />},
  {path: '*', element: <BookTable/>}]
  },

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
    path: "/booktable",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
