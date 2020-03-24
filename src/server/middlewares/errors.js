import httpStatus from 'http-status';
import { isCelebrate as isValidationError } from 'celebrate';

import APIError from '~/server/helpers/errors';
import logger from '~/server/helpers/logger';
import { respondWithError } from '~/server/helpers/respond';

// eslint-disable-next-line no-unused-vars
export default function errorsMiddleware(err, req, res, next) {
  console.log(err)
  console.log('errorsMiddleware')
  // Check if error is public facing and known to us
  if (isValidationError(err)) {
    const { joi } = err;

    logger.debug(joi);

    console.log(err)

    // Show validation errors to user
    err = new APIError(httpStatus.BAD_REQUEST);

    if (joi.details) {
      console.log(joi)
      err.data = {
        fields: joi.details.map(detail => {
          return {
            path: detail.path,
            message: detail.message,
          };
        }),
      };
    }
  } else if (
    !(err instanceof APIError) ||
    (!err.isPublic && process.env.NODE_ENV === 'production')
  ) {
    // Log error message internally ..
    if (err.code) {
      const message = err.message || httpStatus[err.code];
      logger.error(`${message} ${err.code} ${err.stack}`);
    } else {
      logger.error(err.stack);
    }

    // .. and expose generic message to public
    err = new APIError(httpStatus.INTERNAL_SERVER_ERROR);
  }

  // Respond with error message and status
  respondWithError(
    res,
    {
      code: err.code,
      message: err.message || httpStatus[err.code],
      ...err.data,
    },
    err.code,
  );
}
