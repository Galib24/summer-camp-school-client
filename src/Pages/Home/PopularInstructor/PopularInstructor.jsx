import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularInstructorCard from "../../PopularInstructorCard/PopularInstructorCard";

const PopularInstructor = () => {

    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => {
                // const popularInstructor = data.filter(item => item.category === 'popular');
                // setInstructor(popularInstructor);
                const sortedInstructors = data.sort((a, b) => b.students_enrolled - a.students_enrolled);
                const topInstructors = sortedInstructors.slice(0, 6);
                setInstructor(topInstructors)

            })
    }, [])
    console.log(instructor);
    return (
        <div>
            <SectionTitle
                subHeading='Here is Our Popular Instructors'
                heading='We have best Instructors'
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20 my-6">
                {
                    instructor.map(popularInstructor => <PopularInstructorCard
                        key={popularInstructor._id}
                        popularInstructor={popularInstructor}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;