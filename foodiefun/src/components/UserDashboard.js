import React from 'react';
import ProtectedNavigation from './ProtectedNavigation.js';
import ReviewFilter from './ReviewFilter.js';
import ReviewList from './ReviewList.js';

function UserDashboard() {
        return(
            <div className="user-dashboard">
                <ProtectedNavigation />
                <ReviewFilter />
                <ReviewList />
            </div>
        )    
}

export default UserDashboard;