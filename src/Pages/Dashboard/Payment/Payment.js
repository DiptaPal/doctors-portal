import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot, patient, email } = booking
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigation = useNavigation();

    if(navigation.state === "loading"){
      return  <Loading></Loading>
    }
    return (
        <div className='px-10'>
            <div className='m-7'>
                <h3 className='text-3xl'>Payment for {treatment}</h3>
                <h1 className="my-3 text-2xl font-semibold mb-8">Please pay ${price} for your appointment on {appointmentDate} at {slot}</h1>
            </div>
            <div className='ml-7 flex flex-col w-full max-w-lg p-12 space-y-4 text-center shadow-md rounded-md bg-gray-50 text-gray-800'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;