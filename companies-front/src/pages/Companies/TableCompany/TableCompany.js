import { Table, ActionIcon } from '@mantine/core';
import { IconEdit } from '@tabler/icons';

export default function TableCompany({itens, handleEdit}){
    let rows = itens.map((company, index)=>(
        <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.name}</td>
            <td>{company.phone}</td>
            <td>{company.fullAddress}</td>
            <td>
                <ActionIcon
                    size="xl"
                    radius="md"
                    variant="filled"
                    onClick={() => handleEdit(company)}
                >
                    <IconEdit size={34} />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <Table striped highlightOnHover horizontalSpacing="xl" verticalSpacing="xl" fontSize="xl">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Fone</th>
                    <th>Endereço</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}