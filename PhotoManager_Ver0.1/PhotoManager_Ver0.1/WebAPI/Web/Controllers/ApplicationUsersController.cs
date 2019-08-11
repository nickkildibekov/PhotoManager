using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using AutoMapper;
using DataAccess.DbContext;
using DTO;
using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Identity.UI.V3.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Services.Users;
using Utils;

namespace PhotoManager_Ver0._1.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ApplicationUsersController : ControllerBase
  {
    private readonly IUserService _userService;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ILogger<ApplicationUser> _logger;
    private readonly IEmailSender _emailSender;
    private readonly ApplicationsSettings _appsetings;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IMapper _mapper;


    public ApplicationUsersController(IUserService userService,
        SignInManager<ApplicationUser> signInManager,
        UserManager<ApplicationUser> userManager,
        ILogger<ApplicationUser> logger,
        IEmailSender emailSender,
        IOptions<ApplicationsSettings> appSettings,
        IHttpContextAccessor httpContextAccessor, IMapper mapper)
    {
      _userService = userService;
      _signInManager = signInManager;
      _userManager = userManager;
      _emailSender = emailSender;
      _logger = logger;
      _appsetings = appSettings.Value;
      _httpContextAccessor = httpContextAccessor;
      _mapper = mapper;
    }

    // GET: api/ApplicationUsers
    [HttpGet]
    public async Task<IEnumerable<ApplicationUserDto>> GetUsers()
    {
      var appUserDtos = await _userService.GetAllUsers();
      return appUserDtos;
    }

    // GET: api/ApplicationUsers/5
    [HttpGet("{id}")]
    public async Task<ApplicationUserDto> GetApplicationUser(Guid id)
    {
      var applicationUserDto = await _userService.GetUserById(id);
      return applicationUserDto;
    }

    [HttpGet]
    [Route("UserProfile/{id}")]
    //GET : /api/ApplicationUsers/UserProfile
    public async Task<object> GetUserProfile(string id)
    {
      var user = await _userService.GetUserById(Guid.Parse(id));
      return new
      {
        user.FirstName,
        user.LastName,
      };
    }

    // PUT: api/ApplicationUsers/5
    [HttpPut("{id}")]
    public IActionResult PutApplicationUser(Guid id, ApplicationUserDto applicationUserDto)
    {
      if (id != applicationUserDto.Id)
      {
        return BadRequest();
      }

      _userService.UpdateUser(applicationUserDto);

      return Ok(applicationUserDto);
    }

    // POST: api/ApplicationUsers
    [HttpPost]
    [Route("Register")]
    public async Task<object> PostApplicationUser(ApplicationUserDto model)
    {
      var userDto = new ApplicationUserDto()
      {
        FirstName = model.FirstName,
        LastName = model.LastName,
        PhoneNumber = model.PhoneNumber,
        UserName = model.Email,
        Email = model.Email
      };

      var user = _mapper.Map<ApplicationUser>(userDto);

      try
      {
        var result = await _userManager.CreateAsync(user, model.Password);
        return Ok(result);
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        throw;
      }
    }

    [HttpPost]
    [Route("Login")]
    // POST: api/ApplicationUsers/Login
    public async Task<IActionResult> Login()
    {
      // This doesn't count login failures towards account lockout
      // To enable password failures to trigger account lockout, set lockoutOnFailure: true
      var httpRequest = _httpContextAccessor.HttpContext.Request;

      var model = new UserLoginDto()
      {
        Email = httpRequest.Form["Email"],
        Password = httpRequest.Form["Password"]
      };

      var user = await _userManager.FindByEmailAsync(model.Email);
      if (user == null || !await _userManager.CheckPasswordAsync(user, model.Password))
      {
        return BadRequest(new { message = "Email or password is incorrect." });
      }

      _logger.LogInformation("User" + model.Email + " logged in.");
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
          {
                    new Claim("UserID", user.Id.ToString()),
            }),
        Expires = DateTime.UtcNow.AddMinutes(10),
        SigningCredentials = new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appsetings.JWT_Secret)),
              SecurityAlgorithms.HmacSha256Signature)
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var securityToken = tokenHandler.CreateToken(tokenDescriptor);
      var token = tokenHandler.WriteToken(securityToken);
      var userFName = user.FirstName;
      var userLName = user.LastName;

      return Ok(new { token, userFName, userLName });
    }

    // DELETE: api/ApplicationUsers/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<ApplicationUserDto>> DeleteApplicationUser(Guid id)
    {
      var applicationUserDto = await _userService.GetUserById(id);
      if (applicationUserDto == null)
      {
        return NotFound();
      }

      _userService.DeleteUser(applicationUserDto);

      return Ok(applicationUserDto);
    }

    private bool ApplicationUserExists(Guid id)
    {
      return  _userService.GetUserById(id).Result != null;
    }

    [HttpPost]
    [Route("CheckEmail")]
    // POST: api/ApplicationUsers/Login
    public async Task<bool> EmailExists()
    {
      var httpRequest = _httpContextAccessor.HttpContext.Request;
      string email = httpRequest.Form["Email"];
      var user = await _userManager.FindByEmailAsync(email);
      return user != null;
    }
  }
}
