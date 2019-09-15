import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function ProtectedNavigation() {

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }

    return (
        <div className="protected-navigation">
            <Link to="/dashboard">
                <div className="logo-box">
                    <img alt="sunnysideupeggspic" src="https://img.icons8.com/cotton/64/000000/sunny-side-up-eggs--v2.png" />
                    <h1>FoodieFun</h1>
                </div>
            </Link>

            <div className="protected-navigation-links">
                <NavLink className="nav-link" to="/login" onClick={logout}>Logout</NavLink>
                <NavLink className="nav-link" to="/addreview">Add Review</NavLink>
            </div>
        </div>
    )
}

export default ProtectedNavigation;