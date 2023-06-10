import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useaxiosSecure';




const useEnrolled = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/enrolled?email=${user?.email}`,{
        //         headers: {
        //             authorization: `bearer ${token}`

        //         }})
        //         // console.log(res.data);
        //     return res.json();

        // },
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/enrolled?email=${user?.email}`)
                console.log('res from axios', res);
                return res.data;
            }
            return []

        },
    })
    // console.log(enroll);
    return [enroll, refetch]

}
export default useEnrolled;