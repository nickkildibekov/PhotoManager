using DTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DataAccess.Repositories;
using Entities.Models;

namespace Services.Users
{
    public class UserService : IUserService
    {
        private readonly IRepository<ApplicationUser> _repository;
        private readonly IMapper _mapper;
        public UserService(IRepository<ApplicationUser> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<ApplicationUserDto>> GetAllUsers()
        {
            var users = await _repository.GetListAsync();
            var udto = _mapper.Map<List<ApplicationUserDto>>(users);
            return udto;
        }

        public async Task<ApplicationUserDto> GetUserById(Guid userId)
        {
            var applicationUser =  await _repository.GetAsync(userId);
            return _mapper.Map<ApplicationUserDto>(applicationUser);
        }

        public void CreateUser(ApplicationUserDto dto)
        {
           var applicationUser = _mapper.Map<ApplicationUser>(dto);
            _repository.Create(applicationUser);
        }

        public void UpdateUser(ApplicationUserDto dto)
        {
            var applicationUser = _mapper.Map<ApplicationUser>(dto);
            _repository.Update(applicationUser );
        }

        public void DeleteUser(ApplicationUserDto dto)
        {
             var applicationUser = _mapper.Map<ApplicationUser>(dto);
            _repository.Delete(applicationUser);
        }
    }
}
