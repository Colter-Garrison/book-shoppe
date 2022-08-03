const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Book.getAll();
      console.log(data);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
