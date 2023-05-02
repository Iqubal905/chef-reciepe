import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register';
import Blog from '../pages/blog/Blog';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/home',
            element:<Home></Home>
            
        },
        {
            path: 'login',
            element:<Login></Login>
            
        },
        {
            path: 'register',
            element:<Register></Register>
            
        },
        {
            path: 'blog',
            element:<Blog></Blog>
            
        }
    ]
    },
  ]);
export default router;