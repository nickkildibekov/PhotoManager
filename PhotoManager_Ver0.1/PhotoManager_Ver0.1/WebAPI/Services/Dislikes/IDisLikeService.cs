using DTO;
using Entities.Models;

namespace Services.Dislikes
{
    public interface IDisLikeService
    {
        void CreateDisLike(DislikeDto dislikeDto);
    }
}
