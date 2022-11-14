import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header>
            <div className='relative'>
                <img className='absolute inset-0 object-cover w-full h-full hidden lg:block rounded-lg' src={bgImage} alt="" />
                <div className="hero pt-12 pb-20 lg:pt-52 lg:pb-60">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-14 lg:gap-24">
                        <img alt='' src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                        <div>
                            <div className='shadow-2xl rounded-lg bg-white'>
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;