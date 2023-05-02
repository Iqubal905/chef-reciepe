import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Blog from '../pages/blog/Blog';
import Loginlayout from '../layout/Loginlayout';
import { Navigate } from 'react-router-dom/dist';
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
              element: <Blog></Blog>
            }
    
        ]
      },
    
        {
          path: "home",
          element: <Main></Main>,
          children: [
               
                {
                  path:'blog',
                  element: <Blog></Blog>
                //  loader :({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)
                }
    
          ]
        },
    
    // {
    //   path: 'news',
    //   element: <NewsLayout></NewsLayout>,
    //  children:[
    //       {
    //         path: ':id',
    //         element: <News></News>
    
    //       }
    //  ]
    // }
  ]);
export default router;