import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode';


// need to check if user is authenticated, if authenticated return component, 
// if not authenticated render redirect component 
export const ProtectedRoute = ({ component: Component, ...rest }) => {

    const tokenName = jwt_decode(localStorage.getItem('token')).username;
    const username = window.localStorage.getItem('username');

    return (
        <Route
            {...rest}
            render={props => {
                if (tokenName === username) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to='/login' />
                }

            }}
        />
    )
}