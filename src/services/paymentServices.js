import { payment } from '../models';

export default class PaymentServices {
  static async creatPayment(paymentInfo) {
    const { dataValues } = await payment.create(paymentInfo);
    return dataValues;
  }

  static async approvePayment(id) {
    const paymentToApprove = await payment.update({
      status: 'approved',
    }, { where: { id } }, { returning: true });
    return paymentToApprove;
  }

  static async rejectPayment(paymentId) {
    const paymentToReject = await payment.update({
      status: 'rejected',
    }, { where: { paymentId } }, { returning: true });
    return paymentToReject;
  }

  static async getPayments() {
    const payments = await payment.findAll();
    return payments;
  }

  static async getAPayment(id) {
    const aPayment = await payment.findOne({
      where: { id },
    });
    return aPayment;
  }
}
