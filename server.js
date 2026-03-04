const express = require('express');
const mongodb = require('./database/connect');
const contactsRoutes = require('./routes/contacts');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/contacts', contactsRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});