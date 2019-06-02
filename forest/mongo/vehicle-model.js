const Liana = require("forest-express-mongoose");

module.exports = Liana.collection("Vehicle", {
  fields: [
    {
      field: "location_geopoint",
      type: "String",
      get: vehicle => {
        return `${vehicle.location.coordinates[0]},${
          vehicle.location.coordinates[1]
        }`;
      }
    },
    {
      field: "lockbox_geopoint",
      type: "String",
      get: vehicle => {
        return `${vehicle.lockboxLocation.coordinates[0]},${
          vehicle.lockboxLocation.coordinates[1]
        }`;
      }
    }
  ]
});
