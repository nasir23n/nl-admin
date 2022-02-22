import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../Backend/Auth/Login';
import Dashboard from '../../Backend/Dashboard';
import Home from '../../Frontend/Home';

import PrivateOutlet from './Outlet/PrivateOutlet';
import PublicOutlet from './Outlet/PublicOutlet';


const MRoutes = () => (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PrivateOutlet />}>
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/*" element={<PublicOutlet />}>
            <Route path="admin/login" element={<Login />} />
        </Route>
    </>
);

export default MRoutes;