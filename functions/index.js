import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getCars } from './src/cars.js';

const app = express();
app.use(cors());
app.use(express.json())

app.get('/test', (req, res) => {
  res.send('This is actually working!');
});

app.get('/cars', getCars);
app.listen(3000)

export const api = functions.https.onRequest(app);
