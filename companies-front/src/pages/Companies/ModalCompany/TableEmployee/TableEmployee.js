import { Table, ActionIcon } from '@mantine/core';
import { IconEdit } from '@tabler/icons';

export default function TableEmployee({employes}){
    let rows = employes.map((emp, index)=>(
        <tr key={emp.id}>
            <td></td>
            <td>{emp.name}</td>
            <td>{emp.role.name}</td>
            <td>{emp.salary}</td>
            <td>
                <ActionIcon
                    size="xl"
                    radius="md"
                    variant="filled"
                    onClick={(evt) => handleEdit(emp)}
                >
                    <IconEdit size={34} />
                </ActionIcon>
            </td>
        </tr>
    ));


    let handleEdit = (emp) => {
        console.log(emp);
    }

    return (
        <Table striped highlightOnHover horizontalSpacing="xl" verticalSpacing="xl" fontSize="xl">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Salário</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}