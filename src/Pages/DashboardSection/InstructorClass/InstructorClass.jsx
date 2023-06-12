import useInstructorClass from "../../../hooks/useInstructorClass";
import StatusClass from "../../statusClass/StatusClass";


const InstructorClass = () => {
    const [instructorsClass] = useInstructorClass();
    console.log(instructorsClass);
    
    return (
        <>
            <h1 className="text-4xl">The list of status for approve</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols2 gap-5 ml-16 my-16">
                {
                    instructorsClass.map(is => <StatusClass
                    key={is._id}
                    is={is}
                    ></StatusClass>)
                }
            </div>
        </>
    );
};

export default InstructorClass;