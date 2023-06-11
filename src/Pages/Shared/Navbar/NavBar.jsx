/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBox } from 'react-icons/fa';
import useEnrolled from "../../../hooks/useEnrolled";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [enroll] = useEnrolled();
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem('theme') : 'light'
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');

        }
        else {
            setTheme('light')
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

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
                    <div>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={handleToggle} />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="swap-on w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="swap-off w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>


                        </label>
                    </div>

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
                            <p className="mr-6 font-bold">{user?.displayName}</p>
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