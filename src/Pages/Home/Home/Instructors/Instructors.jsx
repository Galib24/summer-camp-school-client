// import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";
import useInstructors from "../../../../hooks/useInstructors";


const Instructors = () => {
    const [instructors] = useInstructors();
    // const [instructors, setInstructors] = useState([]);
    // useEffect(() => {
    //     fetch('/instructor.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInstructors(data)

    //         })
    // }, [])

    // console.log(instructors);
    return (

        <div>
            <Helmet>
                <title>
                    Summer Camp || Instructors
                </title>
            </Helmet>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 ml-20 mb-20">
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    >

                    </InstructorCard>)
                }

                {/* {
                instructors.map(instructor => <div
                key={instructor._id}
                ></div>)
            } */}
            </div>
        </div>

    );
};

export default Instructors;