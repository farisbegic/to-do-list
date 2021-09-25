using ToDoList.Application.Repositories;
using ToDoList.Domain.Entities;
using ToDoList.Infrastructure.Persistance;
using ToDoList.Infrastructure.Repositories.Base;

namespace ToDoList.Infrastructure.Repositories
{
    public class TaskRepository : Repository<Task>, ITaskRepository
    {
        public TaskRepository(ToDoListDbContext dbContext) : base(dbContext)
        {
        }
    }
}
