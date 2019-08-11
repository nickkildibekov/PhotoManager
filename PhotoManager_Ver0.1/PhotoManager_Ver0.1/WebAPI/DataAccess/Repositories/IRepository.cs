using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public interface IRepository<T> : IDisposable where T : class
    {
        Task<IEnumerable<T>> GetListAsync();
        Task<T> GetAsync(object id);
        void Create(T item);
        void Update(T item);
        void Delete(T item);
        void Save();
    }
}
