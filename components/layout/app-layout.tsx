"use client"
import React, { useRef } from 'react';
import { Navbar } from './bases/navbar/navbar';
import Footer from './bases/footer/footer';
import BannerHome from '../home/banner-home';
import { usePathname } from 'next/navigation';
import ModalAppontment from '../appointment/modal-appontment';
import { useModal } from '@/hooks';
import Loader from './bases/navbar/nextTopLoader';


const AppLayout = ({children}:{children: React.ReactNode}) => {
    const refNavbar = useRef(null)
    const pathName = usePathname()
    const {isOpen} = useModal()

    return (
        <div ref={refNavbar} className="relative flex flex-col h-screen">
            <Loader />
            {!isOpen && <Navbar target={refNavbar} />}
            {pathName === '/' && <BannerHome /> }
            <main className="container mt-4 mx-auto max-w-6xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <Footer/>
            <ModalAppontment />
        </div>
    );
}

export default AppLayout;
