import axios from 'axios';

export default class ViaCEPAPIService{
    static getInstance(){
        return new ViaCEPAPIService();
    }

    findCep(cep, callback){
        cep = cep.trim().replace(/\D/g, "");
        if(cep=='')
            cep = '0000000';
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) =>{
                let data = res.data;
                let address = {};
                if(data.erro){
                    address = {
                        zipCode: '',
                        street: '',
                        neighborhood: '',
                        city: '',
                        state: '',
                    };
                } else {
                    address = {
                        zipCode: data.cep ?? '',
                        street: data.logradouro ?? '',
                        neighborhood: data.bairro ?? '',
                        city: data.localidade ?? '',
                        state: data.uf ?? ''
                    };
                }
                callback(address);
            });
    }
}