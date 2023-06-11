import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useaxiosSecure";


const useCoInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async ()=>{
           if(user?.email){
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is instructor response', res)
            // console.log(res);
            return res.data.instructor;
           }
           return [];
        }
    });
    return [isInstructor, isInstructorLoading]
};

export default useCoInstructor;