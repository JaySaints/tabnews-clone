import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  const databaseName = process.env.POSTGRES_DB;
  const resultOpenedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const openedConnections = resultOpenedConnections.rows[0].count;

  const resultMaxConnections = await database.query("SHOW max_connections;");
  const maxConnections = parseInt(resultMaxConnections.rows[0].max_connections);

  const resultDatabaseVersion = await database.query("SHOW server_version;");
  const databaseVersion = resultDatabaseVersion.rows[0].server_version;

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: maxConnections,
        opened_connections: openedConnections,
        version: databaseVersion,
      },
    },
  });
}

export default status;
