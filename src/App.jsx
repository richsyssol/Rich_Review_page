import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import ReviewSection from "./Pages/Home/ReviewSection";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element="">
        <Route index element={<ReviewSection />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
