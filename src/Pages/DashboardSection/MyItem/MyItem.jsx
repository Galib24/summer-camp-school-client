import { Helmet } from "react-helmet-async";
import useEnrolled from "../../../hooks/useEnrolled";
import { FaTrashAlt } from 'react-icons/fa';


const MyItem = () => {
    const [enroll] = useEnrolled();
    console.log(enroll);
    const total = enroll.reduce((sum, item) => item.price + sum, 0);
    return (
        <div className="w-full"> 
            <Helmet>
                <title>
                    summer Camp || My Items
                </title>
            </Helmet>
            <div className="uppercase font-semibold h-[70px]  flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {enroll.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <button className="btn text-white bg-success btn-ghost btn-md">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Class Picture</th>
                            <th>Class Name</th>
                            <th>Class Instructor Name</th>
                            <th>Price</th>
                            <th>Class Number</th>
                            <th>Student Enrolled</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enroll.map((item, index )=>    <tr
                            key={item._id}
                            >
                                <td>
                                  {index + 1}
                                </td>
                                <td>
                                    
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    
                                </td>
                                <td>{item.name}</td>
                                <td>
                                   {item.class_name}
                                </td>
                                <td>${item.price}</td>
                                <td className="text-center">{item.class_number}</td>
                                <td className="text-center">{item.students_enrolled}</td>
                                <td>
                                    <button className="btn text-red-500 btn-ghost btn-md"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;