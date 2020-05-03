const { NotAuthorizeError } = require('../../../errors/errorTypes');
const errorEmitter = require('../../../errors/errorEmitter');

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

    errorEmitter.emit('error', new NotAuthorizeError());

  }

};

module.exports = { isSelfOrAdmin };
