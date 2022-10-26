import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllCourse from "../../pages/AllCourse/AllCourse";
import Blogs from "../../pages/Blogs/Blogs";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";
import Login from "../../RegisterLogin/Login";
import Register from "../../RegisterLogin/Register";
import SellCard from "../../Shared/SellCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://edu-tube-server-side.vercel.app/')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://edu-tube-server-side.vercel.app/')
            },
            {
                path: '/allCourse',
                element: <Home></Home>,
                loader: () => fetch('https://edu-tube-server-side.vercel.app/allCourse/')
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/allCourse',
                element: <AllCourse></AllCourse>,
                loader: () => fetch('https://edu-tube-server-side.vercel.app/allCourse/')
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://edu-tube-server-side.vercel.app/course/${params.id}`)
            },
            {
                path: '/buy/:id',
                element: <PrivateRoute><SellCard></SellCard></PrivateRoute>,
                loader: ({ params }) => fetch(`https://edu-tube-server-side.vercel.app/buy/${params.id}`)
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    }
]);