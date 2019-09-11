import React from 'react';
import ProtectedNavigation from './ProtectedNavigation.js';
<<<<<<< HEAD
import ReviewFilter from './ReviewFilter.js';
import ReviewList from './ReviewList.js';
import jwtDecode from 'jwt-decode';

class UserDashboard extends React.Component {

    state = {
        username: ""
    }

    componentDidMount() {
        console.log(jwtDecode(localStorage.getItem('token')))
    }

    render() {
        return(
            <div className="user-dashboard">
                <ProtectedNavigation />
                <ReviewFilter />
                <ReviewList />
            </div>
        )
    }
    
=======
import ReviewFilter from './ReviewFilter';
import ReviewList from './ReviewList';

function UserDashboard() {
    return (
        <div className="user-dashboard">
            <ProtectedNavigation />
            <ReviewFilter />
            <ReviewList />
        </div>
    )
>>>>>>> 10ff8b38cccb04f090c2dd61bd17668e3942cd54
}

export default UserDashboard;