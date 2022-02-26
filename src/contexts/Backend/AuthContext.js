// import localforage from "localforage";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
// localforage.config({
//     driver      : localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
//     name        : 'myApp',
//     version     : 1.0,
//     size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
//     storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
//     description : 'some description'
// });
export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // if (!currentUser) {
        //     let key = localStorage.getItem('key');
        //     if (key) {
        //         setCurrentUser(key);
        //         localStorage.setItem('key', key);
        //     } else {
        //       navigate('/admin/login');
        //     }
        //   }
        // localforage.getItem('token', function (err, user) {
        //     if (user) {
        //         setCurrentUser(user);
        //     } else {
        //         navigate('admin/login');
        //     }
        // });
    }, [navigate]);

    function login() {
        let data = {
            name: 'Nasrullah',
            email: 'demo@gmail.com',
        };
        // setLoading(false);
        // localforage.setItem('token', data).then(function () {
        //     return localforage.getItem('token');
        // }).then(function (value) {
        //     setCurrentUser(value);
        //     navigate('dashboard');
        // }).catch(function (err) {
        //     console.log(err);
        // });
    }

    const value = {
        currentUser,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {loading ? 'Loading...' : children}
        </AuthContext.Provider>
    );
}