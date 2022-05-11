const boom = require('@hapi/boom');


function validatorHandler(schema, property) {
    //Crear middlewares de forma dinamica
    return (req, res, next) => {
        const data = req[property]; //body, params, query
        const { error } = schema.validate(data, { abortEarly: false })
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

module.exports = validatorHandler;