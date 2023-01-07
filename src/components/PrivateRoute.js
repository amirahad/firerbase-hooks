import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuthContext();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: location } }}
                    />
                )
            }
        >
        </Route>
    )
}

export default PrivateRoute