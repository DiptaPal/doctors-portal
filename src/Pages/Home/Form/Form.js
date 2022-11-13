import React from 'react';
import form from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';
const Form = () => {
    return (
        <div className='relative py-14'>
            <img src={form} alt="" className='absolute inset-0 object-cover w-full h-full' />
            <div className='relative w-full max-w-lg p-8 space-y-3 rounded-xl mx-auto'>
                <h1 className="text-xl font-bold text-center text-primary">Contact Us</h1>
                <h1 className="text-3xl font-bold text-center pb-6 text-white">Stay connected with us</h1>

                <form className="space-y-4 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2 text-sm">
                        <input type="email" name="username" id="username" placeholder="Email Address" className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:border-blue-600" />
                    </div>
                    <div className="space-y-2 text-sm">
                        <input type="text" name="username" id="username" placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:border-blue-600" />
                    </div>
                    <div className="space-y-2 text-sm">
                        <textarea className='bg-white w-full rounded-md py-2 px-4 resize-none' name="" id="" rows="5" placeholder='Your Message'></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;