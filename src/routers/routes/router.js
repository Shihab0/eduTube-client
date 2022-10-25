import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            }
        ]
    }
]);