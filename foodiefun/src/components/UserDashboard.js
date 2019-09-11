import React from 'react';
import ProtectedNavigation from './ProtectedNavigation.js';
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
    
}

export default UserDashboard;