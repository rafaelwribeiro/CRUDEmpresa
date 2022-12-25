import CompanyApiServce from '../../services/CompanyAPIService.js';

export default function Companies(){
    let api = CompanyApiServce.getInstance();

    return (
        <div>
            {api.getCompanies()}
        </div>
    );
}