import { useParams } from "react-router-dom";
import { Tabs } from '@mantine/core';
import { IconFileDatabase } from '@tabler/icons';
import FormCompany from './FormCompany';
import TableEmployee from "./TableEmployee/TableEmployee";
import { useEffect, useState } from "react";
import CompanyAPIService from "../../services/CompanyAPIService";

export default function Company(){
    let { idCompany } = useParams();

    const [company, setCompany] = useState();

    let companyApi = CompanyAPIService.getInstance();

    useEffect(() => {
        LoadData();
    }, []);

    let LoadData = () =>{
        if(!idCompany) return;
        companyApi.getCompany(idCompany, (res)=>{
            setCompany(res);
        });
    }

    return (
        <Tabs defaultValue="company" allowTabDeactivation={true}>
            <Tabs.List>
                <Tabs.Tab value="company" icon={<IconFileDatabase size={14} />}>Empresa</Tabs.Tab>
                <Tabs.Tab value="employee" icon={<IconFileDatabase size={14} />} hidden={!idCompany}>Funcionarios</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="company" pt="xs">
                <FormCompany
                    company={company}
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