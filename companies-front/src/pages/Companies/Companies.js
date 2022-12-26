import CompanyAPIService from '../../services/CompanyAPIService.js';
import React, { useState, useEffect } from 'react';
import TableCompany from './TableCompany';
import { Button } from '@mantine/core';
import ModalCompany from './ModalCompany';
import { redirect, useNavigate } from 'react-router-dom';

export default function Companies(){
    const [companies, setCompanies] = useState([]);
    const [modalCompanyOpened, setModalCompanyOpened] = useState(false);
    const [company, setCompany] = useState({
        id: '',
        name: '',
        phone: '',
        address: {
            zipCode: '',
            street: '',
            number: '',
            neighborhood: '',
            city: '',
            state: ''
        }
    });
    const navigate = useNavigate();
    

    let api = CompanyAPIService.getInstance();

    useEffect(() => {
        loadData();
        
    }, []);

    let loadData = () =>{
        api.getCompanies((res)=>{
            setCompanies(res.data);
        });
    }

    let onSuccess = () => {
        setModalCompanyOpened(false);
        alert('Sucesso!');
        loadData();
    }

    let handleEdit = (data) => {
        navigate('/company/'+data.id);
        //setCompany(data);
        //setModalCompanyOpened(true);
    }

    let handleNewCompany = () => {
        setCompany(
            {
                id: '',
                name: '',
                phone: '',
                address: {
                    zipCode: '',
                    street: '',
                    number: '',
                    neighborhood: '',
                    city: '',
                    state: ''
                }
            }
        );
        setModalCompanyOpened(true);
    }

    return (
        <>
        <ModalCompany
            company={company}
            opened={modalCompanyOpened}
            onClose={() =>setModalCompanyOpened(false)}
            onSuccess={onSuccess}
         />
        <section>
            <Button onClick={() => handleNewCompany()}>Nova empresa</Button>
            <TableCompany
                itens={companies}
                handleEdit={handleEdit} />
        </section>
        </>
    );
}