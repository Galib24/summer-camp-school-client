import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                setError(loggedUser);
                navigate(from, { replace: true });
            })
    }


    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
                {
                    error ? <p className="text-red-500">something have problem with login</p> : ''
                }
            </div>
        </div>
    );
};

export default SocialLogin;