const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const regRoute = require('./src/routes/register-route.js');

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://taskAPI:APItask@task.ez1b2.mongodb.net/test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use('/api/register', regRoute);
app.use('/api', router);

app.listen(PORT, () => {
  console.log('Server running! ' + PORT);
});
