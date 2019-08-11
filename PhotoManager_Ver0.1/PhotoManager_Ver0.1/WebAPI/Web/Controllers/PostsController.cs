using AutoMapper;
using DTO;
using Entities.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NToastNotify;
using Services.Dislikes;
using Services.Likes;
using Services.Posts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Description;
using Utils;

namespace PhotoManager_Ver0._1.Controllers
{
  [EnableCors("MyPolicy")]
  [Route("api/[controller]")]
  [ApiController]
  public class PostsController : ControllerBase
  {
    private readonly IPostService _postService;
    private readonly ILikeService _likeService;
    private readonly IDisLikeService _disLikeService;
    private readonly IHostingEnvironment _hostingEnviroment;
    private readonly IToastNotification _toastNotification;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ILogger<PostsController> _logger;
    private readonly IMapper _mapper;



    public PostsController(IMapper mapper, IHostingEnvironment hostingEnviroment, IHttpContextAccessor httpContextAccessor,
        IPostService postService, IToastNotification toastNotification, ILogger<PostsController> logger, ILikeService likeService, IDisLikeService disLikeService)
    {
      _hostingEnviroment = hostingEnviroment;
      _toastNotification = toastNotification;
      _logger = logger;
      _mapper = mapper;
      _httpContextAccessor = httpContextAccessor;
      _postService = postService;
      _likeService = likeService;
      _disLikeService = disLikeService;
    }

    // GET api/Posts
    [HttpGet]
    public async Task<IEnumerable<PostDto>> GetPosts()
    {
      var postDtoList = await _postService.GetAllPosts();
      postDtoList = postDtoList.OrderByDescending(p => p.PostedDateTime);
      return postDtoList;
    }

    // GET: api/Posts/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPostDetails([FromRoute] int id)
    {
      if (id <= 0)
      {
        return BadRequest();
      }

      var postDto = _postService.GetPostById(id);
      if (postDto == null)
      {
        return NotFound();
      }
      return Ok(postDto);
    }

    // PUT: api/Posts/5
    [HttpPut]
    public async Task<IActionResult> EditPost()
    {
      var httpRequest = _httpContextAccessor.HttpContext.Request;
      var id = int.Parse(httpRequest.Form["Id"]);
      string uniqueFileName = null;

      //Upload Image
      if (httpRequest.Form.Files.Count > 0)
      {
        var file = httpRequest.Form.Files[0];

        if (!FileUploadCheck.CheckImageFormat(file))
        {
          _toastNotification.AddWarningToastMessage("Incorrect format of uploading file!");
          _logger.LogError("User " + User.Identity.Name + " tried to upload not image file!");

          return NotFound();
        }

        if (file.Length > 0 && FileUploadCheck.CheckImageFormat(file))
        {
          string uploadsFolder = Path.Combine(_hostingEnviroment.WebRootPath, "assets");
          uniqueFileName = Guid.NewGuid() + "_" + file.FileName;
          var filePath = Path.Combine(uploadsFolder, uniqueFileName);
          file.CopyTo(new FileStream(filePath, FileMode.Create));
        }
      }

      var postDto = await _postService.GetPostById(id);

      postDto.Title = httpRequest.Form["Title"];
      postDto.Description = httpRequest.Form["Description"];
      if (uniqueFileName != null)
      {
        postDto.ImagePath = uniqueFileName;
      }
      var post = _mapper.Map<Post>(postDto);
      _postService.UpdatePost(post);

      return Ok(post);
    }

    // POST: api/Posts
    [HttpPost, DisableRequestSizeLimit]
    public IActionResult PostCreate()
    {
      var httpRequest = _httpContextAccessor.HttpContext.Request;

      //Upload Image
      var file = httpRequest.Form.Files[0];


      if (file == null)
      {
        _toastNotification.AddErrorToastMessage("Please choose image for upload!");
        _logger.LogError("User " + User.Identity.Name + " tried to create post without image!");
        return NotFound();
      }
      if (!FileUploadCheck.CheckImageFormat(file))
      {
        _toastNotification.AddWarningToastMessage("Incorrect format of uploading file!");
        _logger.LogError("User " + User.Identity.Name + " tried to upload not image file!");

        return NotFound();
      }

      string uniqueFileName = null;
      if (file.Length > 0 && FileUploadCheck.CheckImageFormat(file))
      {
        string uploadsFolder = Path.Combine(_hostingEnviroment.WebRootPath, "images");
        uniqueFileName = Guid.NewGuid() + "_" + file.FileName;
        string filePath = Path.Combine(uploadsFolder, uniqueFileName);
        file.CopyTo(new FileStream(filePath, FileMode.Create));
      }

      var dto = new PostDto
      {
        Title = httpRequest.Form["Title"],
        Description = httpRequest.Form["Description"],
        ImagePath = uniqueFileName,
        AuthorFullName = httpRequest.Form["AuthorFullName"],
        ApplicationUserId = Guid.Parse(httpRequest.Form["ApplicationUserId"])
      };

      _postService.CreatePost(dto);
      return Ok(dto);
    }

    // DELETE: api/Posts/5
    [HttpDelete]
    [Route("{id:int}")]
    [ResponseType(typeof(PostDto))]
    public ActionResult DeletePost(int id)
    {
      var post = _postService.GetPostById(id);
      if (post == null)
      {
        return NotFound();
      }
      _postService.DeletePost(id);
      return Ok(post);
    }

    [HttpPost]
    [Route("Like/{token}/{postId}")]
    public IActionResult LikePost(string token, int postId)
    {
      string referer = Request.Headers["Referer"].ToString();

      var postDto = _postService.GetPostById(postId).Result;
      var userId = JwtDecoder.DecodeTokenToId(token);
      if (postDto.ApplicationUserId == userId)
      {
        return Redirect(referer);

      }

      LikeDto likeDto = new LikeDto
      {
        CurrentPost = postDto,
        ApplicationUserId = userId
      };
      _likeService.CreateLike(likeDto);
      _postService.LikePost(postDto.Id);
      return Ok(postDto);
    }

    [HttpPost]
    [Route("DisLike/{token}/{postId}")]
    public IActionResult DisLikePost(string token, int postId)
    {
      string referer = Request.Headers["Referer"].ToString();

      var postDto = _postService.GetPostById(postId).Result;
      var userId = JwtDecoder.DecodeTokenToId(token);
      if (postDto.ApplicationUserId != userId)
      {
        return Redirect(referer);

      }

      DislikeDto dislikeDto = new DislikeDto
      {
        CurrentPost = postDto,
        ApplicationUserId = userId
      };
      _disLikeService.CreateDisLike(dislikeDto);
      _postService.DislikePost(postDto.Id);
      return Ok(postDto);
    }
  }
}
