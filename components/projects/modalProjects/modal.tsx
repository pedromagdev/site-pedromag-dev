// ProjectModal.js
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dataCarousel } from "../data-projects-carousel";

const ProjectModal = ({ isOpen, onClose, project }) => {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {project.name}
        </ModalHeader>
        <ModalBody>
          {/* <Carousel className="w-96">
            <CarouselContent>
            {dataCarousel.map((carousel, index) => (
              <CarouselItem key={index} className="w-100 h-100">
                <Image 
                  src={carousel.image}
                  width="100%"/>
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
          <Image
            alt="Imagem do Condomínio"
            src={project.image || "https://via.placeholder.com/400"}
            width="100%"
            height="200"
          />
          <p className="mt-2">
            {project.description || "Carregando descrição..."}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            className="bg-app hover:bg-app-500 text-white hover:text-black"
            variant="light"
            onPress={onClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
