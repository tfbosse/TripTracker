using System.ComponentModel.DataAnnotations;

namespace TripTracker.Models
{
    public class TripLocation
    {
        [MaxLength(256)]
        [Required]
        public string City { get; set; }

        public string Name { get; set; }

        [MaxLength(2)]
        [Required]
        public string State { get; set; }
    }
}
