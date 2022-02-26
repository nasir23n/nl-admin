import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function Dropdown() {
    const [drop, setDrop] = useState(false);
    return (
        <div className={`drop_container ${drop && 'active'}`}>
            <button className="drop wev_effect" onClick={() => setDrop(!drop)}><i className="m_icon">settings</i></button>
            <ul className="drop_element drop_right">
                <li><Link to="#"><span className="m_icon icon">account_circle</span>Vew profile</Link></li>
                <li><Link to="#"><span className="m_icon icon">people</span>All Admin</Link></li>
                <li><Link to="#"><span className="m_icon icon"></span>Create profile</Link></li>
                <li><Link to="#"><span className="m_icon icon"></span>Panel layout</Link></li>
                <li><Link to="#"><span className="m_icon icon"></span>Logout</Link></li>
            </ul>
        </div>
    );
}

// $(function() {
//     var drop_container = $('.drop_container');
//     var drop = $('.drop_container .drop');
//     drop.each((index, item) => {
//         $(item).click(function() {
//             console.log(this);
//             if ($(this).parent().hasClass('active')) {
//                 $(this).parent().removeClass('active');
//             } else {
//                 drop_container.each(function() {
//                     $(this).removeClass('active');
//                 });
//                 $(this).parent().addClass('active');
//             }
//         });
//     });
//     window.addEventListener('click', function(event){
//         if (!event.target.matches('.drop')) {
//             for(var i = 0; i < drop_container.length; i++){
//                 var rmv = drop_container[i];
//                 if (rmv.classList.contains('active')) {
//                     rmv.classList.remove('active');
//                   }
//                 drop_container[i].classList.remove('active');
//             }
//         }
//     });
// });
