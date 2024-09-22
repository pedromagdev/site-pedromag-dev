import { Image } from '@nextui-org/react';
import React from 'react';

const LogoApp = () => {
    return (
        <div className='flex items-center'>
            <Image
                alt="sdds"
                height={40}
                width={40}
                src='/images/icons/logo-svg.svg'
            />
            <p className="font-bold text-app">
                Pedromag
            </p>

        </div>
    );
}

export default LogoApp;
