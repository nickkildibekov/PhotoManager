using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace Services.Users
{
    public interface IUserService
    {
        Task<IEnumerable<ApplicationUserDto>> GetAllUsers();
        Task<ApplicationUserDto> GetUserById(Guid userId);
        void CreateUser(ApplicationUserDto dto);
        void UpdateUser(ApplicationUserDto dto);
        void DeleteUser(ApplicationUserDto dto);
    }
}
