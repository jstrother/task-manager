require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

const seederService = require('./services/seeder.service');

mongoose.connect(process.env.DB_CONNECTION, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
 });

const corsConfig = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
};

app.use(corsConfig);

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

if(process.env.SEED_DATA) {
  seederService.seedData();
}

app.listen(port, () => console.log(`App listening on port ${port}`));
