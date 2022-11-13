import React from 'react';
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import Service from './Service';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: whitening,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            icon: cavity,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            icon: fluoride,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ]
    return (
        <div className='my-24'>
            <div className='text-center mb-14'>
                <h4 className='text-primary text-xl font-semibold'>OUR SERVICES</h4>
                <h2 className='text-3xl pt-2 font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='my-28'>
                <div className="hero">
                    <div className="hero-content flex-col justify-around gap-10 lg:gap-0 lg:flex-row">
                        <div className='lg:w-1/2'>
                            <img alt='' src={treatment} className="sm:max-w-sm mx-auto object-cover object-center  rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;