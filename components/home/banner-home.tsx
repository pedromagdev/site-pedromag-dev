import React from 'react';
import banner from './index.module.css';
import { ButtonApp as Button } from '../ui/button-app';
const BannerHome = () => {
    return (
        <section className={` ${banner.banner} min-h-[100vh] flex items-center justify-start px-12`}>
            <div className="max-w-[600px] w-full">
                <h1 className='font-bold text-5xl leading-[55px] '>
                    Realize o sonho de ter a casa própria
                    com a imobíliaria <span className="text-app">PEDROMAG</span>
                </h1>
                <div className="">
                    <Button>
                        Ver Casas
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default BannerHome;
