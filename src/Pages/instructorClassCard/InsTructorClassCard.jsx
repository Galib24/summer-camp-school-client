/* eslint-disable no-unused-vars */

import { useState } from "react";


const InsTructorClassCard = ({instructorClass}) => {
    const [disable, setDisable] = useState(true);
    const { classname, photo, price, useremail,username,availableseat, _id} = instructorClass
    return (
        <div className={"card w-96 bg-base-100 shadow-xl  " + (availableseat === 0 ? 'bg-red-300' : '')}>
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className={"card-title"} >Class name: {classname}</h2>
            <p>Instructor Name: {username}</p>
            <p>Available seats: {availableseat}</p>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
                        <button onClick={!disable}   className="btn  border-pink-400 btn-outline border-b-4 btn-success text-black">Approve</button>
                        <button   className="btn  border-pink-400 btn-outline border-b-4 btn-error">Deny </button>
                        <button   className="btn  border-pink-400 btn-outline border-b-4 btn-info">feedback</button>
                    </div>
        </div>
    </div>
    );
};

export default InsTructorClassCard;