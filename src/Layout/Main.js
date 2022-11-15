import React from 'react';
import {Outlet} from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Main;