import { useNavigate, useParams } from "react-router-dom";
import { Tabs, Button } from '@mantine/core';
import { IconFileDatabase } from '@tabler/icons';
import FormCompany from './FormCompany';
import TableEmployee from "./TableEmployee/TableEmployee";
import { useEffect, useState } from "react";
import CompanyAPIService from "../../services/CompanyAPIService";
import EmployeeAPIService from "../../services/EmployeeAPIService";

export default function Company(){
    let { idCompany } = useParams();

    const navigate = useNavigate();

    const [company, setCompany] = useState();

    let companyApi = CompanyAPIService.getInstance();
    let employeeApi = EmployeeAPIService.getInstance();

    useEffect(() => {
        LoadData();
    }, []);

    let LoadData = () =>{
        if(!idCompany) return;
        companyApi.getCompany(idCompany, (res)=>{
            setCompany(res);
        });
    }

    let handleEdit = (emp) =>{
        navigate(`/company/${idCompany}/employee/${emp.id}`);
    }

    let handleDelete = (emp) => {
        employeeApi.delete(idCompany, emp.id, () => {
            let temp = company;
            temp.employees.filter((e) => e.id != emp.id);
            setCompany(temp);
        });
    }

    let handleNewEmployee = () => {
        navigate(`/company/${idCompany}/employee`);
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
                <Button onClick={() => handleNewEmployee()}>Novo Funcionário</Button>
                <TableEmployee
                    employees={company?.employes}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Tabs.Panel>
        </Tabs>
    );
}