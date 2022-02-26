import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '../Component/Aside';
import TopNav from '../Component/TopNav';
import './app.css';

export default function Layout({ children }) {
  const [isLoggedIn, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
      if (!isLoggedIn) {
        let key = localStorage.getItem('key');
        if (key) {
          setLogin(key);
          localStorage.setItem('key', key);
        } else {
          navigate('/admin/login');
        }
      }
  }, [isLoggedIn]);
    // if(!isLoggedIn) {
    //     navigate('/admin/login');
    // }
  return (
    <div className="main_wrap">
        <Aside />
        <div className="content_wrap">
            <TopNav />
            <div className="main_content">

                {children}

            </div>
        </div>
    </div>
  )
}
