import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/mainPages/home/Home';
import About from '../pages/mainPages/aboutUs/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {path: "/", element: <Home />},
            {path: "/about", element: <About />},
        ]
    },
]);

export default router