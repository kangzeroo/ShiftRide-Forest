const Liana = require("forest-express-mongoose");
const User = require("../../models/mongo/user-schema");

module.exports = Liana.collection("Vehicle", {
  fields: [
    {
      field: "vehicle_parked_geopoint",
      type: "String",
      get: vehicle => {
        console.log("0000000---------000000");
        console.log(vehicle);
        return `${vehicle.location.coordinates[0]},${
          vehicle.location.coordinates[1]
        }`;
      }
    },
    {
      field: "vehicle_lockbox_geopoint",
      type: "String",
      get: vehicle => {
        console.log("111111---------111111");
        vehicle.lockboxLocation = JSON.parse(vehicle.lockboxLocation);
        console.log(vehicle);
        return `${vehicle.lockboxLocation.coordinates[0]},${
          vehicle.lockboxLocation.coordinates[1]
        }`;
      }
    }
  ]
});
