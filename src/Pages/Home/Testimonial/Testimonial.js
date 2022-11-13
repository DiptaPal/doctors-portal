import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import reviewer1 from '../../../assets/images/people1.png'
import reviewer2 from '../../../assets/images/people2.png'
import reviewer3 from '../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: reviewer1,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: reviewer2,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: reviewer3,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className='mx-5 mb-24'>
            <div className='flex justify-between gap-4 mb-24'>
                <div>
                    <h4 className='text-secondary text-base sm:text-xl font-semibold'>Testimonial</h4>
                    <h2 className='text-xl sm:text-4xl pt-2 font-semibold'>What Our Patients Says</h2>
                </div>
                <img src={quote} className='w-24 sm:w-48' alt="" />
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;