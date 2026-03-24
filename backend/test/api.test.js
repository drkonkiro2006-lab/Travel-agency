const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const { port } = server.address();
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  if (!server) return;
  await new Promise((resolve, reject) => {
    server.close((err) => (err ? reject(err) : resolve()));
  });
});

test('GET /api/destinations returns destination list', async () => {
  const response = await fetch(`${baseUrl}/api/destinations`);
  assert.equal(response.status, 200);

  const data = await response.json();
  assert.ok(Array.isArray(data));
  assert.ok(data.length > 0);
  assert.equal(typeof data[0].name, 'string');
});

test('GET /api/packages returns package list', async () => {
  const response = await fetch(`${baseUrl}/api/packages`);
  assert.equal(response.status, 200);

  const data = await response.json();
  assert.ok(Array.isArray(data));
  assert.ok(data.length > 0);
  assert.equal(typeof data[0].title, 'string');
});

