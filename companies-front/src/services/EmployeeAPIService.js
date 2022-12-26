import axios from 'axios';

export default class EmployeeAPIService{

    _BaseURL = 'https://localhost:7256/company/';

    _instance;

    static getInstance(){
        if(!this._instance)
            this._instance = new EmployeeAPIService();
        return this._instance;
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

    get(idCompany, idEmployee, callback){
        axios.get(this._BaseURL+`${idCompany}/employee/${idEmployee}`)
            .then((res) => {
                callback(res.data);
            })
            .catch((err) => console.log(err));           
    }

    delete(idCompany, idEmployee, callback){
        axios.delete(this._BaseURL+`${idCompany}/employee/${idEmployee}`)
            .then((res) => {
                callback(res.data);
            })
            .catch((err) => console.log(err));           
    }

}