using DTO;
using Entities.Models;

namespace Services.Likes
{
    public interface ILikeService
    {
        void CreateLike(LikeDto likeDto);
    }
}
