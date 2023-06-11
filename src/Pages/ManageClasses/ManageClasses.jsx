import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/useInstructors";
import ManageClassCard from "../ManageClassCard/ManageClassCard";

// import ManageClassCard from "../ManageClassCard/ManageClassCard";


const ManageClasses = () => {
    const [classes] = useInstructors();
    console.log(classes);
    return (
        <>
        <Helmet>
            <title>
                Summer camp || Manage Item 
            </title>
        </Helmet>
               <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-24 mt-5">
                {
                    classes.map(item => <ManageClassCard
                    key={item._id}
                    item={item}
                    ></ManageClassCard>)
                }
            </div>
        </>
    );
};

export default ManageClasses;