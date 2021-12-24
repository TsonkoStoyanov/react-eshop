import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

const IsAdminRoute = () => {
    const { isAdmin } = useAuthContext();

    return isAdmin ? <Outlet /> : <Navigate to="/" />
}

export default IsAdminRoute;