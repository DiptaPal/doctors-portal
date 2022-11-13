import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../components/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`,
        }}
        className='object-cover object-center'
        >
            <div className="hero text-white mt-64 mb-28">
                <div className="hero-content pb-0 flex-col lg:flex-row">
                    <img src={doctor} alt='' className="-mt-32 pb-0 hidden lg:block lg:w-1/2" />
                    <div className='py-[71px] px-7 lg:py-0'>
                        <h3 className='text-primary text-xl font-bold pb-2'>Appointment</h3>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;