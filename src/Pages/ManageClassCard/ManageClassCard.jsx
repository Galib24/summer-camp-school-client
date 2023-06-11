/* eslint-disable no-unused-vars */


const ManageClassCard = ({item}) => {
    // console.log(items);\
   const {class_name,seat,image,name,price,email} = item;

//    todo update from
//    const handleAddToCart = item =>{

//    }
    return (
      <>
      {/* TODO work */}
            <div className={"card w-96 bg-base-100 shadow-xl  "}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className={"card-title"} >Class name: {class_name}</h2>
                    <p>Instructor Name: {name}</p>
                    <p>Instructor Email: {email}</p>
                    <p>Available seats: {seat}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button   className="btn  border-pink-400 btn-outline border-b-4 btn-error">Edit </button>
                    </div>
                </div>
            </div>
      </>
    );
};

export default ManageClassCard;