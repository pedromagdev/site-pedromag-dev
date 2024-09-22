import React from 'react';
import { Link } from '@nextui-org/link';
import { footerMapLinks } from './data-footer';
import { MdKeyboardArrowRight } from "react-icons/md";
const MapLinksFooter = () => {
    return (
        <div className="space-y-2">
            <h2> {footerMapLinks.label} </h2>
            <ul className='flex gap-2 flex-col'>
                {footerMapLinks.links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            size='sm'
                            className='text-white flex items-center gap-1'
                            aria-label="Like">
                                <span className='text-lg' ><MdKeyboardArrowRight /> </span>
                                <span> {link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MapLinksFooter;
