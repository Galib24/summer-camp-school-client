import { useEffect, useState } from "react";
import ClassCard from "../Classcard/ClassCard";



const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data)

            })
    }, [])
    console.log(classes);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-24 ml-10  mb-28">
            {
                classes.map(Ct => <ClassCard
                    key={Ct._id}
                    Ct={Ct}
                ></ClassCard>)
            }
        </div>
    );
};

export default Classes;