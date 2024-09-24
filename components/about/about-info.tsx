"use client"
import { Image } from '@nextui-org/react';
import React from 'react';
import { title } from '../primitives';
import { RiTeamFill } from "react-icons/ri";

const AboutInfo = () => {
    return (
        <section className=' w-full px-14 max-[992px]:px-3'>
            <div className="grid grid-cols-2 gap-4 max-[992px]:grid-cols-1 ">
                <div className='relative'>
                    <Image
                        src='/images/banners/team-pedromag-2.jpeg'
                        className='rounded-md'
                    />
                    <div className="absolute bottom-0 z-[2000] shadow-sm bg-app p-4 rounded-tr-sm rounded-bl-sm opacity-95 text-white ">
                        <h2 className='flex items-center gap-2'>
                            <span className='text-2xl'>
                                <RiTeamFill />
                            </span>
                            <span className='text-base font-bold'>Fundadores da Pedromag</span>
                        </h2>
                    </div>
                </div>

                <div className='space-y-5 pt-4'>
                    <h1 className={title()}>Quem Somos?</h1>
                    <p className='text-base'>
                        A Pedromag é uma empresa líder no setor imobiliário, dedicada a
                        oferecer soluções completas para compra, venda e locação de imóveis.
                        Com uma equipe de especialistas comprometida em entender as necessidades
                        de cada cliente, nossa missão é tornar o processo de aquisição ou venda de propriedades simples, seguro e eficiente.
                    </p>

                    <div className='space-y-2'>
                        <h2 className='font-bold text-2xl'>Compremetimento!</h2>
                            <p>
                            Atuando com transparência e excelência, a Pedromag busca sempre superar as expectativas, proporcionando um atendimento personalizado e
                            resultados que agregam valor em cada negociação.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutInfo;
