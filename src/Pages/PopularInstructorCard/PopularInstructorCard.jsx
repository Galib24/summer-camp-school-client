// import { Link } from "react-router-dom"

const PopularInstructorCard = ({ popularInstructor }) => {
    const { name, instructor_img, class_number, email, class_name } = popularInstructor
    // console.log(popularInstructor);
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={instructor_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
                    <p>Email: {class_name}</p>
                    <p>class Name: {class_name}</p>
                    <p>class No: {class_number}</p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
         
        </>
    );
};

export default PopularInstructorCard;