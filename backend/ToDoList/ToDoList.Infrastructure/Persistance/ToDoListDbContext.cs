using Microsoft.EntityFrameworkCore;
using ToDoList.Domain.Entities;

namespace ToDoList.Infrastructure.Persistance
{
    public class ToDoListDbContext : DbContext
    {
        public ToDoListDbContext(DbContextOptions<ToDoListDbContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }
    }
}
