using CompaniesAPI.Api.Contracts;
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

    [HttpGet]
    [Route("{id}", Name = "EmployeeDetails")]
    public async Task<IActionResult> Get(int idCompany, int id)
    {
        try
        {
            var employee = await _employeeService.GetAsync(idCompany, id);
            if (employee == null) return NotFound();
            return Ok(employee);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post(int idCompany, [FromBody] EmployeeCreateContract contract)
    {
        try
        {
            var employee = await _employeeService.CreateAsync(idCompany, contract);
            return CreatedAtRoute("EmployeeDetails", new { idCompany = idCompany, id = employee.Id }, employee);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Put(int idCompany, EmployeeUpdateContract contract)
    {
        try
        {
            var employee = await _employeeService.GetAsync(idCompany, contract.Id);
            if (employee == null) return NotFound();
            await _employeeService.UpdateAsync(idCompany, contract);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> Delete(int idCompany, int id)
    {
        try
        {
            var employee = await _employeeService.GetAsync(idCompany, id);
            if (employee == null) return NotFound();
            await _employeeService.DeleteAsync(idCompany, id);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
