import React from 'react';
import { Modal, Tabs, Button } from '@mantine/core';
import { IconFileDatabase } from '@tabler/icons';
import TableEmployee from './TableEmployee';
import FormCompany from './FormCompany';
import { useState } from 'react';
import ModalEmployee from './ModalEmployee/ModalEmployee';

export default function ModalCompany({company, opened, onClose, onSuccess}){
    const [modalEmployeeOpened, setModalEmployeeOpened] = useState(false);
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        salary: 0,
        role: {
            id: 0
        }
    });

    let handleNewEmployee = () => {
        setEmployee(
            {
                id: '',
                name: '',
                salary: 0,
                role: {
                    id: 0
                }
            }
        );
        setModalEmployeeOpened(true);
    };

    let onSuccessEmployee = () => {
        setModalEmployeeOpened(false);
        alert('Sucesso!');
        loadData();
    }

    let handleEdit = (data) => {
        setEmployee(data);
        setModalEmployeeOpened(true);
    }

    let loadData = () => {

    }

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
                    <ModalEmployee
                        idCompany={company.id}
                        employee={employee}
                        opened={modalEmployeeOpened}
                        onClose={() =>setModalEmployeeOpened(false)}
                        onSuccess={onSuccessEmployee}
                    />
                    <Button onClick={() => handleNewEmployee()}>Novo Funcionário</Button>
                    <TableEmployee
                        employes={company.employes}
                        handleEdit={handleEdit}
                    />
                </Tabs.Panel>
            </Tabs>
        </Modal>
    );
}