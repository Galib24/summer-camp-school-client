import  { useEffect, useState } from 'react';

const useInstructorClass = () => {
    const [instructorsClass, setInstructorsClass] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://summer-camp-fitness-school-server.vercel.app/classItems')
            .then(res => res.json())
            .then(data => {
                setInstructorsClass(data)
                setLoading(false)

            })
    }, [])
    return [instructorsClass, loading]
};

export default useInstructorClass;