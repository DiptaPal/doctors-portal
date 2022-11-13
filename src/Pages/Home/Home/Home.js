import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className='mx-5'>
                <div className='max-w-[1440px] mx-auto'><Banner></Banner></div>
                <div className='max-w-[1440px] mx-auto'><InfoCards></InfoCards></div>
                <div className='max-w-[1440px] mx-auto'><Services></Services></div>
            </div>
            <MakeAppointment></MakeAppointment>
            <div className='max-w-[1440px] mx-auto'><Testimonial></Testimonial></div>
            <Form></Form>
        </div>
    );
};

export default Home;