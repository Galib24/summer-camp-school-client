// import { useEffect, useState } from "react";
import ClassCard from "../Classcard/ClassCard";
import { Helmet } from "react-helmet-async";
import useInstructors from "../../../../hooks/useInstructors";






const Classes = () => {
    const [classes] = useInstructors();

    
    
   
    // const [classes, setClasses] = useState([]);
    // // useEffect(() => {
    // //     fetch('/instructor.json')
    // //         .then(res => res.json())
    // //         .then(data => {
    // //             setClasses(data)

    // //         })
    // // }, [])
    // console.log(classes);
    return (
        <div>
            <Helmet>
                <title>Summer Camp || Classes</title>
            </Helmet>



            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-24 ml-10  mb-28">
                {
                    classes.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
                {/* {
                    instructorsClass.map(instructorClass => <InsTructorClassCard
                    key={instructorClass._id}
                    instructorClass={instructorClass}
                    ></InsTructorClassCard>)
                } */}
            </div>
        </div>
    );
};

export default Classes;