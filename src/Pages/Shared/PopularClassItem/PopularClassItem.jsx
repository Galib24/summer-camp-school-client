/* eslint-disable no-unused-vars */
import { Rating } from '@smastrom/react-rating';

const PopularClassItem = ({ item }) => {
    const { image, name, students_enrolled, class_name, rating } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                />
                <p>Student Enrolled: {students_enrolled}</p>
                <p>Instructors Name: {name}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default PopularClassItem;