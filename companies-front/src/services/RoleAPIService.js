import axios from 'axios';

export default class RoleAPIService{
    _BaseURL = 'https://localhost:7256/role';
    static getInstance(){
        return new RoleAPIService();
    }

    getRoles(callback){
        axios.get(this._BaseURL)
            .then((res) =>{
                callback(res.data);
            });
    }

}