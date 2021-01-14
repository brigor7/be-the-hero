const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    /**Realizando controle de transação */
    const { page = 1 } = request.query;

    try {
      const [count] = await connection('incidents').count();

      const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(
          'incidents.*',
          'ongs.name',
          'ongs.email',
          'ongs.whatsapp',
          'ongs.city',
          'ongs.uf'
        );

      /**Inserindo o total no header */
      response.header('x-Total-Count', count['count(*)']);

      return response.json(incidents);
    } catch (error) {}
    console.error('###Error Incident index' + error);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    try {
      await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
      });
    } catch (error) {
      console.error('###Error Incident create' + error);
    }

    response.json({ ong_id, title }).status(201);
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;
    try {
      /**Pesquisar o registro verificando se este é do ong_id */
      const incident = await connection('incidents')
        .select('ong_id')
        .where({ id })
        .first();

      if (incident.ong_id !== ong_id) {
        return response.status(401).json({ error: 'Operation not authotized' });
      }
      /**Excluir o registro */
      await connection('incidents').delete().where({ id });
      return response.status(204).send();
    } catch (error) {}
  },
};
