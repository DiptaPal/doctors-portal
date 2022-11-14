import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <div className='relative'>
            <img src={footer} alt="" className='absolute w-full h-full inset-0 object-cover' />
            <div className='relative'>
                <footer className="footer p-10 text-black max-w-[1440px] mx-auto py-24">
                    <div>
                        <span className="footer-title">SERVICES</span>
                        <Link className="link link-hover">Emergency Checkup</Link>
                        <Link className="link link-hover">Monthly Checkup</Link>
                        <Link className="link link-hover">Weekly Checkup</Link>
                        <Link className="link link-hover">Deep Checkup</Link>
                    </div>
                    <div>
                        <span className="footer-title">ORAL HEALTH</span>
                        <Link className="link link-hover">Fluoride Treatment</Link>
                        <Link className="link link-hover">Cavity Filling</Link>
                        <Link className="link link-hover">Teeth Whitening</Link>
                    </div>
                    <div>
                        <span className="footer-title">OUR ADDRESS</span>
                        <Link className="link link-hover">New York - 101010 Hudson</Link>
                    </div>
                </footer>
                <div className='py-6 text-center'>
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;