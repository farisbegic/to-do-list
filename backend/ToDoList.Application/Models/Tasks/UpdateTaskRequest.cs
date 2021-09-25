using System;

namespace ToDoList.Application.Models.Tasks
{
    public class UpdateTaskRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; set; }
    }
}
