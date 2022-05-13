using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoList.Application.Models.Tasks;

namespace ToDoList.Application.Services.Tasks
{
    public interface ITaskService
    {
        public Task<TaskResponse> CreateAsync(CreateTaskRequest request);
        public Task<IList<TaskResponse>> GetAsync();
        public Task<TaskResponse> GetAsync(int id);
        public Task<bool> UpdateAsync(int id, UpdateTaskRequest request);
        public Task<bool> DeleteAsync(int id);
    }
}
