test("GET to /api/v1/status Check properties", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  // console.log(responseBody);

  expect(response.status).toBe(200);

  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();

  expect(responseBody.updated_at).toEqual(parseUpdatedAt);
});
