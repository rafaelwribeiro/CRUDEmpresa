using CompaniesAPI.Infra.Repositories;
using CompaniesAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CompaniesAPI.Api.Controllers;

[ApiController]
[Route("company/{idCompany}/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;
    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll(int idCompany)
    {
        try
        {
            var list = await _employeeService.GetAllAsync(idCompany);
            if(list == null) return NotFound();
            return Ok(list);
        }
        catch(Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
