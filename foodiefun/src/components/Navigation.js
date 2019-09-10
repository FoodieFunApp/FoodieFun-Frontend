import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Navigation () {
    return(
        <div className="navigation">
            <Link to="/">
                <div className="logo-box">
                    <img src="https://img.icons8.com/cotton/64/000000/sunny-side-up-eggs--v2.png" />
                    <h1>FoodieFun</h1>
                </div>
            </Link>
            
            <div className="navigation-links">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/register">Create Account</NavLink>
            </div>
        </div>
    )
}

export default Navigation;