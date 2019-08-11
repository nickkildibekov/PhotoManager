using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.DbContext;

namespace DataAccess.Repositories
{
    public class BaseRepository<T> : IRepository<T> where T : class
    {
        protected ApplicationDbContext DataContext { get; }
        protected DbSet<T> Set => DataContext.Set<T>();
        public BaseRepository(ApplicationDbContext dataContextItem)
        {
            DataContext = dataContextItem;
        }

        #region CRUD Operations
        public void Create(T item)
        {
            if (item == null) return;
            Set.Add(item);
            Save();
        }

        public void Update(T item)
        {
            Set.Update(item);
            Save();
        }

        public void Delete(T item)
        {
            Set.Remove(item);
            Save();
        }

        public async Task<T> GetAsync(object id)
        {
            return await Set.FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetListAsync()
        {
            return await Set.ToListAsync();
        }

        public void Save()
        {
            DataContext.SaveChanges();
        }
        #endregion
              
        public void Dispose()
        {
            DataContext?.Dispose();
        }
    }
}
