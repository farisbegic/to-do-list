using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Application.Models.Tasks;
using ToDoList.Application.Repositories;

namespace ToDoList.Application.Services.Tasks
{
    public class TaskService : ITaskService
    {
        public readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<TaskResponse> CreateAsync(CreateTaskRequest request)
        {
            var task = Domain.Entities.Task.Create(request.Name);

            var newTask = await _taskRepository.AddAsync(task);

            var response = TaskResponse.Create(newTask.Id, newTask.Name, newTask.IsCompleted, newTask.Date);

            return response;
        }

        public async Task<DeleteTaskResponse> DeleteAsync(int id)
        {
            var task = await _taskRepository.GetByIdAsync(id);

            if (task == null)
            {
                throw new ArgumentNullException($"Task with {id} does not exist");
            }

            await _taskRepository.DeleteAsync(task);

            var response = DeleteTaskResponse.Create(id);

            return response;
        }

        public async Task<IList<TaskResponse>> GetAsync()
        {
            var tasks = await _taskRepository.GetAllAsync();

            var response = tasks.Select(t => TaskResponse.Create(t.Id, t.Name, t.IsCompleted, t.Date)).ToList();

            return response;
        }

        public async Task<TaskResponse> GetAsync(int id)
        {
            var task = await _taskRepository.GetByIdAsync(id);

            if (task == null)
            {
                throw new ArgumentNullException($"Task with {id} does not exist");
            }

            var response = TaskResponse.Create(task.Id, task.Name, task.IsCompleted, task.Date);

            return response;
        }

        public async Task<TaskResponse> UpdateAsync(int id, UpdateTaskRequest request)
        {
            if (id != request.Id)
            {
                throw new ArgumentException($"Task IDs do not match.");
            }

            var task = await _taskRepository.GetByIdAsync(id);

            if (task == null)
            {
                throw new ArgumentNullException($"Task with {id} does not exist");
            }

            task.Update(request.IsCompleted);

            await _taskRepository.UpdateAsync(task);

            var response = TaskResponse.Create(task.Id, task.Name, task.IsCompleted, task.Date);

            return response;
        }
    }
}
