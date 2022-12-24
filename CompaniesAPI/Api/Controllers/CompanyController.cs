using CompaniesAPI.Api.Contracts;
using CompaniesAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

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

    [HttpGet]
    [Route("{id}", Name = "CompanyDetails")]
    public async Task<IActionResult> Get(int id)
    {
        try
        {
            var company = await _companyService.GetAsync(id);
            if (company == null)
                return NotFound();
            return Ok(company);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        try
        {
            var list = await _companyService.GetAllAsync();
            if (list == null)
                return NotFound();
            return Ok(list);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> AddCompany([FromBody] CompanyCreateContract contract)
    {
        try
        {
            var newCompany = await _companyService.AddAsync(contract);
            return CreatedAtRoute("CompanyDetails", new { id = newCompany.Id }, newCompany);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            var company = await _companyService.GetAsync(id);
            if(company== null) return NotFound();
            await _companyService.Delete(company.Id);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Update(CompanyUpdateContract contract)
    {
        try
        {
            var company = await _companyService.GetAsync(contract.Id);
            if (company == null) return NotFound();
            await _companyService.UpdateAsync(contract);
            return NoContent();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
