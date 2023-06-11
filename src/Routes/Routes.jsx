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
import ManageUsers from "../Pages/DashboardSection/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import AdminRoutes from "./AdminRoutes";
import ManageClassesInstructor from "../Pages/ManageClassInstructor/ManageClassesInstructor";
import Payment from "../Pages/DashboardSection/Payment/Payment";
import PaymentHistory from "../Pages/DashboardSection/Payment/Payment history/PaymentHistory";
import UserHome from "../Pages/DashboardSection/UserHome/UserHome";




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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'myitem',
                element: <MyItem></MyItem>
            },
            {
                path: 'manageusers',
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: 'manageclasses',
                element: <AdminRoutes> <ManageClasses></ManageClasses></AdminRoutes>
            },
            {
                path: 'addedclasses',
                element: <ManageClassesInstructor></ManageClassesInstructor>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'history',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
])