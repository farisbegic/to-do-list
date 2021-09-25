namespace ToDoList.Application.Models.Tasks
{
    public class CreateTaskResponse
    {
        public int Id { get; set; }

        public static CreateTaskResponse Create(int id)
        {
            return new CreateTaskResponse()
            {
                Id = id
            };
        }
    }
}
