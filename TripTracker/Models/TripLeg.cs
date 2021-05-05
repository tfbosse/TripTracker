using System;
using System.ComponentModel.DataAnnotations;

namespace TripTracker.Models
{
    public class TripLeg
    {
        public DateTime EndDate { get; set; }

        public TripLocation EndLocation { get; set; }

        public double Mileage { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public TripLocation StartLocation { get; set; }

        [Required]
        public int TripId { get; set; }

        public TripVehicle Vehicle { get; set; }
    }
}
