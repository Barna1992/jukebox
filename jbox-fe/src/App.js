import './App.css';
import FormComponent from './components/songCreationForm';
import Home from './components/songsList';
import Deejay from './components/deejay';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/deejay",
    element: <Deejay />,
  },
  {
    path: "/add_songs",
    element: <FormComponent />,
  },
]);

function App() {
  return (
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    )); 
}

export default App;
