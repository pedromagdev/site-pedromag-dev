"use client"
import React from 'react';
import { dataProjects } from './data-projects';
import { Card, CardBody, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';

const Projects = () => {
    return (
      <section className="mt-4 space-y-4">
        <h1 className="text-3xl font-bold"> Nossos condominios </h1>
        <ul className="grid grid-cols-3 gap-4">
          {dataProjects.map((project, index) => (
            // <Card key={index} className='rounded'>
            //     <CardBody className="overflow-visible py-2">
            //         <Image
            //             src={project.image}
            //              className="object-cover"
            //         />
            //     </CardBody>
            //     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start my-4">
            //         <h2 className='font-bold'>
            //             {project.name}
            //         </h2>
            //     </CardHeader>
            // </Card>

            <Card
              key={index}
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <Image
                alt={project.name}
                className="object-cover"
                height={200}
                src={project.image}
                width="100%"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{project.name}</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Ver mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </section>
    );
}

export default Projects;
