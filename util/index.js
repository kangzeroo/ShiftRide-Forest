module.exports.prepare = o => {
  o._id = o._id.toString();
  return o;
};

module.exports.convertToArray = stuff => {
  let cvtStuff = stuff;
  Object.keys(stuff).forEach(k => {
    if (
      stuff[k] &&
      typeof stuff[k] === "string" &&
      stuff[k].indexOf("[ARRAY]") === 0
    ) {
      cvtStuff[k] = stuff[k]
        .replace("[ARRAY]", "")
        .replace(" ", "")
        .split(",")
        .filter(v => Boolean(v));
    }
    if (stuff[k]) {
      Object.keys(stuff[k]).forEach(j => {
        if (
          stuff[k][j] &&
          typeof stuff[k][j] === "string" &&
          stuff[k][j].indexOf("[ARRAY]") === 0
        ) {
          cvtStuff[k][j] = stuff[k][j]
            .replace("[ARRAY]", "")
            .replace(" ", "")
            .split(",")
            .filter(v => Boolean(v));
        }
        if (stuff[k][j]) {
          Object.keys(stuff[k][j]).forEach(l => {
            if (
              typeof stuff[k][j][l] === "string" &&
              stuff[k][j][l].indexOf("[ARRAY]") === 0
            ) {
              cvtStuff[k][j][l] = stuff[k][j][l]
                .replace("[ARRAY]", "")
                .replace(" ", "")
                .split(",")
                .filter(v => Boolean(v));
            }
          });
        }
      });
    }
  });
  return cvtStuff;
};
