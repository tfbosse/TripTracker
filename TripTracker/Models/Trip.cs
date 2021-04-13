using System.Collections.Generic;

namespace TripTracker.Models
{
    public class Trip
    {
        public List<TripLeg> Legs { get; set; }

        public string Name { get; set; }
    }
}
