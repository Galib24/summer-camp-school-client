import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const ManageClassesInstructor = () => {
    const {user} = useAuth();

    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const classname = form.classname.value;
        const username = form.username.value;
        const useremail = form.useremail.value;
        const availableseat = form.availableseat.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const NewItemClasses = { classname, username,useremail, availableseat, price, photo }
        console.log(NewItemClasses);
        


        // send data to database
        fetch('http://localhost:5000/classItems', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewItemClasses)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Pending For Approve From Admin',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                }
                
            })
            

    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAdd} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" name="classname" placeholder="Class Name"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" placeholder="username" name="username" defaultValue={user?.displayName} className="input input-bordered" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input type="text" placeholder="user email" name="useremail" defaultValue={user?.email} className="input input-bordered" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seat</span>
                    </label>
                    <input type="number" name="availableseat" placeholder="Available Seat" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default ManageClassesInstructor;