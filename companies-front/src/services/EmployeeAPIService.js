import axios from 'axios';

export default class EmployeeAPIService{
    icCompany = 0;
    _BaseURL = 'https://localhost:7256/company/';
    static getInstance(icCompany){
        console.log(icCompany);
        return new EmployeeAPIService(icCompany);
    }

    constructor(icCompany){
        console.log('constructor ', icCompany);
        this.icCompany = icCompany;
    }

    create(idCompany, payload, callback){
        axios.post(this._BaseURL+`${idCompany}/employee`, payload)
            .then((res) => {
                callback(res);
            })
            .catch((err) => console.log(err));
    }

    update(idCompany, payload, callback){
        axios.put(this._BaseURL+`${idCompany}/employee`, payload)
            .then((res) => {
                callback(res);
            })
            .catch((err) => console.log(err));
    }

}