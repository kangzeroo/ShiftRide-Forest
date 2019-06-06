const Liana = require("forest-express-mongoose");

module.exports = Liana.collection("User", {
  fields: [
    {
      field: "user_location_geopoint",
      type: "String",
      get: user => {
        console.log("0000000---------000000");
        console.log(user);
        return `${user.location.coordinates[0]},${
          user.location.coordinates[1]
        }`;
      }
    }
  ]
});
