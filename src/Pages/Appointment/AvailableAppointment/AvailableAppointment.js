import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])

    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate ,'PP')

    //normal function 
    const { data : appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date], 
        queryFn: () => fetch(`https://doctors-portal-server-rosy.vercel.app/v2/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    if(isLoading){
       return <Loading></Loading>
    } 

    // async , await function

    // const {data : appointmentOptions=[], isLoading} = useQuery({
    //     queryKey: 'appointmentOptions',
    //     queryFn: () => async () => {
    //         const res = await fetch('https://doctors-portal-server-rosy.vercel.app/appointmentOptions')
    //         const data = await res.json();
    //         return data
    //     }
    // })

    //old way

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-rosy.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='my-16'>
            <h2 className='text-center text-xl text-secondary font-bold pb-10'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;