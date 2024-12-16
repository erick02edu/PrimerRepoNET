using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("getUser")]
        public List<User> getUser() {

            List<User> users = new List<User>{
                new User{
                    id=1,
                    name="Erick",
                    email="erick@gmail.com",
                    age=22,
                    password="hello2"
                },
                new User{
                    id=2,
                    name="Laura",
                    email="laura@gmail.com",
                    age=23,
                    password="hello2"
                }
            };

            return users;
        }
    }
}
