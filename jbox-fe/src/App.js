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
import Footer from './components/footer';

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
    <div>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Footer />
    </div>
    )); 
}

export default App;
