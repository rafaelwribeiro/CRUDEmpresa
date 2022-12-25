import CompanyApiServce from '../../services/CompanyAPIService.js';
import React, { useState, useEffect } from 'react';
import TableCompany from './TableCompany';

export default function Companies(){
    const [companies, setCompanies] = useState([]);

    let api = CompanyApiServce.getInstance();

    

    useEffect(() => {
        api.getCompanies((res)=>{
            console.log('bora: ', res.data);
            setCompanies(res.data);
        });
        
    }, []);

    return (
        <div>
            <TableCompany itens={companies} />
        </div>
    );
}