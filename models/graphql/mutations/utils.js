const Vehicle = require("../../mongo/vehicle-schema");
const User = require("../../mongo/user-schema");
const Trip = require("../../mongo/trip-schema");

module.exports.allowedTables = tableName => {
  const allowed = [
    { text: "Vehicle", Table: Vehicle },
    { text: "User", Table: User },
    { text: "Trip", Table: Trip }
  ];
  let allow = false;
  let Table = null;
  allowed.forEach(a => {
    if (a.text === tableName) {
      allow = true;
      Table = a.Table;
    }
  });
  if (allow && Table) {
    return Table;
  }
  return null;
};
