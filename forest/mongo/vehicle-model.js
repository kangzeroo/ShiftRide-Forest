const Liana = require("forest-express-mongoose");

module.exports = Liana.collection("Vehicle", {
  fields: [
    {
      field: "location_geopoint",
      type: "String",
      get: vehicle => {
        console.log("0000000---------000000");
        console.log(vehicle);
        return `${JSON.parse(vehicle.location).coordinates[0]},${
          vehicle.location.coordinates[1]
        }`;
      }
    },
    {
      field: "lockbox_geopoint",
      type: "String",
      get: vehicle => {
        console.log("111111---------111111");
        vehicle.lockboxLocation = JSON.parse(vehicle.lockboxLocation);
        console.log(vehicle);
        return `${JSON.parse(vehicle.lockboxLocation).coordinates[0]},${
          vehicle.lockboxLocation.coordinates[1]
        }`;
      }
    }
  ]
});
