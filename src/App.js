import localforage from 'localforage';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/Backend/AuthContext';
import MRoutes from './Route/Backend/MRoutes';

export default function App() {
    const [token, setToken] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		if (!token) {
			localforage.getItem('token', function (err, value) {
				if (value) {
					// AUTH_TOKEN = `Bearer ${token}`;
					setToken(value);
				} else {
					navigate('/login');
				}
			});
		}
	}, [token, navigate])
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
