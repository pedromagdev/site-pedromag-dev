"use client"
import { useModal } from '@/hooks';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import React from 'react';
import FormAppointment from './form-appointment';

const ModalAppontment = () => {

    const {isOpen,setIsOpen} = useModal()
    return (
        <Modal placement='center' isOpen={isOpen} onOpenChange={()=>setIsOpen(false)} size='full' className='z-[8000] fixed' >
            <ModalContent>
            <ModalBody className='p-10'>
                <FormAppointment />
            </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ModalAppontment;
