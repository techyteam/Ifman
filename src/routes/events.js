import express from 'express';
import EventsController from '../controllers/eventcontroller';
// import AuthenticateUser from '../middlewares/authenticate';

// const { verifyAdmin, verifyToken } = AuthenticateUser;

const {
  ViewPaginatedEvents,
} = EventsController;

const eventRoutes = express.Router();

eventRoutes.get('/events/pagination', ViewPaginatedEvents);

export default eventRoutes;
