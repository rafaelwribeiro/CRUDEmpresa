import axios from 'axios';
export default class CompanyAPIService{
    _BaseURL = 'https://localhost:7256/';
    static getInstance(){
        return new CompanyAPIService();
    }

    getCompanies(){
        let companies = [];
        axios.get(this._BaseURL+'company')
            .then((res) => {
                console.log(res);
                companies = res.data;
            });
        return companies;
    }
}