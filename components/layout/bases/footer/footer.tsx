import React from 'react';
import style from './bg-footer.module.css'
import ContactsFooter from './contacts-footer';
import MapLinksFooter from './map-links-footer';
import Newletter from './newletter';

const Footer = () => {
    return (
        <footer className={`${style.footer} py-24 max-[992px]:bg-cover  text-white footer mt-6 bg-app w-full flex items-center justify-center px-8`}>
            <div className="max-w-[1000px]  mx-auto space-y-8">
                <div className="grid grid-cols-3 max-[992px]:grid-cols-1 gap-4">
                    <ContactsFooter />
                    <MapLinksFooter />
                    <Newletter />
                </div>
                <div className=''>
                    <div className="border-t border-white w-full"></div>
                    <p className='text-xs mt-2'>
                        &copy; todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
