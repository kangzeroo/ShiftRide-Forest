const { MongoClient, ObjectId } = require("mongodb");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { prepare } = require("../../util/index");
const { typeDefs } = require("./types");

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
        return prepare(await Vehicle.findOne(ObjectId(vehicleId)));
      },
      geoVehicles: async (root, { lat, lng, startDate, endDate }) => {
        return prepare(await Vehicle.find());
      },
      trip: async (root, { tripId }) => {
        return prepare(await Trip.findOne(ObjectId(tripId)));
      }
      // deviceHistory: async (root, { deviceId }) => {
      //   return prepare(
      //     await Promise.resolve({ status: "querying dynamodb..." })
      //   );
      // }
    },

    // Mutation: {
    //   startTrip: async (root, args, context, info) => {},
    //   endTrip: async (root, args, context, info) => {},
    //   updateVehicle: async (root, args, context, info) => {}
    //   // requestBooking: async (root, args, context, info) => {},
    //   // approveBooking: async (root, args, context, info) => {},
    //
    //   // doSomething: async (root, args, context, info) => {
    //   //   const res = await Posts.insertOne(args);
    //   //   return prepare(res.ops[0]); // https://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~insertOneWriteOpResult
    //   // },
    //   // doSomething: async (root, args) => {
    //   //   const res = await Comments.insert(args);
    //   //   return prepare(await Comments.findOne({ _id: res.insertedIds[1] }));
    //   // }
    // },
    User: {
      userVehicles: async ({ _id }) => {
        return (await Vehicle.find({ userId: _id }).toArray()).map(prepare);
      },
      userTrips: async ({ _id, startDate, endDate }) => {
        return (await User.find({ userId: _id }).toArray()).map(prepare);
      }
    },
    Vehicle: {
      vehicleTrips: async ({ _id, startDate, endDate }) => {
        return (await Trip.find({ vehicleId: _id }).toArray()).map(prepare);
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
