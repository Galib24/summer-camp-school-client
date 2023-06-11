import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBox } from 'react-icons/fa';
import useEnrolled from "../../../hooks/useEnrolled";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [enroll] = useEnrolled();

    // logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>

        <li><Link className="text-purple-300" to='/'>Home</Link></li>
        <li><Link className="text-purple-300" to='/instructors'>Instructors</Link></li>
        <li><Link className="text-purple-300" to='/classes'>Classes</Link></li>
        <li><Link className="text-purple-300" to='/blogs'>Blogs</Link></li>



    </>
    
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Summer Camp Fitness Zone</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                   <button className="btn btn-ghost normal-case  bg-purple-400 btn-sm">Logout</button>
                </div> */}

                <div className="navbar-end">


                    <div className="mr-8 inline-block">
                        <li>
                            <Link to='/dashboard/myitem'>
                                <button className="btn">
                                    <FaBox></FaBox>
                                    <div className="badge badge-error">{enroll?.length || 0}</div>
                                </button>
                            </Link>
                        </li>
                    </div>

                    {
                        user ? <>
                            <p  className="mr-6 font-bold">{user?.displayName}</p>
                            <img referrerPolicy="no-referrer" className="rounded-full mr-7" width={50} src={user?.photoURL} alt="" />

                            <button onClick={handleLogOut} className="normal-case btn-ghost mr-5 bg-purple-400 btn-md rounded-2xl">LogOut</button>

                        </> : <>
                            <Link className="normal-case btn-ghost text-center  bg-purple-400 btn-md rounded-2xl" to='/login'>Login</Link>
                        </>
                    }
                </div>


            </div>
        </>
    );
};

export default NavBar;