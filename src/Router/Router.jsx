import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './../Layout/MainLayout';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import MegaMenu from '../Pages/MegaMenu';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children:[
         { index: true, Component: Home },
        {path:"/blog" , Component: Blog ,loader: ()=> fetch("/blog.json")},
        {path:"/megaMenu",Component: MegaMenu, loader: ()=> fetch("/product.json")},
        {path:"/contact" ,Component: Contact},
        {
          path:"/login",Component:Login
        }

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