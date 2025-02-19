import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <p>Loading..</p>
    }
    return user.email ? children : <Navigate to="/login" state={{from:location}} />;
};

export default PrivateRoute;