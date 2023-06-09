import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const useEnrolled = () => {
    const { user } = useContext(AuthContext);


    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolled?email=${user?.email}`)
            return res.json();

        },
    })
    return [enroll, refetch]

}
export default useEnrolled;