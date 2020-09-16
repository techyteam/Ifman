import express from 'express';
import swaggerDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerDefinition } from '../utils/swagger-definition';
import userRoutes from './users';
import courseRoutes from './courses';
import PaymentRoutes from './payments';

const router = express.Router();

const options = {
  swaggerDefinition,
  apis: ['**/docs/*.yml'],
};

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc(options)));
router.get('/swagger.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDoc(options));
});

// Home
router.get('/', (req, res) => res.status(301).redirect('api/v1'));
router.get('/v1', (req, res) => res.status(200).json({
  status: res.statusCode,
  message: 'Welcome to IFMAN API version 1',
}));

router.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to version 1 of ifman API' });
});

// Routes
router.use('/v1/auth', userRoutes);
router.use('/v1', courseRoutes);
router.use('/v1', PaymentRoutes);

export default router;
