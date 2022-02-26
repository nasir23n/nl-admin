import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from '../NL_Components/Dropdown';

export default function TopNav() {
    return (
        <div className="top_nav">
            <button className="top_nav_toggle wev_effect" id="nav_toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Link to="/" className="hidden_home">ADMIN PANEL</Link>
            <div className="setting_drop">
                <Dropdown />
            </div>
        </div>
    );
}
