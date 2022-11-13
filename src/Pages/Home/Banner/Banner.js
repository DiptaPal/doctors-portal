import React from 'react';
import bgImage from '../../../assets/images/bg.png'
import banner from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton';
const Banner = () => {
    return (
        <div className='relative'>
            <img className='absolute inset-0 object-cover w-full h-full hidden lg:block rounded-lg' src={bgImage} alt="" />
            <div className="hero pt-12 pb-20 lg:pt-52 lg:pb-60">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={banner} className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-3xl sm:text-5xl font-bold py-2 lg:py-0">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Getting Start</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;