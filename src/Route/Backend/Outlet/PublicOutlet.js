import { useAuth } from '../../../contexts/Backend/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';


export default function PublicOutlet() {
    const { currentUser } = useAuth();

    return currentUser ? <Navigate to="dashboard" /> : <Outlet />;
}