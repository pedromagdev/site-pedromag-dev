// ProjectModal.js
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from '@nextui-org/react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  return (
    <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{project.name}</ModalHeader>
        <ModalBody>
          <Image
            alt="Imagem do Condomínio"
            src={project.image || "https://via.placeholder.com/400"} 
            width="100%"
            height="200"
          />
          <p className="mt-2">
            {project.description || "Descrição não disponível."} 
          </p>
        </ModalBody>
        <ModalFooter>
          <Button className="bg-app hover:bg-app-500 text-white hover:text-black" variant="light" onPress={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
