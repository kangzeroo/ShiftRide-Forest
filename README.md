# ShiftRide Forest

ShiftRide's back office dashboard, powered by:

- ForestAdmin
- MongoDB
- GraphQL

Additional Documentation:

- [Trello board](https://trello.com/b/B1wqfLTR/shiftride-tech)
- [GraphQL schema](http://localhost:6010/graphiql)

## Step 0: Prerequisites

Be sure to have a `.env` file at your folder root, and have `Docker Desktop` installed on your OS.

## Step 1: To Run

To run ForestAdmin, you must execute the following commands on your `localhost`:

```bash
$ npm run build
$ npm run docker
```

Then click [here](http://app.forestadmin.com/43840/dashboard/79068) to open the ForestAdmin dashboard on Chrome

## Step 2 (optional): GraphQL

Click [here](http://localhost:6010/graphiql) to view the GraphQL schema and run queries/mutations.

## Step 3: Shut Down

To shut down or restart ForestAdmin, run the following commands:

```bash
$ docker ps -a
$ docker kill <CONTAINER_ID>
$ docker rm <CONTAINER_ID>
```

Now your docker container is cleaned up & your ports are cleared. You can run `Step 1` again to restart ForestAdmin.

## Folder Directory

- `index.js` for the app root
- `models/graphql/graphql-schema.js` for the main `GraphQL` code
- `models/mongo/*` for the `MongoDB` collection schemas
- `models/postgres/*` for the `PostgreSQL` table schemas
