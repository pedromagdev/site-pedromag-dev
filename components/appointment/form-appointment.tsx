import { Input } from '@nextui-org/input';
import { DatePicker, TimeInput } from '@nextui-org/react';
import React from 'react';
import { ButtonApp } from '../ui/button-app';

const FormAppointment = () => {
    return (
        <form className='space-y-3 max-w-[700px] w-full mx-auto relative border rounded shadow p-8'>
            <h2 className='font-bold'>Realizar Agendamento</h2>
            <div className="grid grid-cols-2 items-center gap-4 max-[700px]:grid-cols-1 ">
                <div className="">
                    <Input type="email" label="Primeiro Nome" size='sm' />
                </div>
                <div className="">
                    <Input type="email" label="Ultimo Nome" size='sm' />
                </div>
                <div className="">
                    <Input type="email" label="Email" size='sm' />
                </div>
                <div className="">
                    <Input type="email" label="Bilhete de Identidade" size='sm' />
                </div>
                <div className="">
                    <Input type="email" label="Morada" size='sm' />
                </div>
                <div className="">
                    <Input type="email" label="Terminal Telefonico" size='sm' />
                </div>
                <DatePicker label="Data do Agendamento" description="Selecione uma data" />
                <TimeInput
                    label="Hora do Agendamento"
                    description="Insira a hora do agendamento"
                />
            </div>
            <div className="flex justify-end pt-4">
                <ButtonApp>
                    Concluir agendamento
                </ButtonApp>
            </div>
        </form>
    );
}

export default FormAppointment;
