import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-rosy.vercel.app/users')
            const data = await res.json();
            return data
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://doctors-portal-server-rosy.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            Headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful', {autoClose: 1000})
                refetch();
            }
        })
    }

    return (
        <div className='px-10'>
            <h3 className='text-3xl m-7'>My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}
                                className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin (user._id)} className='btn btn-secondary text-white'>Make Admin</button>}</td>
                                <td><button className='btn btn-error text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;