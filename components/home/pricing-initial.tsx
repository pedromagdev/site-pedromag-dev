import style from './index.module.css';
import React from 'react';
import { FaStar } from "react-icons/fa6";

const PricingInitial = () => {
    return (
        <section className={`${style.mask} relative bg-app max-w-[990px] min-h-[380px] shadow-xl w-full mx-auto text-white p-8 rounded-2xl flex gap-3 items-center justify-center`}>
            <div className="flex gap-3 items-center justify-center flex-col">
                <div className="text-center space-y-3">
                    <h2 className='text-3xl font-bold max-[782px]:text-2xl'>Valor de entrada</h2>
                    <h2 className='text-6xl font-bold max-[782px]:text-5xl max-[482px]:text-3xl'> 2.000.000,00 kz</h2>
                </div>
                <p className='text-xl max-[782px]:text-lg text-center max-w-[620px] w-full mx-auto '>Podendo pagar o remanescente por parcelas mensais num valor minimo de
                    <sapn className="font-bold"> 100.000,00kz ou 200.000,00 kz</sapn>
                </p>
            </div>
            <div className="absolute bottom-5">
                <div className="text-xl flex gap-3 items-center text-gray-100/50">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PricingInitial;
