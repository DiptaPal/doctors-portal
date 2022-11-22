import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-rosy.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = doctor =>{
        fetch(`https://doctors-portal-server-rosy.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            toast.success(`Doctor ${doctor.name} deleted Successful`, {autoClose: 1000})
            refetch();
        })
    }

    if (isLoading) {
        <div className='flex justify-center items-center my-36'>
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

    return (
        <div className='px-10'>
            <h3 className='text-3xl m-7'>Manage Doctors: {doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr
                                key={doctor._id}
                                className={`cursor-pointer ${i % 2 === 1 ? 'hover' : ''}`}
                            >
                                <th>{i + 1}</th>
                                <td><img src={doctor.image} className='w-12 h-12 rounded-full' alt="" /></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && 
                <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                modalData={deletingDoctor}
                successAction={handleDeleteDoctor}
                closeModal={closeModal}
                successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;