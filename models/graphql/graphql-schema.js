const { MongoClient, ObjectId } = require("mongodb");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { prepare } = require("../../util/index");
const { typeDefs } = require("./types");
const {
  findVehicleById,
  findVehicles,
  findUserById,
  findUsers,
  findTripById,
  findTrips,
  getFleet,
  getFleetBookings
} = require("./queries/mongo-queries");

module.exports.Schema = (async () => {
  const db = await MongoClient.connect(process.env.MONGO_DB_CONNECTION_STRING);

  const Vehicle = require("../mongo/vehicle-schema");
  const User = require("../mongo/user-schema");
  const Trip = require("../mongo/trip-schema");

  const resolvers = {
    Query: {
      findUserById: async (root, { userId }) => {
        return findUserById({ userId });
      },
      findUsers: async (root, { lat, lng, radius }) => {
        return findUsers({ lat, lng, radius });
      },
      findVehicleById: async (root, { vehicleId }) => {
        return findVehicleById({ vehicleId });
      },
      findVehicles: async (root, { lat, lng, radius, startDate, endDate }) => {
        return findVehicles({ lat, lng, radius, startDate, endDate });
      },
      findTripById: async (root, { tripId }) => {
        return findTripById({ tripId });
      },
      findTrips: async (root, { startDate, endDate, lat, lng, radius }) => {
        return findTrips({ startDate, endDate });
      },
      getFleet: async (root, { userId }) => {
        return getFleet({ userId });
      },
      getFleetBookings: async (root, { vehicleIds, startDate, endDate }) => {
        return getFleetBookings({ vehicleIds, startDate, endDate });
      }
    },

    Mutation: {
      bookTrip: async (root, args, context, info) => {},
      startTrip: async (root, args, context, info) => {},
      endTrip: async (root, args, context, info) => {},
      updateVehicle: async (root, args, context, info) => {}
    },

    User: {
      userVehicles: async ({ userId }) => {
        return (await Vehicle.find({ userId: userId }).toArray()).map(prepare);
      },
      userTrips: async ({ userId, startDate, endDate }) => {
        return (await Trip.find({ userId: userId }).toArray()).map(prepare);
      }
    },
    Vehicle: {
      vehicleTrips: async ({ vehicleId, startDate, endDate }) => {
        return (await Trip.find({ vehicleId: vehicleId }).toArray()).map(
          prepare
        );
      }
    },
    Trip: {
      deviceLogs: async ({ deviceId, startTime, endTime }) => {
        return Promise.resolve("Querying dynamodb device logs...");
      }
    },
    Date: new GraphQLScalarType({
      name: "Date",
      description: "Date custom scalar type",
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return new Date(ast.value); // ast value is always in string format
        }
        return null;
      }
    })
  };

  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
})();
