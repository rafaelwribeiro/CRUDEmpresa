import CompanyAPIService from '../../services/CompanyAPIService.js';
import React, { useState, useEffect } from 'react';
import TableCompany from './TableCompany';
import { Button } from '@mantine/core';
import ModalCompany from './ModalCompany';

export default function Companies(){
    const [companies, setCompanies] = useState([]);
    const [modalCompanyOpened, setModalCompanyOpened] = useState(false);

    let api = CompanyAPIService.getInstance();

    useEffect(() => {
        api.getCompanies((res)=>{
            setCompanies(res.data);
        });
        
    }, []);

    return (
        <>
        <ModalCompany
            opened={modalCompanyOpened}
            onClose={() =>setModalCompanyOpened(false)}
         />
        <section>
            <Button onClick={() => setModalCompanyOpened(true)}>Nova empresa</Button>
            <TableCompany itens={companies} />
        </section>
        </>
    );
}