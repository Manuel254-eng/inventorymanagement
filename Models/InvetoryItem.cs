using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class InvetoryItem
    {
        [Key]
        public int ItemId { get; set; } // Primary Key
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }


    }
}
