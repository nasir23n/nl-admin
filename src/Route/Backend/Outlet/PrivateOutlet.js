import React from 'react'
import { useAuth } from '../../../contexts/Backend/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateOutlet() {
    // const { currentUser } = useAuth();
    // return currentUser ? <Outlet /> : <Navigate to="admin/login" />;
    return <Outlet />;
}
