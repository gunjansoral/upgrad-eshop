const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/index');

//middlewares 
require('dotenv').config();
app.use(bodyParser.json());
const { PORT, MONGODB_URI } = process.env;

// connect db
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

// routes
app.use('/', router);

//connect server
app.listen(PORT, () => {
  console.log('server is listening from port:', PORT)
})