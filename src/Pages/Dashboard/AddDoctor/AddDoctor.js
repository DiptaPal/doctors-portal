import React from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import { BallTriangle } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset  } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-rosy.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
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

    const handleAddDoctor = data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            if(imageData.success){
                const doctor = {
                    name: data.username,
                    email: data.email,
                    specialty: data.specialty,
                    image: imageData.data.url
                }

                //save doctor information to the database
                fetch('https://doctors-portal-server-rosy.vercel.app/doctors',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization : `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.success('Doctor add Successful', {autoClose: 1000})
                        reset();
                        navigate('/dashboard/managedoctors')
                    }
                })
            }
        })
    }
    return (
        <div className='px-10'>
            <h3 className='text-3xl m-7'>Add Doctor</h3>
            <div className='flex flex-col w-full max-w-lg p-12 space-y-4 text-center shadow-md rounded-md bg-gray-50 text-gray-800'>
                <h1 className="my-3 text-4xl font-semibold text-center mb-8">Add Doctor</h1>
                <form onSubmit={handleSubmit(handleAddDoctor)} className='space-y-6'>
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
                        <input {...register("email", {
                            required: "Email is required"
                        })}
                            type='text' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 ' name='email'
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="label" className="text-base font-medium block text-left mb-1">Specialty</label>
                        <select
                            {...register("specialty", {
                                required: "Selection is required"
                            })}
                            className="select select-bordered w-full px-4">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >
                                    {specialty.name}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor="username" className="text-base font-medium block text-left">Photo</label>
                        <input
                            {...register("photo", {
                                required: "Photo is required"
                            })}
                            type='file' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='photo'
                            aria-invalid={errors.photo ? "true" : "false"}
                        />
                        {errors.photo && <p className='text-red-600' role="alert">{errors.photo?.message}</p>}
                    </div>
                    <input type="submit" value='Add Doctor' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-600 text-white cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

/*
    * Three places to store images
    * 1. Third party image hosting server
    * 2. File system of your server
    * 3. mongodb(database) 
*/

export default AddDoctor;