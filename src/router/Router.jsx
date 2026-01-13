import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/mainPages/home/Home';
import About from '../pages/mainPages/aboutUs/About';
import Donar from '../pages/mainPages/donar/Donar';
import BloodRequest from '../pages/mainPages/bloodRequest/BloodRequest';
import Events from '../pages/mainPages/events/Events';
import Donate from '../pages/mainPages/donate/Donate';
import Blog from '../pages/mainPages/blog/Blog';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {index: true, element: <Home />},
            {path: "/donar", element: <Donar />},
            {path: "/request", element: <BloodRequest />},
            {path: "/events", element: <Events />},
            {path: "/blog", element: <Blog />},
            {path: "/about", element: <About />},
            {path: "/donate", element: <Donate />},
            {path: "/login", element: <About />},
        ]
    },
]);

export default router