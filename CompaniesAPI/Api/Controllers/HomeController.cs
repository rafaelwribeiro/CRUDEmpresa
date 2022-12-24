using Microsoft.AspNetCore.Mvc;

namespace CompaniesAPI.Api.Controllers
{

    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        public async Task<IActionResult> Home()
        {
            return Ok("teste");
        }
    }
}
