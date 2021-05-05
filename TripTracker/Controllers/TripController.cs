using System.Data;
using System.Data.SqlClient;
using System.Net;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using TripTracker.Models;
using TripTracker.Utilities;

namespace TripTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripController : ControllerBase
    {
        private IConfiguration _configuration;

        public TripController(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        [HttpPost]
        [Route("addTrip")]
        public ServiceResponse AddTrip(Trip trip)
        {
            int result = -1;
            try
            {
                using (var connection = new SqlConnection(DatabaseUtilities.GetConnectionString(this._configuration)))
                {
                    connection.Open();

                    using (var command = new SqlCommand("dbo.uspInsertTrip", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@tripName", trip.Name);

                        result = (int)command.ExecuteScalar();
                    }
                }

                return new ServiceResponse
                {
                    Code = HttpStatusCode.Created,
                    Message = $"Success! Added: \"{trip.Name}\".",
                    Result = result
                };
            } catch (SqlException exception)
            {
                // Add Logging
            }

            return new ServiceResponse
            {
                Code = HttpStatusCode.InternalServerError,
                Message = $"Failed to add: \"{trip.Name}\"."
            };
            
        }

        [HttpPost]
        [Route("addLeg")]
        public ServiceResponse AddLeg(TripLeg leg)
        {
            try
            {
                using (var connection = new SqlConnection(DatabaseUtilities.GetConnectionString(this._configuration)))
                {
                    connection.Open();

                    using (var command = new SqlCommand("dbo.uspInsertLeg", connection))
                    {
                        command.ExecuteNonQuery();
                    }
                }

                return new ServiceResponse
                {
                    Code = HttpStatusCode.Created,
                    Message = "Success! Added leg."
                };
            } catch (SqlException exception)
            {
                // Add Logging
            }

            return new ServiceResponse
            {
                Code = HttpStatusCode.InternalServerError,
                Message = "Failed to add leg."
            };
        }
    }
}
