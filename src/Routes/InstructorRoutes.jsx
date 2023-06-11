
import useInstructors from '../hooks/useInstructors';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const InstructorRoutes = ({ children }) => {
    const { user } = useAuth();
    const [isInstructor ] = useInstructors();
    const location = useLocation();

 
    
    if (user && isInstructor) {
      
        return children;
        
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;