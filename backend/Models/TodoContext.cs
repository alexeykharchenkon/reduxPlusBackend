using Microsoft.EntityFrameworkCore;

namespace ReduxWithBackend.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<TodoItem> TodoItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>().HasData( new TodoItem [] {
                new TodoItem { Id = 1, Title = "Buy Bread", IsComplete = false },
                new TodoItem { Id = 2, Title = "Buy Milk", IsComplete = false },
                new TodoItem { Id = 3, Title = "Buy Beer", IsComplete = false },
                }
            );
        }
    }
}
