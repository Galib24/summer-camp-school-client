import { motion, useScroll } from "framer-motion"
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useEnrolled from "../../../../hooks/useEnrolled";
import useAdmin from "../../../../hooks/useAdmin";
import useInstructors from "../../../../hooks/useInstructors";

const ClassCard = ({ item }) => {
    const [isAdmin] = useAdmin();
    const [instructors] = useInstructors();
    const { price, class_name, class_number, name, rating, seat, students_enrolled, image, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useEnrolled();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user?.email) {
            const enrolledItem = { itemId: _id, price,image, email: user.email, name, rating, seat, students_enrolled, class_name, class_number }
            fetch('http://localhost:5000/enrolled', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(enrolledItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You Added Enrolled Item',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to enrolled the item',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div

                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 10,
                    background: 'aqua',
                    transformOrigin: '0%'

                }}
            >

            </motion.div>
            <div className={"card w-96 bg-base-100 shadow-xl  " + (seat === 0 ? 'bg-red-300' : '')}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className={"card-title"} >Class name: {class_name}</h2>
                    <p>Instructor Name: {name}</p>
                    <p>Available seats: {seat}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button disabled={isAdmin?'disabled' : instructors? 'disabled' : seat === 0 ? 'disabled' : ''} onClick={() => handleAddToCart(item)} className="btn  border-pink-400 btn-outline border-b-4 btn-primary text-black">Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;