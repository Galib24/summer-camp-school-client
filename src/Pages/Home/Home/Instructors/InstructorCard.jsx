import { motion, useScroll } from "framer-motion"
import { Rating } from '@smastrom/react-rating'
const InstructorCard = ({ instructor }) => {
    const { name, email, class_number, class_name,rating } = instructor
    // console.log(instructor);
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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={instructor.instructor_img} alt="Shoes" /></figure>
                <div className="card-body">
                <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
                    <p>Class Name: {class_name}</p>
                    <p>Class Number: {class_number}</p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
        </>
    );
};

export default InstructorCard;