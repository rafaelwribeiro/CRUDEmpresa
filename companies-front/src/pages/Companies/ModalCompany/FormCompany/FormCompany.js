import { TextInput, Divider , Button, Group, Box } from '@mantine/core';
import { useState, useEffect } from 'react';
import ViaCEPAPIService from '../../../../services/ViaCEPAPIService.js';
import CompanyAPIService from '../../../../services/CompanyAPIService.js';

export default function FormCompany({company, onSuccess}){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [zipCodeFind, setZipCodeFind] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [complement, setComplement] = useState('');
    
    

    useEffect(
        ()=>{
            setId(company.id ?? '');
            setName(company.name);
            setPhone(company.phone);
            setZipCode(company?.address?.zipCode ?? '');
            setStreet(company?.address?.street ?? '');
            setNumber(company?.address?.number ?? '');
            setNeighborhood(company?.address?.neighborhood ?? '');
            setCity(company?.address?.city ?? '');
            setState(company?.address?.state ?? '');
            setComplement(company?.address?.complement ?? '');
        }, [company]
    );

    let zipCodeAPI = ViaCEPAPIService.getInstance();
    let companyApi = CompanyAPIService.getInstance();

    let getAddresByZipCode = () => {
        let _zipCode = zipCode.trim().replace(/\D/g, "");;

        if(_zipCode.length != 8)
            return;

        if(zipCodeFind == _zipCode)
            return;
        
        console.log('busca cep', _zipCode);
        
        zipCodeAPI.findCep(zipCode,
            (res) => {
                console.log('ué', res);
                setStreet(res.street);
                setNeighborhood(res.neighborhood);
                setCity(res.city);
                setState(res.state);
                setZipCodeFind(_zipCode);
            }
        );
            
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        
        let newCompany = {
            name: name,
            phone: phone,
            address: {
                zipCode: zipCode,
                street: street,
                number: number,
                neighborhood: neighborhood,
                city: city,
                state: state,
                complement: complement
            }
        };
        if(id != ''){
            newCompany = {...newCompany, id: id};
            companyApi.putCompany(newCompany, ()=> {
                onSuccess();
            });
        } else {
            companyApi.postCompany(newCompany, ()=> {
                onSuccess();
            });
        }
    }
    return (
        <Box sx={{ maxWidth: 600 }} mx="auto">
            <form onSubmit={(values) => handleSubmit(values)}>
                <TextInput
                    withAsterisk
                    label="Nome"
                    placeholder="Nome"
                    value={name}
                    onChange={evt => setName(evt.target.value)}
                />

                <TextInput
                    withAsterisk
                    label="Telefone"
                    placeholder="(99) 9 9999-9999"
                    value={phone}
                    onChange={evt => setPhone(evt.target.value)}
                />

                <Divider my="sm" />

                
                <TextInput
                    withAsterisk
                    label="CEP"
                    placeholder="00000-000"
                    onBlur={() => getAddresByZipCode()}
                    value={zipCode}
                    onChange={evt => setZipCode(evt.target.value)}
                />
                
                <TextInput
                    withAsterisk
                    label="Logradouro"
                    placeholder="Rua ..."
                    value={street}
                    onChange={evt => setStreet(evt.target.value)}
                />

                <TextInput
                    withAsterisk
                    label="Número"
                    placeholder="000"
                    size="sm"
                    value={number}
                    onChange={evt => setNumber(evt.target.value)}
                />

                <TextInput
                    withAsterisk
                    label="Bairro"
                    placeholder=""
                    value={neighborhood}
                    onChange={evt => setNeighborhood(evt.target.value)}
                />

                <TextInput
                    withAsterisk
                    label="Cidade"
                    placeholder=""
                    value={city}
                    onChange={evt => setCity(evt.target.value)}
                />

                <TextInput
                    withAsterisk
                    label="Estado"
                    placeholder=""
                    value={state}
                    onChange={evt => setState(evt.target.value)}
                />

                <TextInput
                    withAsterisk
                    label="Complemento"
                    placeholder=""
                    value={complement}
                    onChange={evt => setComplement(evt.target.value)}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Gravar</Button>
                </Group>
            </form>
        </Box>
    );
}