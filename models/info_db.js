import database from "infra/database.js";

function version() {
  const query = "SELECT * FROM pg_stat_activity;";
  const result = database.query(query);
  console.log(result);
}

exports = {
  version,
};
