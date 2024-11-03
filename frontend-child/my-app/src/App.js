// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Main";
// import Main from "./Pages/Home";
import Data from './Pages/Data';
import './App.css';
// import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: "/data",
    element: <Data/>
  }
])

// function setScreenSize() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// }
// useEffect(() => {
//   setScreenSize();
// });


function App() {
  return (
    
    <RouterProvider router={router} />
  );
}

export default App;
