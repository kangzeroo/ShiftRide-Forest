const Liana = require("forest-express-mongoose");
const Vehicle = require("../../models/mongo/vehicle-schema");

module.exports = Liana.collection("Trip", {
  fields: [
    {
      field: "trip_start_geopoint",
      type: "String",
      get: trip => {
        console.log("0000000---------000000");
        console.log(trip);
        if (
          trip.bookedVehicleLocation &&
          trip.bookedVehicleLocation.coordinates &&
          trip.bookedVehicleLocation.coordinates[0] &&
          trip.bookedVehicleLocation.coordinates[1]
        ) {
          return `${trip.bookedVehicleLocation.coordinates[0]},${
            trip.bookedVehicleLocation.coordinates[1]
          }`;
        } else {
          return "";
        }
      }
    }
  ]
});
