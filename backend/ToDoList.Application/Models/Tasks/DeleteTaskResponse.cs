namespace ToDoList.Application.Models.Tasks
{
    public class DeleteTaskResponse
    {
        public int Id { get; set; }

        public static DeleteTaskResponse Create(int id)
        {
            return new DeleteTaskResponse()
            {
                Id = id
            };
        }
    }
}
