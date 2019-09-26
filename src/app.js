import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import router from './routes';

const isProduction = process.env.NODE_ENV === 'production';

// Create global app object
const app = express();
app.use(cors());

if (!isProduction) {
  app.use(errorhandler());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => res.status(301).redirect('/api'));
app.use('/api', router);

app.use('*', (req, res) => res.status(404).json({
  status: res.statusCode,
  error: 'Sorry!!, the page you are looking for cannot be found',
}));

export default app;
