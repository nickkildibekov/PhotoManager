using AutoMapper;
using DataAccess.Repositories;
using DTO;
using Entities.Models;

namespace Services.Likes
{
    public class LikeService : ILikeService
    {
        private readonly IRepository<Like> _repository;
        private readonly IMapper _mapper;

        public LikeService(IRepository<Like> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public void CreateLike(LikeDto likeDto)
        {
            var like = _mapper.Map<Like>(likeDto);
            _repository.Create(like);
        }
    }
}
