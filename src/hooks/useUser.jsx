import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useaxiosSecure";

const useUser = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: DataUser = [] } = useQuery({
        queryKey: ['datauser', user?.email],
        enabled: !loading,

        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/users?email=${user?.email}`)
                // console.log('res from axios', res);
                return res.data;
            }
            return []

        },
    })
    return [DataUser, refetch]
 
};

export default useUser;