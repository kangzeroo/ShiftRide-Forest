const { convertToArray } = require("../../../util/index");
const { allowedTables } = require("./utils");
const User = require("../../mongo/user-schema");

module.exports.absorb = async ({ body }) => {
  const p = new Promise((res, rej) => {
    if (!body.TableName) {
      rej("Missing TableName");
    }
    console.log("---> hit me");
    console.log(body);
    const Table = allowedTables(body.TableName);
    console.log(Table);
    if (Table) {
      console.log("Found a Table called ", body.TableName);
      console.log(convertToArray(body));
      const entry = new User(convertToArray(body));
      console.log("Entry called ", entry);
      entry.save(function(err, result) {
        if (err) {
          rej(err);
        }
        console.log("Result named ", result);
        res(result);
      });
    } else {
      rej(`Table ${body.TableName} is not allowed to be saved`);
    }
  });
  return p;
};
