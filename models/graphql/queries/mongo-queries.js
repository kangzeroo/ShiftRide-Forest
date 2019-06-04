const { ObjectId } = require("mongodb");
const Vehicle = require("../../mongo/vehicle-schema");

module.exports.findVehicleById = ({ vehicleId }) => {
  const p = new Promise((res, rej) => {
    Vehicle.findById(vehicleId, function(err, vehicle) {
      if (err) {
        console.log(err);
        rej(err);
      }
      console.log(vehicle);
      res(vehicle);
    });
  });
  return p;
};

module.exports.findVehicles = () => {
  const p = new Promise((res, rej) => {
    Vehicle.find({}, function(err, vehicles) {
      if (err) {
        rej(err);
      }
      res(vehicles);
    });
  });
  return p;
};
