import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/Backend/AuthContext';
import MRoutes from './Route/Backend/MRoutes';

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {MRoutes()}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
