using System;

namespace DTO
{
    public class DislikeDto
    {
        public int Id { get; set; }
        public Guid ApplicationUserId { get; set; }
        public int CurrentPostId { get; set; }
        public PostDto CurrentPost { get; set; }
        public ApplicationUserDto ApplicationUser { get; set; }
    }
}
