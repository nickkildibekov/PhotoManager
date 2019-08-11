using AutoMapper;
using DataAccess.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
using DTO;
using Entities.Models;

namespace Services.Posts
{
    public class PostService : IPostService
    {
        private readonly IRepository<Post> _repository;
        private readonly IMapper _mapper;

        public PostService(IRepository<Post> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public int CreatePost(PostDto dto)
        {
            var post = _mapper.Map<Post>(dto);
            _repository.Create(post);
            return post.Id;
        }

        public void DeletePost(int id)
        {
            var post = _repository.GetAsync(id).Result;
            _repository.Delete(post);
        }

        public async Task<IEnumerable<PostDto>> GetAllPosts()
        {
            var posts = await _repository.GetListAsync();
            var pdto = _mapper.Map<List<PostDto>>(posts);
            return pdto;
        }

        public async Task<PostDto> GetPostById(int postId)
        {
            var post = await _repository.GetAsync(postId);
            var postDto = _mapper.Map<PostDto>(post);
            return (postDto);
        }

        public void UpdatePost(Post post)
        {
            _repository.Update(post);
        }
        public void LikePost(int id)
        {
            var post = _repository.GetAsync(id).Result;
            post.Rating++;
            _repository.Update(post);
        }

        public void DislikePost(int id)
        {
            var post = _repository.GetAsync(id).Result;
            post.Rating--;
            _repository.Update(post);
        }

        public bool PostExists(int id)
        {
            return _repository.GetAsync(id).Result != null;
        }
    }
}
