import React from 'react';
import ProtectedNavigation from './ProtectedNavigation.js';
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
}

export default UserDashboard;