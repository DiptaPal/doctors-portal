import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

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
        }

        //TODO: send data to the server
        //and once data is saved then close the modal
        // and display success toast
        console.log(booking);
        setTreatment(null)
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

                        <input type="text" name='username' placeholder="Full Name" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />
                        <input type="text" name='phone' placeholder="Phone Number" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />
                        <input type="email" name='email' placeholder="Email" className="w-full input-ghost outline-none py-3 px-4 border rounded-md font-semibold" />
                        <button type="submit" className='w-full btn text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;