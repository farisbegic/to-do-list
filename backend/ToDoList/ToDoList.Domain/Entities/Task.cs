using System;

namespace ToDoList.Domain.Entities
{
    public class Task
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public bool IsCompleted { get; private set; } = false;
        public DateTime Date { get; private set; } = DateTime.Now;

        private Task()
        {

        }

        public static Task Create(string name)
        {
            return new Task()
            {
                Name = name
            };
        }

        public void Update(string name, bool isCompleted)
        {
            Name = name;
            IsCompleted = isCompleted;
        }
    }
}
