import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularClassItem from "../../Shared/PopularClassItem/PopularClassItem";


const PopularMenu = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => {
                const sortedInstructors = data.sort((a, b) => b.students_enrolled - a.students_enrolled);
                const topInstructors = sortedInstructors.slice(0, 6);
                setClasses(topInstructors)

            })
    }, [])
    console.log(classes);
    return (
        <section>
            <SectionTitle
                heading='popular Section'
                subHeading='From Our Instructor classes'
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24 md:mx-6 ml-20 mb-24">
                {
                    classes.map(item => <PopularClassItem
                        key={item._is}
                        item={item}
                    ></PopularClassItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;