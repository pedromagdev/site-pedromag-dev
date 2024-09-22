import React from 'react';
import { Navbar } from './bases/navbar/navbar';
import Footer from './bases/footer/footer';

const AppLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar/>
            <main className="container mx-auto max-w-6xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <Footer/>
        </div>
    );
}

export default AppLayout;
