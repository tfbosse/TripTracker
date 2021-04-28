using System.Net;

namespace TripTracker.Models
{
    public class ServiceResponse
    {
        public HttpStatusCode Code { get; set; }

        public string Message { get; set; }

        public object Result { get; set; }
    }
}
