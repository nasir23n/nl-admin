import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function CustomLink({ children, link }) {
    let resolved = useResolvedPath(link);
    let match = useMatch({ path: resolved.pathname, end: true });
    return children(match);
    // return name;
        // <Link
        //     className={`${match && 'active'}`}
        //     to={to}
        //     {...props}
        // >
        //     {children}
        // </Link>
}
