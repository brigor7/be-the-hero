const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;
    console.log('ID: ' + id);
    const ong = await connection('ongs').where({ id }).select('name').first();
    console.log('ONG: ' + ong);
    if (!ong) {
      return response
        .status(400)
        .json({ error: 'Ong não encontrada com este ID.' });
    }
    return response.json(ong);
  },
};
