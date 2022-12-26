import { TextInput, Button, Group, Box, Select } from '@mantine/core';
import { useEffect, useState } from 'react';
import RoleAPIService from '../../services/RoleAPIService.js';
import EmployeeAPIService from '../../services/EmployeeAPIService.js';
import { useNavigate, useParams } from 'react-router-dom';


export default function Employee(){
    let { idCompany, idEmployee } = useParams();

    const navigate = useNavigate();

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
            api.getRoles((res) => {
                setRoles(res);
            });

            loadData();
        }, []
    );

    let loadData = () =>{
        employeeApi.get(idCompany, idEmployee, (data) => {
            setId(0);
            if(!data) return;
            setId(data.id);
            setName(data.name);
            setRole(data.role.id);
            setSalary(data.salary);
        });
    }

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
            employee = {...employee, id: id}
            employeeApi.update(idCompany, employee, (res) => {
                onSucess();
            });
        } else {
            employeeApi.create(idCompany, employee, (res) => {
                onSucess();
            });
        }
    }

    let onSucess = () => {
        navigate(-1);
    }

    return (
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
    );
}