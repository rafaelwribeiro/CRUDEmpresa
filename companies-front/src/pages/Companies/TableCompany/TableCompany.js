import { Table } from '@mantine/core';

export default function TableCompany({itens}){
    let rows = itens.map((company, index)=>(
        <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.name}</td>
            <td>{company.phone}</td>
            <td>{company.fullAddress}</td>
        </tr>
    ));
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Fone</th>
                    <th>Endereço</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}