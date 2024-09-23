"use client"
import React, { useRef } from 'react';
import { Navbar } from './bases/navbar/navbar';
import Footer from './bases/footer/footer';
import BannerHome from '../home/banner-home';

const AppLayout = ({children}:{children: React.ReactNode}) => {
    const refNavbar = useRef(null)
    return (
        <div ref={refNavbar} className="relative flex flex-col h-screen">
            <Navbar target={refNavbar} />
            <BannerHome />
            <main className="container mt-4 mx-auto max-w-6xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <Footer/>
        </div>
    );
}

export default AppLayout;
