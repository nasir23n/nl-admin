import React from 'react';
import Aside from '../Component/Aside';
import TopNav from '../Component/TopNav';
import './app.css';

export default function Layout({ children }) {
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
