import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-lg border">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label 
                    onClick={() => setTreatment(option)}
                    htmlFor="booking-modal" 
                    className={`btn bg-gradient-to-r from-primary to-secondary border-none text-white ${slots.length === 0 ? '':''}`}
                    
                    >Book Appointment</label >
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;