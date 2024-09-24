"use client"
import { Button, Image } from '@nextui-org/react';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { MdSecurity } from "react-icons/md";

const InfoAbout = () => {
    return (
        <section className='grid grid-cols-2 gap-4 max-[992px]:grid-cols-1 '>
            <div className="relative">
                <Image
                    src='/images/banners/banner-1.jpg'
                    className='rounded-sm'
                    removeWrapper={false}
                />
                <div className="absolute bottom-0 right-0 z-[2000] shadow-sm bg-app p-4 rounded-tl-sm rounded-br-sm opacity-95 text-white ">
                    <h2 className='flex items-center gap-2'>
                        <span className='text-2xl'>
                            <MdSecurity />
                        </span>
                        <span className='text-base font-bold'>
                            Seguro e confiavél
                        </span>
                    </h2>
                </div>
            </div>

            <div>
                <div className='pt-4 space-y-3 max-[992px]:pt-0 '>
                    <h2 className='font-bold text-3xl'>
                        Procedimento Seguro
                    </h2>
                    <p className='text-xl'>
                        Na Pedromag, transformar sonhos em realidade é o
                        nosso maior objetivo. Seja na compra de uma casa
                        pronta para morar ou na construção de um imóvel totalmente novo,
                        estamos ao seu lado em cada etapa. Oferecemos um atendimento
                        exclusivo, entendendo suas necessidades e criando soluções sob
                        medida para que você conquiste o lar perfeito.
                    </p>

                    <Button variant='bordered' className='border-app text-app font-bold rounded-sm'
                        startContent={<GoArrowUpRight />} >
                        Conhecer Condominios
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default InfoAbout;
