const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'OK' });
});

app.use('/api', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server running');
});
