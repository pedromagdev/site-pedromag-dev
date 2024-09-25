"use client"
import React from 'react';
import { dataProjects } from './data-projects';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

const Projects = () => {
    return (
        <section className='mt-4 space-y-4'>
            <h1 className='text-3xl font-bold'> Nossos condominios </h1>
            <ul className='grid grid-cols-3 gap-4'>
                {dataProjects.map((project, index) => (
                    <Card key={index} className='rounded'>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h2 className='font-bold'>
                                {project.name}
                            </h2>
                        </CardHeader>

                        <CardBody className="overflow-visible py-2">
                            <Image
                                src={project.image}
                                 className="object-cover"
                            />
                        </CardBody>

                    </Card>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
