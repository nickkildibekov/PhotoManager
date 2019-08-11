using AutoMapper;
using DataAccess.Repositories;
using DTO;
using Entities.Models;
using Services.Posts;

namespace Services.Dislikes
{
    public class DisLikeService : IDisLikeService
    {
        private readonly IRepository<Dislike> _repository;
        private readonly IMapper _mapper;

        public DisLikeService(IRepository<Dislike> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public void CreateDisLike(DislikeDto dislikeDto)
        {
            var dislike = _mapper.Map<Dislike>(dislikeDto);
            _repository.Create(dislike);
        }
    }
}
