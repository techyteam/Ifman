import PaymentServices from '../services/paymentServices';
import ResponseMsg from '../utils/response';

const {
  creatPayment, getPayments, getAPayment,
  approvePayment,
} = PaymentServices;
const { resLong, resErr } = ResponseMsg;

export default class PaymentsController {
  /**
   * @method getAPayment
   * @description Admin/Accountant gets a user payment
   * @param {object} req - request object
   * @param {object} res - response object
   */
  static async getAPayment(req, res) {
    try {
      const payment = await getAPayment(req.params.id);
      return resLong(res, 200, payment);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
   * @method getAllPayments
   * @description Admin/Accountant gets all payments
   * @param {object} req - request object
   * @param {object} res - response object
   */
  static async getPayments(req, res) {
    try {
      const payments = await getPayments();
      return resLong(res, 200, payments);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
   * @method makePayment
   * @description a user make payment
   * @param {object} req - request object
   * @param {object} res - response object
   */
  static async makePayment(req, res) {
    try {
      req.body.UserId = req.user.id;
      const newPayment = await creatPayment(req.body);
      return resLong(res, 201, newPayment);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }

  /**
   * @method approvePayments
   * @description Admin/Accountant approves/reject a payment
   * @param {object} req - request object
   * @param {object} res - response object
   */
  static async approvePayment(req, res) {
    try {
      const paymentToApprove = await approvePayment(req.params.id);
      return resLong(res, 200, paymentToApprove);
    } catch (error) {
      return resErr(res, 500, error.message);
    }
  }
}
