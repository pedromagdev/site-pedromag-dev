import React from 'react';
import { services } from './data-home';

const Services = () => {
    return (
        <section className=''>
            <ul className='grid grid-cols-3 gap-3 max-[992px]:grid-cols-2 max-[602px]:grid-cols-1   '>
                {services.map((service, index)=>(
                    <li key={index} className='p-4 space-y-4 shadow-md border'>
                        <div className='flex gap-2 items-end text-app'>
                          <span className='text-4xl'>{service.icon}</span>  
                        <h3 className='text-xl font-bold'> {service.name} </h3>
                        </div>
                        <p> {service.description} </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;
