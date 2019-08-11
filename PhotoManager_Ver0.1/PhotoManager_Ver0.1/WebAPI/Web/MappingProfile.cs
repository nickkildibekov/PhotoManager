using AutoMapper;
using DTO;
using Entities.Models;


namespace PhotoManager_Ver0._1
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Like, LikeDto>().MaxDepth(1).ReverseMap().MaxDepth(1);
            CreateMap<Dislike, DislikeDto>().MaxDepth(1).ReverseMap().MaxDepth(1);

            CreateMap<ApplicationUser, ApplicationUserDto>().MaxDepth(1).ReverseMap().MaxDepth(1);

            CreateMap<Post, PostDto>().MaxDepth(1).ReverseMap().MaxDepth(1);
           
        }
    }
}
