import { Modal } from '@mantine/core';

export default function ModalEmployee({opened, onClose}){
    return (
        <Modal
                opened={opened}
                onClose={onClose}
                title="Cadastrar novo funcionário"
                size="lg"
        >

        </Modal>
    )
}