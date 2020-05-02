const { NotAuthorizeError } = require('../../../errors/errorTypes');
const handleHTTPErrors = require('../../../errors/handleHTTPErrors');

const isSelfOrAdmin = async (req, res, next) => {

  try {

    const { userFromRequest, params } = req;
    const { id } = params;

    console.log(userFromRequest.isAdmin);

    if (userFromRequest.id === id || userFromRequest.isAdmin) {

      req.id = id;

      next();

    } else {

      throw new NotAuthorizeError();

    }

  } catch {

    handleHTTPErrors(new NotAuthorizeError(), res);

  }

};

module.exports = { isSelfOrAdmin };
