using Microsoft.EntityFrameworkCore;
using webapp_Aseos.Models;

namespace webapp_Aseos.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Producto> Productos { get; set; }
    }
}