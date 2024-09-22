import React from 'react';
import style from './bg-footer.module.css'
import ContactsFooter from './contacts-footer';
import MapLinksFooter from './map-links-footer';
import Newletter from './newletter';

const Footer = () => {
    return (
        <footer className={`${style.footer} text-white footer mt-6 bg-app w-full flex items-center justify-center p-4`}>
            <div className="grid grid-cols-3 gap-4">
                <ContactsFooter />
                <MapLinksFooter />
                <Newletter />
            </div>
        </footer>
    );
}

export default Footer;
