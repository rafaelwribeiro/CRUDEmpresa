import axios from 'axios';
export default class CompanyAPIService{
    _BaseURL = 'https://localhost:7256/';
    static getInstance(){
        return new CompanyAPIService();
    }

    getCompanies(callback){
        axios.get(this._BaseURL+'company')
            .then((res) =>{
                callback(res);
            });
    }

    postCompany(payload, callback){
        axios.post(this._BaseURL+'company', payload)
            .then((res) =>{
                callback(res);
            })
            .catch((err)=>console.log(err));
    }
}