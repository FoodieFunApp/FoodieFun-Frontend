import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// need to check if user is authenticated, if authenticated return component, 
// if not authenticated render redirect component 
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    var loggedIn = localStorage.getItem('isAuthenticated');

    return (
        <Route
            {...rest}
            render={props => {
                if (loggedIn) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }

                    } />
                }

            }}
        />
    )
}