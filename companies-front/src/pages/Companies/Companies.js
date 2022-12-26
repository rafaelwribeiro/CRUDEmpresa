import CompanyAPIService from '../../services/CompanyAPIService.js';
import React, { useState, useEffect } from 'react';
import TableCompany from './TableCompany';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import EmployeeAPIService from '../../services/EmployeeAPIService.js';

export default function Companies(){
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    

    let api = CompanyAPIService.getInstance();
    let employeeApi = EmployeeAPIService.getInstance();

    useEffect(() => {
        loadData();
        
    }, []);

    let loadData = () =>{
        api.getCompanies((res)=>{
            console.log(res);
            setCompanies(res.data);
        });
    }

    let handleEdit = (data) => {
        navigate('/company/'+data.id);
    }

    let handleDelete = (data) => {
        employeeApi.delete(data.id, () =>{
            loadData();
        });
    }

    let handleNewCompany = () => {
        navigate('/company');
    }

    return (
        <>
        <section>
            <Button onClick={() => handleNewCompany()}>Nova empresa</Button>
            <TableCompany
                itens={companies}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </section>
        </>
    );
}