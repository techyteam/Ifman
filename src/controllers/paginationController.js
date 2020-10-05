// // import CourseServices from '../services/courseServices';
// import ResponseMsg from '../utils/response';

// const db = require('../models');

// const Course = db.course;
// const { Op } = db.Sequelize;
// const { resLong, resErr } = ResponseMsg;
// const getPagination = (page, size) => {
//   const limit = size ? +size : 3;
//   const offset = page ? page * limit : 0;

//   return { limit, offset };
// };

// const getPagingData = (data, page, limit) => {
//   const { count: totalItems, rows: course } = data;
//   const currentPage = page ? +page : 0;
//   const totalPages = Math.ceil(totalItems / limit);
//   return {
//     totalItems, course, totalPages, currentPage,
//   };
// };

// class PaginatedController {
//   static async getPages(req, res) {
//     // exports.findAll(req, res);
//     try {
//       const { page, size, title } = req.query;
//       const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
//       const { limit, offset } = getPagination(page, size);
//       Course.findAndCountAll({ where: condition, limit, offset })
//         .then((data) => {
//           const response = getPagingData(data, page, limit);
//           res.send(response);
//         });
//       return resLong(res, 200, res);
//     } catch (error) {
//       return resErr(res, 400, error.message);
//     }
//   }
// }
// export default PaginatedController;
