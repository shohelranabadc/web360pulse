import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/mainPages/home/Home';
import About from '../pages/mainPages/aboutUs/About';
import BloodRequest from '../pages/mainPages/bloodRequest/BloodRequest';
import Events from '../pages/mainPages/events/Events';
import Donate from '../pages/mainPages/donate/Donate';
import Blog from '../pages/mainPages/blog/Blog';
import NotFound from '../components/mainComponents/NotFound';
import Registration from '../pages/mainPages/auth/Registration';
import Login from '../pages/mainPages/auth/Login';
import DonorList from '../pages/mainPages/donor/DonorList';
import EventDetails from '../pages/mainPages/events/EventDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {index: true, element: <Home />},
            {path: "/donors", element: <DonorList />},
            {path: "/request", element: <BloodRequest />},
            {path: "/events", element: <Events />},
            {path: "/events/:id", element: <EventDetails />},
            {path: "/blog", element: <Blog />},
            {path: "/about", element: <About />},
            {path: "/donate", element: <Donate />},
            {path: "/registration", element: <Registration />},
            {path: "/login", element: <Login />},
            {path: "*", element: <NotFound />},
        ]
    },
]);

export default router