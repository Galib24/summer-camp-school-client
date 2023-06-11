import { Helmet } from "react-helmet-async";
import useEnrolled from "../../../hooks/useEnrolled";
import useAdmin from "../../../hooks/useAdmin";
import useInstructorClass from "../../../hooks/useInstructorClass";
import InsTructorClassCard from "../../../Pages/instructorClassCard/InsTructorClassCard";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyItem = () => {
    const [enroll, refetch] = useEnrolled();


    const [isAdmin] = useAdmin();
    // const [instructors] = useInstructorClass
    // console.log(enroll);
    const total = enroll.reduce((sum, item) => item.price + sum, 0);
    const [instructorsClass] = useInstructorClass();

    // delete method from database
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/enrolled/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // console.log(enroll[0]._id);
    return (
        <div className="w-full">

            <Helmet>
                <title>
                    summer Camp || My Items
                </title>
            </Helmet>
            {
                isAdmin ? <><h1 className="text-4xl text-center font-bold">Hello admin</h1></> : <>

                    <div className="uppercase font-semibold h-[70px]  flex justify-evenly items-center">
                        <h3 className="text-3xl">Total Items: {enroll.length}</h3>
                        <h3 className="text-3xl">Total Price: ${total}</h3>
                       
                        <Link to='/dashboard/payment'>
                            <button className="btn text-white bg-success btn-ghost btn-md">Pay</button>
                        </Link>
                    </div>
                </>
            }
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    {
                        isAdmin ? <h2 className="text-2xl text-center font-semibold">Item Came from Instructor</h2> : <>

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

                        </>
                    }
                    <tbody>

                        {
                            enroll.map((item, index) => <tr
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
                                <td>  {item.class_name} </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td className="text-center">{item.class_number}</td>
                                <td className="text-center">{item.students_enrolled}</td>
                                {/* <td>
                                    <Link to='/dashboard/payment'>
                                        <button className="btn text-white bg-success btn-ghost btn-md">Pay</button>
                                    </Link>
                                </td> */}
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn text-red-500 btn-ghost btn-md"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {/* <h1 className="text-2xl text-center font-semibold">Item Came from Instructor</h1> */}

            <div className="grid md:grid-cols-2 lg:grid-cols2 gap-5 ml-16 my-16">
                {
                    isAdmin ? instructorsClass.map(instructorClass => <InsTructorClassCard
                        key={instructorClass._id}
                        instructorClass={instructorClass}
                    ></InsTructorClassCard>) : ''
                }

            </div>

        </div>
    );
};

export default MyItem;