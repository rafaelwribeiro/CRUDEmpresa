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
}