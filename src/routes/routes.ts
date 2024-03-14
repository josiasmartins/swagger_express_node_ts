import express from 'express';
import { employeeRouter } from '../controllers/employee-route';
import { studentRoute } from '../controllers/student-route';

export const routes = express.Router();

routes.use('/employee', employeeRouter);
routes.use('/student', studentRoute);