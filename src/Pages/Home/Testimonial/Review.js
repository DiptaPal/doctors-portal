import React from 'react';

const Review = ({ review }) => {
    const { name, img, feedback, location } = review
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='mb-8'>{feedback}</p>
                <div className="card-actions items-center gap-5">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;