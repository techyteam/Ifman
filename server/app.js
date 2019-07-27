import express from 'express';
import debug from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import router from './v1/app/routes';

const log = debug('dev');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res)=> res.status(301).redirect('/api'));
app.use('/api', router);

app.use('*', (req, res) => res.status(404).json({
  status: res.statusCode,
  error:  'Sorry!!, the page you are looking for cannot be found',
}));

app.listen(port, () => {
  log(`Listening on port ${chalk.green(port)}`);
});

export default app;