import express from 'express';
import morgan from 'morgan';
import router from './v1/app/routes';

const app = express();

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
