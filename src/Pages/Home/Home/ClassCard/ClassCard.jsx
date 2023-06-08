

const ClassCard = ({ Ct }) => {
    const { class_name, image } = Ct
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn  border-pink-400 btn-outline border-b-4 btn-primary text-black">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;