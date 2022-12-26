import { Modal, TextInput, Button, Group, Box, Select } from '@mantine/core';
import { useEffect, useState } from 'react';
import RoleAPIService from '../../../../services/RoleAPIService.js';
import EmployeeAPIService from '../../../../services/EmployeeAPIService.js';

export default function ModalEmployee({idCompany, employee, opened, onClose}){
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [role, setRole] = useState(0);
    const [salary, setSalary] = useState(0);
    const [roles, setRoles] = useState([]);

    let api = RoleAPIService.getInstance();
    let employeeApi = EmployeeAPIService.getInstance();

    useEffect(
        () => {
            console.log('use effect');
            setId(employee.id);
            setName(employee.name);
            setSalary(employee.salary);
            setRole(employee.role.id);

            api.getRoles((res) => {
                setRoles(res);
            });
        }, []
    );

    let handleSubmit = (evt) => {
        evt.preventDefault();

        let employee = {
            name: name,
            role: {
                id: role
            },
            salary: salary
        }
        if(id){
            employeeApi.update(idCompany, employee, (res) => {
                console.log(res);
            });
        } else {
            employeeApi.create(idCompany, employee, (res) => {
                console.log(res);
            });
        }
    }

    return (
        <Modal
                opened={opened}
                onClose={onClose}
                title="Cadastrar novo funcionário"
                size="lg"
        >
            <Box sx={{ maxWidth: 600 }} mx="auto">
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <TextInput
                        withAsterisk
                        label="Nome"
                        placeholder="Nome"
                        value={name}
                        onChange={evt => setName(evt.target.value)}
                    />
                    

                    <Select
                        label="Cargo"
                        placeholder="Selecione"
                        data={roles.map(r => ({value: r.id, label: r.name, key: r.id}))}
                        value={role}
                        onChange={setRole}
                        required
                    />

                    <TextInput
                        withAsterisk
                        label="Salario"
                        placeholder=""
                        value={salary}
                        onChange={evt => setSalary(evt.target.value)}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">Gravar</Button>
                    </Group>
                </form>
            </Box>
        </Modal>
    )
}