/* eslint-disable no-unused-vars */

const PopularClassItem = ({ item }) => {
    const { image, name, students_enrolled, class_number } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img  src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassItem;