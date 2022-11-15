import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { BallTriangle } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();
    if (loader) {
        return <div className='flex justify-center items-center my-36'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#0FCFEC"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;