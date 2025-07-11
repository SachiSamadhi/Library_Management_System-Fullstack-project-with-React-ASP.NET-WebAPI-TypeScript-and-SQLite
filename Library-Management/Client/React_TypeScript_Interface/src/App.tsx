import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./App.css";
import { BookProvider } from "./context/book-context";

function App() {
    return (
        <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  );
}

export default App;
