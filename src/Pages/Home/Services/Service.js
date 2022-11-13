import React from 'react';

const Service = ({ service }) => {
    const { title, icon, description } = service;
    return (
        <div>
            <div className="card bg-base-100 border outline-none shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={icon} alt="doctor" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;