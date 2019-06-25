import express from 'express';
import debug from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './v1/app/routes';

const log = debug('dev');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res)=> res.status(200).json({message: 'Welcome to IFMA'}));
app.use('/api/v1', router);

app.listen(port, () => {
  log(`Listening on port ${chalk.green(port)}`);
});
