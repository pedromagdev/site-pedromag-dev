"use client"
import { Button, Image } from '@nextui-org/react';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
const InfoAbout = () => {
    return (
        <section className='grid grid-cols-2 gap-4 max-[992px]:grid-cols-1 '>
            <div className="h-[400px] w-full ">
                <Image
                    src='/images/banners/banner-1.jpg'
                    removeWrapper={false}
                />
            </div>

            <div>
                <div className='pt-4 space-y-3 max-[992px]:pt-0 '>
                    <h2 className='font-bold text-3xl'>
                        Confiança nos melhores
                    </h2>
                    <p className='text-xl'>
                        Você também pode perceber economias de custo com suas escolhas
                        de eficiência energética em sua casa personalizada.
                        Créditos fiscais federais para alguns materiais verdes
                        podem permitir que você deduza tanto.
                        Por fim, a construção personalizada lhe
                        dará mais pelo seu dinheiro.
                        Com casas personalizadas.
                    </p>

                    <Button variant='bordered' className='border-app text-app font-bold rounded-sm'
                        startContent={<GoArrowUpRight />} >
                        Marcar Agendamento
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default InfoAbout;
