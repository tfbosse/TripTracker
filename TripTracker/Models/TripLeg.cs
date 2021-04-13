using System;

namespace TripTracker.Models
{
    public class TripLeg
    {
        public DateTime EndDate { get; set; }

        public TripLocation EndLocation { get; set; }

        public double Mileage { get; set; }

        public DateTime StartDate { get; set; }

        public TripLocation StartLocation { get; set; }

        public TripVehicle Vehicle { get; set; }
    }
}
