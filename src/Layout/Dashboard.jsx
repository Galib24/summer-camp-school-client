import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaBoxes, FaCalendar, FaHome } from 'react-icons/fa';
import useEnrolled from "../hooks/useEnrolled";

const Dashboard = () => {
    const [enroll] = useEnrolled();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-emerald-100">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4  w-80 h-full  ">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink><FaCalendar></FaCalendar> User Reservation</NavLink></li>
                    <li><NavLink><FaWallet></FaWallet>payment History</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/myitem'><FaBoxes></FaBoxes>My Item
                        <span className="badge badge-error">+{enroll?.length || 0}</span>
                        </NavLink>
                       
                    </li>

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/instructors'>Instructors</NavLink></li>
                    <li><NavLink to='/classes'>Classes</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;