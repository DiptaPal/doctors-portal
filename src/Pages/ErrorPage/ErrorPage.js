import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from "react-router-dom";
import errorLogo from "../../assets/error.json"
import Lottie from 'lottie-react'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';

const ErrorPage = () => {
    const error = useRouteError();
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.info('Logout Successful', { autoClose: 1000 })
                navigate('/login')

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <section className="flex items-center h-full text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <Lottie animationData={errorLogo} loop={true} />
                    <p className="text-3xl">Looks like our services are currently offline</p>
                    <p><i>{error.statusText || error.message}</i></p>
                    <h4 className='text-3xl'>
                        please
                        <button onClick={handleLogout} className="text-2xl px-8 py-3 font-semibold rounded bg-gray-100 text-gray-600 shadow-md">Sign Out</button>
                        log back in
                    </h4>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;