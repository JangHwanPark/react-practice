import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/comment">Comment</Link>
            <Link to="/state">UseStatePage</Link>
        </nav>
    );
}