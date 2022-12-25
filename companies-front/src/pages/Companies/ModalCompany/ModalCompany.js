import { Modal, TextInput, Divider , Button, Group, Box  } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import ViaCEPAPIService from '../../../services/ViaCEPAPIService.js';
import CompanyAPIService from '../../../services/CompanyAPIService.js';

export default function ModalCompany({opened, onClose}){
    const [zipCodeFind, setZipCodeFind] = useState('');
    const form = useForm({
        initialValues: {
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
        },
    
        validate: {
          name: (value) => {
                if(value.length > 200)
                    return 'Nome deve possuir menos de 200 caracteres';
                if(value.length <= 0)
                    return 'Nome é obrigatorio';
                return null;
            },
        },
      });

    let zipCodeAPI = ViaCEPAPIService.getInstance();
    let companyApi = CompanyAPIService.getInstance();

    let getAddresByZipCode = () => {
        let zipCode = form.values.address.zipCode.trim().replace(/\D/g, "");;

        if(zipCode.length != 8)
            return;

        if(zipCodeFind == zipCode)
            return;
        
        console.log('busca cep', zipCode);
        
        zipCodeAPI.findCep(zipCode, (res) => {
            form.values.address.street = res.street;
            form.values.address.neighborhood = res.neighborhood;
            form.values.address.city = res.city;
            form.values.address.state = res.state;
            setZipCodeFind(zipCode);
        });
            
    }

    let handleSubmit = (values) => {
        companyApi.postCompany(values, ()=>alert('sucesso'));
    }

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Cadastrar nova empresa"
        >
            <Box sx={{ maxWidth: 600 }} mx="auto">
                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <TextInput
                        withAsterisk
                        label="Nome"
                        placeholder="Nome"
                        {...form.getInputProps('name')}
                    />

                    <TextInput
                        withAsterisk
                        label="Telefone"
                        placeholder="(99) 9 9999-9999"
                        {...form.getInputProps('phone')}
                    />

                    <Divider my="sm" />

                    
                    <TextInput
                        withAsterisk
                        label="CEP"
                        placeholder="00000-000"
                        {...form.getInputProps('address.zipCode')}
                        onBlur={() => getAddresByZipCode()}
                    />
                    
                    <TextInput
                        withAsterisk
                        label="Logradouro"
                        placeholder="Rua ..."
                        {...form.getInputProps('address.street')}
                    />

                    <TextInput
                        withAsterisk
                        label="Número"
                        placeholder="000"
                        {...form.getInputProps('address.number')}
                        size="sm"
                    />

                    <TextInput
                        withAsterisk
                        label="Bairro"
                        placeholder=""
                        {...form.getInputProps('address.neighborhood')}
                    />

                    <TextInput
                        withAsterisk
                        label="Cidade"
                        placeholder=""
                        {...form.getInputProps('address.city')}
                    />

                    <TextInput
                        withAsterisk
                        label="Estado"
                        placeholder=""
                        {...form.getInputProps('address.state')}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">Gravar</Button>
                    </Group>
                    
                </form>
            </Box>
        </Modal>
    );
}