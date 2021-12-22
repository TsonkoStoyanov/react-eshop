import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const IsNotAdminRoute = () => {
    const { isAdmin } = useAuthContext();

    return isAdmin ? <Navigate to="/" /> : <Outlet />
}

export default IsNotAdminRoute;