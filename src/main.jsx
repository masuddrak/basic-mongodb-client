import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layout/MainLayout';
import UpdateUser from './pages/UpdateUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("http://localhost:5000/users/")
      },
      {
        path:"/about",
        element:<About></About>,
        loader:()=>fetch("http://localhost:5000/users/")
      },
      {
        path:"/updateUser/:id",
        element:<UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
