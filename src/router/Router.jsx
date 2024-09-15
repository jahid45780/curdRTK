import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ShowBooks from "../Pages/ShowBooks";
import AddBooks from "../Pages/AddBooks";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/> ,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/book-view',
            element:<ShowBooks/>
        },
        {
            path:'/add-books',
            element:<AddBooks/>
        }


      ]
    },
  ]);