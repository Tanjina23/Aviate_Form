// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aviate_Form from "./Page/Aviate_Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Aviate_Form></Aviate_Form>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
