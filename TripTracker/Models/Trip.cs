using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TripTracker.Models
{
    public class Trip
    {
        public List<TripLeg> Legs { get; set; }

        [MaxLength(256)]
        [Required]
        public string Name { get; set; }
    }
}
