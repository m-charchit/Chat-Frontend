import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {

    // @ts-ignore
    const {isLoggedIn} = {isLoggedIn:true}
    if (!props.logRegPage){
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
    } else if(props.logRegPage === true) {
        return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
    }
}

export default ProtectedRoute