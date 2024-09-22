import React from 'react';
import { footerContacts } from './data-footer';
import { Button } from '@nextui-org/button';

const ContactsFooter = () => {
    return (
        <div className="space-y-4">
            <h2> {footerContacts.contacts.label} </h2>
            <ul className='space-y-3'>
                {footerContacts.contacts.links.map((link, index) => (
                    <li key={index} className='flex items-center gap-2'>
                        <span className='text-xl'> {link.icon} </span>
                        <span className='text-xs'> {link.label} </span>
                    </li>
                ))}
            </ul>

            <ul className='flex gap-4 items-center'>
                {footerContacts.contacts.iconsSocial.map((link, index) => (
                    <li key={index}>
                        <Button
                            size='sm'
                            isIconOnly
                            className='border rounded-full bg-transparent text-white'
                            aria-label="Like">
                            {link.icon}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactsFooter;
