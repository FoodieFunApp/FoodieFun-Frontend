import React from 'react';
import AddReview from './AddReview.js';
import {Link} from 'react-router-dom';

function ProtectedNavigation () {
    return(
        <div className="protected-navigation">
            <Link to="/dashboard">
                <div className="logo-box">
                    <img src="https://img.icons8.com/cotton/64/000000/sunny-side-up-eggs--v2.png" />
                    <h1>FoodieFun</h1>
                </div>
            </Link>
            
            <div className="protected-navigation-links">
                <AddReview />
            </div>
        </div>
    )
}

export default ProtectedNavigation;