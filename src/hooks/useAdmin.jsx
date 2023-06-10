import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"

const useAdmin = () =>{
    const {user} = useAuth();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users/users/admin/${user?.email}`)
            return res.json();
        },
        
    })
    return[isAdmin, isAdminLoading]
}
export default useAdmin;