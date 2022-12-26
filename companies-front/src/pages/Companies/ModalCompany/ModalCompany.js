import React from 'react';
import { Modal, Tabs } from '@mantine/core';
import { IconFileDatabase } from '@tabler/icons';
import TableEmployee from './TableEmployee';
import FormCompany from './FormCompany';

export default function ModalCompany({company, opened, onClose, onSuccess}){

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Cadastrar nova empresa"
            size="lg"
        >
            <Tabs defaultValue="company" allowTabDeactivation={true}>
                <Tabs.List>
                    <Tabs.Tab value="company" icon={<IconFileDatabase size={14} />}>Empresa</Tabs.Tab>
                    <Tabs.Tab value="employee" icon={<IconFileDatabase size={14} />} hidden={!company.id}>Funcionarios</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="company" pt="xs">
                    <FormCompany
                        company={company}
                        onSuccess={onSuccess}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="employee" pt="xs">
                    <TableEmployee
                        employes={company.employes}
                    />
                </Tabs.Panel>
            </Tabs>
        </Modal>
    );
}