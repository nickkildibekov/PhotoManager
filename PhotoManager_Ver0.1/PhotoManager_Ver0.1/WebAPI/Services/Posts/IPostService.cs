using System.Collections.Generic;
using System.Threading.Tasks;
using DTO;
using Entities.Models;

namespace Services.Posts
{
    public interface IPostService
    {
        Task<IEnumerable<PostDto>> GetAllPosts();
        Task<PostDto> GetPostById(int postId);
        int CreatePost(PostDto dto);
        void UpdatePost(Post post);
        void DeletePost(int id);
        void LikePost(int id);
        void DislikePost(int id);
        bool PostExists(int id);
    }
}
