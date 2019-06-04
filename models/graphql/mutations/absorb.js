module.exports.absorb = async ({ body }) => {
  const p = new Promise((res, rej) => {
    if (!body.TableName) {
      rej("Missing TableName");
    }
    res({ status: "success", body: body });
  });
  return p;
};
