import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import router from '../routes';

const app = express();
// const router = express.Router();

app.use(bodyParser.json());

app.use('/api/recipes', router);

// router.use('api/recipes/');

app.listen(1337, () => {
  console.log('Server is online');
});

// module.exports = app;
export default app;
