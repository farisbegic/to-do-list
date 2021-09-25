using ToDoList.Domain.Entities;
using ToDoList.Application.Repositories.Base;

namespace ToDoList.Application.Repositories
{
    public interface ITaskRepository : IRepository<Task>
    {
    }
}
