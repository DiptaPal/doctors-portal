import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: username,
            slot,
            email,
            phone,
            price,
        }

        //TODO: send data to the server
        //and once data is saved then close the modal
        // and display success toast
        
        fetch('https://doctors-portal-server-rosy.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking Confirmed',{autoClose: 1000})
                setTreatment(null)
                refetch();
            }
            else{
                toast.error(data.message,{autoClose: 1000});
                
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-3'>
                        <input type="text" value={date} readOnly className="w-full input-ghost outline-none py-3 px-4 bg-gray-200 rounded-md font-semibold" />

                        <select name='slot' className="w-full input-ghost outline-none py-3 px-4 bg-gray-200 rounded-md font-semibold">
                            {
                                slots.map((slot, i) => <option className='text-black' 
                                key={i}
                                value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='username' defaultValue={user?.displayName} readOnly  placeholder="Full Name" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />
                        <input type="text" name='phone' required placeholder="Phone Number" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />
                        <input type="email" name='email' defaultValue={user?.email}  readOnly  placeholder="Email" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />
                        <button type="submit" className='w-full btn text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;