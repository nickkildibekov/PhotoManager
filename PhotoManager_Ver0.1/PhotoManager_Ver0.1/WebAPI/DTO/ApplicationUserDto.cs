using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace DTO
{
    public class ApplicationUserDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get;set;}
        public string Email { get;set;}
        public string UserName { get;set;}
        public ICollection<LikeDto> Likes { get; set; }
        public ICollection<DislikeDto> Dislikes { get; set; }
        public ICollection<PostDto> Posts { get; set; }
        public IEnumerable<Claim> Claims { get;set; }
    }
}
