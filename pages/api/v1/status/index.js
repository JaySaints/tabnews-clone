import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();
  const queryOpenedConnections =
    "SELECT count(datid) as opened_connections FROM pg_stat_activity;";
  const resultOpenedConnections = await database.query(queryOpenedConnections);
  const openedConnections = parseInt(
    resultOpenedConnections.rows[0].opened_connections
  );

  const queryMaxConnections = "SHOW max_connections;";
  const resultMaxConnections = await database.query(queryMaxConnections);
  const maxConnections = parseInt(resultMaxConnections.rows[0].max_connections);

  const queryDatabaseVersion = "SELECT version();";
  const resultDatabaseVersion = await database.query(queryDatabaseVersion);
  const splitResult = resultDatabaseVersion.rows[0].version.split(" ");
  const databaseVersion = splitResult[1];

  res.status(200).json({
    updated_at: updatedAt,
    database: {
      status: "",
      max_connections: maxConnections,
      opened_connections: openedConnections,
      version: databaseVersion,
    },
  });
}

export default status;
