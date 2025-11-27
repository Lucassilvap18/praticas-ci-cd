// tests/app.test.js

const request = require('supertest');
const app = require('../src/app'); // Caminho correto para sair de 'tests' e entrar em 'src'

describe('Health Check Endpoint', () => {
  it('GET /health deve retornar status 200 e status "ok"', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});