using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CompaniesAPI.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class CompanyController : ControllerBase
{
    private readonly ICompanyService _companyService;

    public CompanyController(ICompanyService companyService)
    {
        _companyService = companyService;
    }

    public async Task<IActionResult> AddCompany(CompanyCreateContract contract)
    {
        try
        {
            _companyService.Add(contract);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
