using System;
using System.Collections.Generic;

namespace DTO
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public string B64Image { get; set; }
        public DateTime PostedDateTime { get; set; }
        public int Rating { get; set; }
        public string AuthorFullName { get; set; }
        public Guid ApplicationUserId { get; set; }
        public ICollection<LikeDto> Likes { get; set; }
        public ICollection<DislikeDto> DisLikes { get; set; }
        public ApplicationUserDto ApplicationUser { get; set; } 

        public PostDto()
        {
            PostedDateTime = DateTime.Now;
            Likes = new List<LikeDto>();
            DisLikes = new List<DislikeDto>();
        }
    }
}
