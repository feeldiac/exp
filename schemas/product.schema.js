const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(10);
const imageUrl = Joi.string().uri();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    imageUrl: imageUrl.required(),
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    imageUrl: imageUrl,
});

const getProductSchema = Joi.object({
    id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
