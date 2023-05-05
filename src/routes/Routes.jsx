import React, { lazy } from 'react';
import {createBrowserRouter} from "react-router-dom";
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Blog from '../pages/blog/Blog';
import Loginlayout from '../layout/Loginlayout';
import { Navigate } from 'react-router-dom/dist';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home';
import Error from '../pages/error/Error';




const router = createBrowserRouter([
    {
        path: "/",
        element:<Loginlayout></Loginlayout>,
        children: [
              {
                path:"/",
                element:<Navigate to="/home"></Navigate>
              },
            {
              path: "login",
              element: <Login></Login>,
            },
            {
              path: "register",
              element: <Register></Register>
            },
            {
              path:'blog',
              element: <Blog></Blog>,
             
            }
            ]
      },
    
        {
          path: "home",
          element:<Home></Home>,
          loader :() =>fetch('https://assignment-auth-server-iqubal905.vercel.app/recipes'),
          // loader :() =>fetch('http://localhost:3000/recipes'),
          // children: [
              },

        {
          path: '/data/:dataId',
          element: <Details></Details>,

          loader :() =>fetch('https://assignment-auth-server-iqubal905.vercel.app/recipes'),
          // loader :() =>fetch('https://localhost:3000/recipes'),
        },

        {
          path: '*',
          element: <Error></Error>
        }


    
   
  ]);
export default router;