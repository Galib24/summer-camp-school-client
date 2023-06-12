import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaUsers, FaFileUpload, FaBoxes, FaHome } from 'react-icons/fa';
import useEnrolled from "../hooks/useEnrolled";
import useAdmin from "../hooks/useAdmin";
import useCoInstructor from "../hooks/useCoInstructor";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const [enroll] = useEnrolled();
    const {user} = useAuth();

    // todo load data  from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useCoInstructor();

    // console.log(isInstructor);

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

                    {/* admin part */}

                    {/* Admin? <></> : instructor? <></> : <></>
 */}
                    {
                        isAdmin ? <>

                            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/manageclasses'><FaFileUpload></FaFileUpload>Manage Classes</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/myitem'><FaBoxes></FaBoxes>
                                    Pending Item
                                    {/* <span className="badge badge-error">+{enroll?.length || 0}</span> */}
                                </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/manageusers'><FaUsers></FaUsers> Manage Users</NavLink></li>



                        </> : isInstructor ? <>
                            <li><NavLink to='/dashboard/instructorhome'><FaHome></FaHome> Instructor Home</NavLink></li>
                            <li><NavLink to='/dashboard/addedclasses'><FaFileUpload></FaFileUpload>Added Classes</NavLink></li>
                            <li><NavLink to='/dashboard/sendfeedback'><FaUsers></FaUsers> Send Feedback</NavLink></li>
                            {/* <li>
                                <NavLink to='/dashboard/myitem'><FaBoxes></FaBoxes>Admin Book marked Items
                                    <span className="badge badge-error">+{enroll?.length || 0}</span>
                                </NavLink>
                            </li> */}
                        </> : user?  <>
                            <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
                            {/* <li><NavLink > User Reservation</NavLink></li> */}
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>payment History</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/myitem'><FaBoxes></FaBoxes>My Enrolled Classes
                                    <span className="badge badge-error">+{enroll?.length || 0}</span>
                                </NavLink>
                            </li>

                        </> : ' '
                    }




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