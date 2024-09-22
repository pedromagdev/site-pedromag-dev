import React from 'react';
import { Link } from '@nextui-org/link';
import { footerMapLinks } from './data-footer';

const MapLinksFooter = () => {
    return (
        <div className="space-y-4 ">
            <h2> {footerMapLinks.label} </h2>
            <ul className='flex gap-2 flex-col'>
                {footerMapLinks.links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            size='sm'
                            className='text-white'
                            aria-label="Like">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MapLinksFooter;
