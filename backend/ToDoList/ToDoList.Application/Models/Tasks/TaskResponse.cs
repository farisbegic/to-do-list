using System;

namespace ToDoList.Application.Models.Tasks
{
    public class TaskResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; set; }
        public string Date { get; set; }
        private TaskResponse()
        {

        }

        public static TaskResponse Create (int id, string name, bool isCompleted, DateTime date)
        {
            return new TaskResponse()
            {
                Id = id,
                Name = name,
                IsCompleted = isCompleted,
                Date = date.ToString("dd/MM/yyyy")
            };
        }
    }
}
