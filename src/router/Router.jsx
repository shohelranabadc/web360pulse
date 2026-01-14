import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/mainPages/home/Home';
import About from '../pages/mainPages/aboutUs/About';
import Donor from '../pages/mainPages/donor/Donor';
import BloodRequest from '../pages/mainPages/bloodRequest/BloodRequest';
import Events from '../pages/mainPages/events/Events';
import Donate from '../pages/mainPages/donate/Donate';
import Blog from '../pages/mainPages/blog/Blog';
import NotFound from '../components/mainComponents/NotFound';
import Registration from '../pages/mainPages/auth/Registration';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {index: true, element: <Home />},
            {path: "/donors", element: <Donor />},
            {path: "/request", element: <BloodRequest />},
            {path: "/events", element: <Events />},
            {path: "/blog", element: <Blog />},
            {path: "/about", element: <About />},
            {path: "/donate", element: <Donate />},
            {path: "/registration", element: <Registration />},
            {path: "/login", element: <About />},
            {path: "*", element: <NotFound />},
        ]
    },
]);

export default router