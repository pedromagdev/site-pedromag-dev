"use client"
import { Button, Image } from '@nextui-org/react';
import React from 'react';

const InfoAbout = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <Image
                    src='/images/banners/banner-1.jpg'
                />
            </div>
            <div>
                <div className='pt-4 space-y-4'>
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

                    <Button variant='light'>
                        My
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InfoAbout;
