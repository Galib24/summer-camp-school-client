

const InstructorCard = ({ instructor }) => {
    const { name, email, class_number, class_name } = instructor
    // console.log(instructor);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={instructor.instructor_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
                <p>Class Name: {class_name}</p>
                <p>Class Number: {class_number}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;