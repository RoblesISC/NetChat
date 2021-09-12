using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : MyBaseController
    {
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<UserDTO>> SignIn(SignIn.Query query)
        {
            return await Mediator.Send(query);
        }
    }
}