const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  get(request, response) {
    celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  },
};
