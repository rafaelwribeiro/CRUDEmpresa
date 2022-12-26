import { useParams } from "react-router-dom";
import { Tabs } from '@mantine/core';
import { IconFileDatabase } from '@tabler/icons';
import FormCompany from './FormCompany';
import TableEmployee from "./TableEmployee/TableEmployee";

export default function Company(){
    let { idCompany } = useParams();

    return (
        <Tabs defaultValue="company" allowTabDeactivation={true}>
            <Tabs.List>
                <Tabs.Tab value="company" icon={<IconFileDatabase size={14} />}>Empresa</Tabs.Tab>
                <Tabs.Tab value="employee" icon={<IconFileDatabase size={14} />} hidden={!idCompany}>Funcionarios</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="company" pt="xs">
                <FormCompany
                    idCompany={idCompany}
                />
            </Tabs.Panel>
            <Tabs.Panel value="employee" pt="xs">
                <TableEmployee
                    employees={[]}
                />
            </Tabs.Panel>
        </Tabs>
    );
}