import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    useTitle('Register')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleRegister = data => {
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center mt-[200px]'>
            <div className='flex flex-col w-full max-w-lg p-12 space-y-4 text-center bg-gray-50 text-gray-800'>
                <h1 className="my-3 text-4xl font-semibold text-center mb-8">Sign Up</h1>
                <form onSubmit={handleSubmit(handleRegister)} className='space-y-6'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="username" className="text-base font-medium block text-left">Name</label>
                        <input
                            {...register("username", {
                                required: "Name is required"
                            })}
                            type='text' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='username'
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username && <p className='text-red-600' role="alert">{errors.username?.message}</p>}
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="email" className="text-base font-medium block text-left">Email</label>
                        <input {...register("email",{
                            required: "Email is required"
                        })} 
                        type='text' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 ' name='email' 
                        aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="password" className="text-base font-medium block text-left">Password</label>
                        <input {...register("password",{
                            required: "Password is required",
                            minLength: {value: 6, message: 'Password must be 6 characters or longer'}
                        })} 
                        type='password' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800' name='password' 
                        aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input type="submit" value='Register' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-600 text-white cursor-pointer' />
                </form>
                <p className="text-sm text-center text-gray-600">Already have an account?
                    <Link to="/login" className="text-secondary"> Please Login</Link>
                </p>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-600" />
                    <p className="px-3 text-gray-600">OR</p>
                    <hr className="w-full text-gray-600" />
                </div>
                <button className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 text-black cursor-pointer'>CONTINUE WITH GOOGLE </button>
            </div>
        </div>
    );
};

export default Register;