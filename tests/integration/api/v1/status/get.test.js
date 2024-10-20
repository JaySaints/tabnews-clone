test("GET to /api/v1/status check properties", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(response.status).toBe(200);

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.dependencies.database.version).toBe("16.2");

  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
