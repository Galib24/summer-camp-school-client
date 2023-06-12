/* eslint-disable no-unused-vars */

import useAuth from "../../hooks/useAuth";


const StatusClass = ({is}) => {
    const {user} = useAuth();
    const { classname, photo, price, useremail,username,availableseat, _id} = is;

    return (
        <div className={"card w-96 bg-base-100 shadow-xl  " + (availableseat === 0 ? 'bg-red-300' : '')}>
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className={"card-title"} >Class name: {classname}</h2>
            <p>Instructor Name: {user.displayName}</p>
            <p>user Email: {user.name}</p>
            <p>Available seats: {availableseat}</p>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
                        <button  disabled={true}  className="btn  border-pink-400 btn-outline border-b-4 btn-success text-black">Approved</button>
                        <button disabled={true}   className="btn  border-pink-400 btn-outline border-b-4 btn-error">Deny </button>
                    </div>
        </div>
    </div>
    );
};

export default StatusClass;