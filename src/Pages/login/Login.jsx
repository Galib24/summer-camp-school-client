import { useContext, useState } from 'react';
import loginImg from '../../../src/assets/login_anime_up.png'
import { FaCheckSquare } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });


            })
            .catch(error => setError(error))
    }

    return (
        <>
            <Helmet>
                <title>Summer Camp || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row ">
                    <div className="">
                        <img style={{ borderRadius: '400px 400px 0 0' }} className='w-1/2 rounded-2xl' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl text-center font-extrabold">Login Now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered" />
                                <p onClick={() => setShow(!show)}>
                                    <small>
                                        {
                                            show ? <span >Hide Password <FaCheckSquare></FaCheckSquare> </span> : <span>Show password <FaCheckSquare></FaCheckSquare> </span>
                                        }
                                    </small></p>
                            </div>
                            {
                                error ? <p className='text-red-500'>Password or User Email not Matched</p> : ''
                            }
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-5'><small>New Here? Create an account Click  <Link className='text-blue-600' to='/signup'>here!</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;