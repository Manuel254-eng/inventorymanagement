using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;
namespace WebApplication2.Data
{
    public class InventoryContext : DbContext
    {
        public DbSet<InvetoryItem> InventoryItems { get; set; }

        public InventoryContext(DbContextOptions<InventoryContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Optional: Seed data here if needed
        }
    }
}
