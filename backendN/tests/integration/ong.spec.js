const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'Teste - Centro Cultural de Valparaiso de Goias',
      email: 'contatoVal@gmail.com',
      city: 'Valparaiso de Goias',
      whatsapp: '61993471701',
      uf: 'GO',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
