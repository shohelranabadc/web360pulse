import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/mainPages/home/Home';
import BloodRequest from '../pages/mainPages/bloodRequest/BloodRequest';
import Events from '../pages/mainPages/events/Events';
import Donate from '../pages/mainPages/donate/Donate';
import Blog from '../pages/mainPages/blog/Blog';
import NotFound from '../components/mainComponents/NotFound';
import Registration from '../pages/mainPages/auth/Registration';
import Login from '../pages/mainPages/auth/Login';
import DonorList from '../pages/mainPages/donor/DonorList';
import EventDetails from '../pages/mainPages/events/EventDetails';
import BlogDetails from '../pages/mainPages/blog/BlogDetails';
import AboutUs from '../pages/mainPages/aboutUs/AboutUs';

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
            {path: "/blog/:id", element: <BlogDetails />},
            {path: "/about", element: <AboutUs />},
            {path: "/donate", element: <Donate />},
            {path: "/registration", element: <Registration />},
            {path: "/login", element: <Login />},
            {path: "*", element: <NotFound />},
        ]
    },
]);

export default router