"use client"
import { Button, Image } from '@nextui-org/react';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { BsFillBuildingsFill } from "react-icons/bs";
const InfoCondo = () => {
    return (
        <section className='grid grid-cols-2 gap-4 max-[992px]:grid-cols-1 '>
            <div>
                <div className='pt-4 space-y-4 max-[992px]:pt-0 '>
                    <h2 className='font-bold text-3xl'>
                        Pensamos no seu bolso
                    </h2>
                    <p className='text-xl'>
                        Você também pode perceber que economias de custo com as suas escolhas
                        não são fácies de tomar. Gastos inesperados ou implosivos não garantem
                        uma vida estável. Então a Pedromag proporciona flexibilidade
                        na aquisição de casas de forma segura e confiável.
                    </p>

                    <Button variant='bordered' className='border-app text-app font-bold rounded-sm'
                        startContent={<GoArrowUpRight />} >
                        Ver Requesitos
                    </Button>
                </div>
            </div>
            <div className='max-[992px]:-order-1 relative'>
                <Image
                    src='/images/banners/banner-2.jpg'
                    className='rounded-md'
                />
                <div className="absolute bottom-0 right-0 z-[200] shadow-sm bg-app p-4 rounded-tl-sm rounded-br-sm opacity-95 text-white ">
                    <h2 className='flex items-center gap-2'>
                        <span className='text-2xl'>
                            <BsFillBuildingsFill />
                        </span>
                        <span className='text-base font-bold'>Garanta o seu futuro</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default InfoCondo;
