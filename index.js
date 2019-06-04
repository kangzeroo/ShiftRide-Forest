require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const app = express();
const port = 6010;

// Set Absolute Paths across backend
global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
};
global.include = function(file) {
  return require(abs_path("/" + file));
};

// Connect to Mongoose
mongoose.connect(
  process.env.MONGO_DB_CONNECTION_STRING,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function() {
  app.use(
    cors({
      origin: [/\.forestadmin\.com$/],
      allowedHeaders: ["Authorization", "X-Requested-With", "Content-Type"],
      credentials: true
    })
  );

  // connect with ForestAdmin mongoose
  app.use(
    require("forest-express-mongoose").init({
      modelsDir: __dirname + "/models/mongo",
      configDir: __dirname + "/forest/mongo",
      envSecret: process.env.FOREST_ENV_SECRET,
      authSecret: process.env.FOREST_AUTH_SECRET,
      mongoose: mongoose
    })
  );

  // Set Routes
  app.get("/", (req, res) => res.send("ShiftRide-Forest API is running..."));
  app.get("/test", (req, res) =>
    res.status(200).send({ message: "Alive and well", timestamp: new Date() })
  );

  // graphql
  const { Schema } = require("./models/graphql/graphql-schema");
  const schema = await Schema;
  app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );

  // Ready
  app.listen(port, () =>
    console.log(`ShiftRide-Forest listening on localhost:${port}!`)
  );
});

{
  /*
// connect to Sequelize
const routes = require('./models/postgres/index');
app.use('/', routes);
app.use(require('forest-express-sequelize').init({
    modelsDir: __dirname + '/models/postgres',
    envSecret: process.env.FOREST_ENV_SECRET,
    authSecret: process.env.FOREST_AUTH_SECRET,
    sequelize: require('models').sequelize,
}));
app.listen(port, () => console.log(`ShiftRide-Forest listening on port ${port}!`))
*/
}
