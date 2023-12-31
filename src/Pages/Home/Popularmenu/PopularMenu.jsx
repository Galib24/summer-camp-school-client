// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularClassItem from "../../Shared/PopularClassItem/PopularClassItem";
import { Link } from "react-router-dom"
import useInstructors from "../../../hooks/useInstructors";

const PopularMenu = () => {
    const [classes] = useInstructors();
    const sortedInstructors = classes.sort((a, b) => b.students_enrolled - a.students_enrolled);
    const topInstructors = sortedInstructors.slice(0, 6);
    // setClasses(topInstructors)

    // useEffect(() => {
    //     fetch('/instructor.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const sortedInstructors = data.sort((a, b) => b.students_enrolled - a.students_enrolled);
    //             const topInstructors = sortedInstructors.slice(0, 6);
    //             setClasses(topInstructors)

    //         })
    // }, [])
    // console.log(classes);
    return (
        <section>
            <SectionTitle
                heading='Top 6 classes, where students enrolled'
                subHeading='From Our Instructor classes'
            >

            </SectionTitle>
            <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24 md:mx-10 ml-20 mb-16">
                    {
                        topInstructors.map(item => <PopularClassItem
                            key={item._id}
                            item={item}
                        ></PopularClassItem>)
                    }
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    <Link className="mb-20" to='/classes'>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 btn-neutral text-black">View All classes </button>
                    </Link>
                </div>
            </>

        </section>
    );
};

export default PopularMenu;