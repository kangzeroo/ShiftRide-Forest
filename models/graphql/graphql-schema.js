const { MongoClient, ObjectId } = require("mongodb");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { prepare } = require("../../util/index");
const { typeDefs } = require("./types");
const { findVehicleById, findVehicles } = require("./queries/mongo-queries");

module.exports.Schema = (async () => {
  const db = await MongoClient.connect(process.env.MONGO_DB_CONNECTION_STRING);

  const Vehicle = require("../mongo/vehicle-schema");
  const User = require("../mongo/user-schema");
  const Trip = require("../mongo/trip-schema");

  const resolvers = {
    Query: {
      user: async (root, { userId }) => {
        return prepare(await User.findOne(ObjectId(userId)));
      },
      vehicle: async (root, { vehicleId }) => {
        return findVehicleById({ vehicleId });
      },
      vehicles: async (root, { lat, lng, startDate, endDate }) => {
        return findVehicles();
      },
      trip: async (root, { tripId }) => {
        return prepare(await Trip.findOne(ObjectId(tripId)));
      },
      trips: async (root, { startDate, endDate }) => {
        return prepare(await Trip.findOne(ObjectId(tripId)));
      },
      fleet: async (root, { userId }) => {
        return prepare(await Vehicle.find());
      },
      bookings: async (root, { vehicleIds, startDate, endDate }) => {
        return prepare(await Trip.find());
      }
    },

    Mutation: {
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
