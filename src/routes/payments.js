import express from 'express';
import PaymentsController from '../controllers/paymentsController';
import AuthenticateUser from '../middlewares/authenticate';

const { verifyAdmin, verifyToken } = AuthenticateUser;

const {
  makePayment, getPayments, getAPayment,
  approvePayment,
} = PaymentsController;

const PaymentRoutes = express.Router();


PaymentRoutes.post('/payment', verifyToken, makePayment);
PaymentRoutes.get('/payments', verifyToken, getPayments);
PaymentRoutes.get('/payments/:id', verifyToken, getAPayment);
PaymentRoutes.post('/payments/:id', verifyToken, verifyAdmin, approvePayment);


export default PaymentRoutes;
