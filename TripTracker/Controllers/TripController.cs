using System.Net;

using Microsoft.AspNetCore.Mvc;

using TripTracker.Models;

namespace TripTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripController : ControllerBase
    {
        [HttpPost]
        public ServiceResponse AddTrip(Trip trip)
        {
            return new ServiceResponse
            {
                Code = HttpStatusCode.Created,
                Message = $"Success: {trip.Name}"
            };
        }
    }
}
