import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name } = treatment;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="text-lg font-bold mb-8">{name}</h3>
                    <div className='flex flex-col gap-3'>
                        <input type="text" placeholder="Type here" className="input w-full input-ghost outline-none" />
                        <input type="text" placeholder="Type here" className="input w-full input-ghost outline-none" />
                        <input type="text" placeholder="Type here" className="input w-full input-ghost outline-none" />
                        <input type="text" placeholder="Type here" className="input w-full input-ghost outline-none" />
                        <input type="text" placeholder="Type here" className="input w-full input-ghost outline-none" />
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;