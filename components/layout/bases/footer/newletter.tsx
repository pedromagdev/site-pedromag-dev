"use client"
import { Input } from '@nextui-org/input';
import React from 'react';
import { BsSendFill } from "react-icons/bs";

const Newletter = () => {
    return (
        <div>
            <h2>Newsletter</h2>
            <p>
                Deixe seu email, para estar
                na nossa área de membro,
                receba actualizações sobre
                gestão empresarial no seu email
            </p>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input 
                type="email"
                 placeholder="Enter your email" 
                endContent={
                <BsSendFill className='text-app' />
            } 
                />
            </div>
        </div>
    );
}

export default Newletter;
