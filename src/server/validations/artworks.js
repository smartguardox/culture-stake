import { Joi, Segments } from 'celebrate';

import { imagesValidation } from '~/common/helpers/validate';
import { slugValidation, paginationValidation } from '~/server/validations';

const defaultValidation = {
  title: Joi.string().max(128).required(),
  description: Joi.string().max(2000),
  artistId: Joi.number().integer().positive(),
  images: imagesValidation.max(10),
};

export default {
  create: {
    [Segments.BODY]: {
      ...defaultValidation,
    },
  },
  readAll: {
    [Segments.PARAMS]: {
      ...paginationValidation,
      orderKey: Joi.string().valid('id', 'createdAt', 'updatedAt', 'title'),
    },
  },
  read: {
    [Segments.PARAMS]: {
      ...slugValidation,
    },
  },
  update: {
    [Segments.PARAMS]: {
      ...slugValidation,
    },
    [Segments.BODY]: {
      ...defaultValidation,
    },
  },
  destroy: {
    [Segments.PARAMS]: {
      ...slugValidation,
    },
  },
};
