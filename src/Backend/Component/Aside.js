import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userAvatar from '../assets/user.svg';
import $ from 'jquery';
import CustomLink from './CustomLink';

export default function Aside() {
    const ref = useRef();
    useEffect(() => {
        let ul = ref.current;
        let allUl = $(ul).find('.aside_drop_btn');
        allUl.each(function() {
            $(this).click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    allUl.each(function() {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                        }
                    });
                    $(this).addClass('active');
                }
            });
        });
    }, []);

    return (
        <div className="aside" id="aside">
            <Link to="/dashboard" className="aside_top wev_effect">
                ADMIN PANEL
            </Link>
            <div className="aside_fixed_part">
                <div className="aside_profile">
                    <div className="profile_image">
                        <img src={userAvatar} alt="U" />
                    </div>
                    <div className="info">
                        <h4 className="name">Nasrullah</h4>
                        <p>entnasir23a@gmail.com</p>
                    </div>
                </div>
                <ul className="aside_links" ref={ref}>
                    <li>
                        <CustomLink link="/dashboard">
                            {(match) => (
                                <Link to="/dashboard" className={match && 'active'}>
                                    <span className="aside_icon m_icon">
                                        dashboard
                                    </span>
                                    Deshboard
                                </Link>
                            )}
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink link="/user">
                            {(match) => (
                                <Link to="/user" className={match && 'active'}>
                                    <span className="aside_icon m_icon">category</span>
                                    User
                                </Link>
                            )}
                        </CustomLink>
                    </li>
                    <li className="aside_drop">
                        <Link to="#" className="aside_drop_btn wev_effect ">
                            <span className="aside_icon m_icon">category</span>
                            Catagory
                        </Link>
                        <ul>
                            <li><a className="wev_effect " to="#">Add Catagory</a></li>
                            <li><a className="wev_effect " to="#">All Catagory</a></li>
                            <li>
                                <Link className="wev_effect " to="#">
                                    Trashed Catagory
                                    <span className="badges danger ml_auto" id="aside_trashed">1</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="aside_drop">
                        <Link to="#" className="aside_drop_btn wev_effect ">
                            <span className="aside_icon m_icon">newspaper</span>
                            News
                        </Link>
                        <ul>
                            <li><Link className="wev_effect " to="#">Add News</Link></li>
                            <li><Link className="wev_effect " to="#">All News</Link></li> 
                            <li><Link className="wev_effect " to="#">Drafed News</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
