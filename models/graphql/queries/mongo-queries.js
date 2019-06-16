const { ObjectId } = require("mongodb");
const Vehicle = require("../../mongo/vehicle-schema");
const User = require("../../mongo/user-schema");
const Trip = require("../../mongo/trip-schema");

module.exports.findUserById = ({ userId }) => {
  const p = new Promise((res, rej) => {
    User.findById(userId, function(err, user) {
      if (err) {
        console.log(err);
        rej(err);
      }
      console.log(user);
      res(user);
    });
  });
  return p;
};

module.exports.findUsers = ({ lat, lng, radius }) => {
  const p = new Promise((res, rej) => {
    User.find({}, function(err, users) {
      if (err) {
        rej(err);
      }
      res(users);
    });
  });
  return p;
};

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

// query {
// 	findVehicles(lat: 43.4718355,lng: -80.5474189, radius: 1000, startDate: "2019-06-09T23:48:15+0000", endDate: "2019-06-09T23:48:15+0000") {
// 		alias
//   }
// }

module.exports.findVehicles = ({ lat, lng, startDate, endDate, radius }) => {
  const p = new Promise((res, rej) => {
    Vehicle.find(
      {
        location: {
          $near: {
            $maxDistance: radius,
            $geometry: {
              type: "Point",
              coordinates: [lng, lat]
            }
          }
        }
      },
      function(err, vehicles) {
        if (err) {
          rej(err);
        }
        res(vehicles);
      }
    );
  });
  return p;
};

module.exports.findTripById = ({ tripId }) => {
  const p = new Promise((res, rej) => {
    Trip.findById(tripId, function(err, trip) {
      if (err) {
        console.log(err);
        rej(err);
      }
      console.log(trip);
      res(trip);
    });
  });
  return p;
};

module.exports.findTrips = ({ startDate, endDate, lat, lng, radius }) => {
  const p = new Promise((res, rej) => {
    Trip.find(
      {
        tripStart: {
          $lt: startDate,
          $gte: endDate
        }
      },
      function(err, trips) {
        if (err) {
          rej(err);
        }
        res(trips);
      }
    );
  });
  return p;
};

module.exports.getFleet = ({ userId }) => {
  const p = new Promise((res, rej) => {
    Vehicle.find(
      {
        ownerId: userId
      },
      function(err, user) {
        if (err) {
          console.log(err);
          rej(err);
        }
        console.log(user);
        res(user);
      }
    );
  });
  return p;
};

module.exports.getFleetBookings = ({ vehicleIds, startDate, endDate }) => {
  const p = new Promise((res, rej) => {
    Trip.find(
      {
        vehicleId: {
          $in: vehicleIds
        },
        tripStart: {
          $lt: startDate,
          $gte: endDate
        }
      },
      function(err, user) {
        if (err) {
          console.log(err);
          rej(err);
        }
        console.log(user);
        res(user);
      }
    );
  });
  return p;
};
