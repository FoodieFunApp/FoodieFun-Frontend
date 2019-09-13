import React from 'react';
import AddReview from './AddReview.js';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

function ProtectedNavigation() {
    return (
        <div className="protected-navigation">
            <Link to="/app">
                <div className="logo-box">
                    <img alt="sunnysideupeggspic" src="https://img.icons8.com/cotton/64/000000/sunny-side-up-eggs--v2.png" />
                    <h1>FoodieFun</h1>
                </div>
            </Link>

            <div className="protected-navigation-links">
                <Link to="/add-review"><Button>+ Add Review</Button></Link>
            </div>
        </div>
    )
}

export default ProtectedNavigation;