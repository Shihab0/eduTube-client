import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllCourse from "../../pages/AllCourse/AllCourse";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/allCourse/')
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/allCourse',
                element: <AllCourse></AllCourse>,
                loader: () => fetch('http://localhost:5000/allCourse/')
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }
]);