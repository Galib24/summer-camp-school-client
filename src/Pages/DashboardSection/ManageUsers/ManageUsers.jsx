/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
// import useUser from "../../../hooks/useUser";
// import useAxiosSecure from "../../../hooks/useaxiosSecure";


const ManageUsers = () => {
    // const [DataUser] = useUser();
    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-fitness-school-server.vercel.app/users',{
            headers: {
                authorization: `bearer ${token}`
            }})
        return res.json();
    });

    // making admin method
    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-fitness-school-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    // making instructor method to ui 
    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-fitness-school-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .then((result) =>{
                        
                    })

                }
            })
    }


// TODO then deleted function do
    // delete user
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result)=>{
            if(result.isConfirmed){
                fetch(`https://summer-camp-fitness-school-server.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                      console.log(data);
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

// console.log(DataUser);
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Camp || Mange users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-center my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}
                                className="text-center"
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn text-blue-500 btn-ghost btn-md">Admin</button>}</td>

                                <td>{user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn text-blue-500 btn-ghost btn-md">Instructor</button>}</td>
                                <td>

                                    <button onClick={() => handleDelete(user)} className="btn text-red-500 btn-ghost btn-md"><FaTrashAlt></FaTrashAlt></button>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;