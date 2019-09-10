import React from 'react';
import ProtectedNavigation from './ProtectedNavigation.js';

function UserDashboard () {
    return(
        <div className="user-dashboard">
            <ProtectedNavigation />
            <ReviewFilter />
            <ReviewList />
        </div>
    )
}

export default UserDashboard;