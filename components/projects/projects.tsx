"use client";
import React from 'react';
import { dataProjects } from './data-projects';
import { Card, CardFooter, Image, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <section className="mt-4 space-y-4">
        <h1 className="text-3xl font-bold"> Nossos condominios </h1>
        <ul className="grid grid-cols-3 gap-4 max-[992px]:grid-cols-2 max-[702px]:grid-cols-1">
          {dataProjects.map((project, index) => (
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
              <CardFooter className="bg-app/70 justify-between border-white/10 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white">{project.name}</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                  onPress={handleOpen} // Abre o modal
                >
                  Ver mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Nome do Condomínio</ModalHeader>
          <ModalBody>
            <Image
              alt="Imagem do Condomínio"
              src="https://via.placeholder.com/400" // Imagem de exemplo
              width="100%"
              height="200"
            />
            <p className="mt-2">
              Este é um exemplo de descrição do condomínio. Aqui você pode incluir detalhes sobre as comodidades, a localização e outras informações relevantes que possam interessar aos moradores ou investidores.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Projects;
