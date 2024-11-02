// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Main";
import Data from './Pages/Data';
import './App.css';

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

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
