// You don't necessarily need to import React everywhere unless you use specific react words - I do though, it's good practice (I read that somewhere, at least)
import React from "react";

// This is the most popular library for doing navigation on a React app
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// To make it more difficult, even though App is our main component, this is our landing page of the site
import Root from "./Root";

// Here are the other pages
import Project1 from "./Project1";


// This is making a simple navigation object to know what component to render for each page. 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "project-1",
    element: <Project1 />,
  },
  {
    path: "project-2",
    element: <Root />,
  },
  {
    path: "project-3",
    element: <Root />,
  },
  {
    path: "contact",
    element: <Root />,
  },
]);

// Then we simple render the site with this nagivation object. It will be more easy to see in other components, but this is the pattern of React - you use 'return' and then something that looks mostly like HTML. RouteProvider is an HTML element, just like a <div> is.
const App = () => {
  return <RouterProvider router={router} />;
};

// We always need to export our components if other components need to import them - in this case, the index.js file did.
export default App;
