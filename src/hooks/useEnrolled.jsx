import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';


const useEnrolled = () => {
    const { user } = useAuth();


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