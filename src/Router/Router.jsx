import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './../Layout/MainLayout';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children:[
         { index: true, Component: Home },
        {path:"/blog" , Component: Blog ,loader: ()=> fetch("/blog.json")}
    ]
  },
]);

// const Router = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Router;