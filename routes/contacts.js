const express = require('express');
const router = express.Router();
const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

// GET all contacts
router.get('/', async (req, res) => {
  const result = await mongodb.getDb().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
});

// GET single contact
router.get('/:id', async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .collection('contacts')
    .find({ _id: contactId });

  result.toArray().then((contact) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact[0]);
  });
});

module.exports = router;