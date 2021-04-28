using Microsoft.Extensions.Configuration;

namespace TripTracker.Utilities
{
    public static class DatabaseUtilities
    {
        public static string GetConnectionString(IConfiguration configuration)
        {
            return configuration.GetSection("ConnectionStrings").GetSection("TripTracker").Value.ToString();
        }
    }
}
