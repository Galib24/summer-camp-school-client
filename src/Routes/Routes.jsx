import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Home/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Home/Classes/Classes";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Shared/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyItem from "../Pages/DashboardSection/MyItem/MyItem";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myitem',
                element: <MyItem></MyItem>
            }
        ]
    }
])